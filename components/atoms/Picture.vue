<template>
  <figure class="mb-6 pt-4">
    <img
      :src="
        imageSrc.replace(
          '//a.storyblok.com',
          '//img2.storyblok.com/0x120/filters:format(png)'
        )
      "
      :alt="imageAlt"
      height="120"
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
