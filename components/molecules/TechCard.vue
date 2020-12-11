<template>
  <article
    v-editable="blok"
    role="article"
    class="flex flex-col items-center justify-center"
  >
    <Picture :image-src="blok.logo.filename" :image-alt="blok.logo.alt" />
    <Heading tag="h4" :content="blok.name" class="font-text" />
    <ExternalLink
      class="text-md text-gray-500"
      :link="blok.url.url"
      :content="blok.url.url"
      :alt="blok.url.url"
    />
  </article>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
