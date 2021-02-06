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
export default {
  asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API - loading the page content (any other page)
    return context.app.$storyapi
      .get('cdn/stories' + context.route.path + '/home', {
        version,
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          context.error({
            statusCode: 404,
            message: 'Failed to receive content from api',
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
    // Use the input event for instant update of content
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content
      }
    })
    // Use the bridge to listen the events
    this.$storybridge.on(['published', 'change'], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      })
    })
  },
}
</script>
