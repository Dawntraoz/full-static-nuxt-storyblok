<template>
  <article
    v-editable="blok"
    role="article"
    class="flex flex-col items-center justify-center"
  >
    <Picture :imageSrc="blok.logo.filename" :imageAlt="blok.logo.alt" />
    <Heading tag="h4" :content="blok.name" class="font-text" />
    <ExternalLink
      class="text-md text-gray-500"
      :link="blok.url"
      :content="blok.url"
      :alt="blok.url"
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
