<template>
  <section>
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </section>
</template>

<script>
import { translatedSlug } from '~/helpers/translatedSlug'

export default {
  asyncData(context) {
    // This what would we do in real project
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    const language =
      context.app.i18n.locale === 'en'
        ? 'default'
        : `${context.app.i18n.locale}`

    // Load the JSON from the API - loadig the page content (any other page)
    return context.app.$storyapi
      .get('cdn/stories/' + context.params.slug, {
        language,
        version,
      })
      .then(async (res) => {
        await context.store.dispatch(
          'i18n/setRouteParams',
          translatedSlug(res.data.story)
        )
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  },
  data() {
    return {
      story: { content: {} },
    }
  },
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new window.StoryblokBridge()

      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      })
    })
  },
}
</script>
