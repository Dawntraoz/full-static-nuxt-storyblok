<template>
  <nuxt-link :class="{ 'link-gray': !white, 'link-white': white }" :to="link">
    {{ content }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    white: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.link-gray {
  @apply hover:text-blue-600 focus:text-blue-600 text-gray-500;
}
.link-gray.nuxt-link-exact-active {
  @apply border-blue-600 text-blue-600;
}
.link-white {
  @apply hover:text-gray-100 focus:text-gray-100 text-white;
}
.link-white.nuxt-link-exact-active {
  @apply border-gray-100 text-gray-100;
}
/* Exact internal link active */
.nuxt-link-exact-active {
  @apply border-b-2;
}
</style>
