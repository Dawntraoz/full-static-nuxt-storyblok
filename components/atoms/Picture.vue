<template>
  <figure class="mb-6 rounded-full pt-4">
    <img
      :src="
        imageSrc.replace(
          '//a.storyblok.com',
          '//img2.storyblok.com/250x250/filters:format(jpg)'
        )
      "
      :alt="imageAlt"
      class="rounded-full object-cover"
      width="250"
      height="250"
    />
  </figure>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
  },
}
</script>
