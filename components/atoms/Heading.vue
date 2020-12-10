<template>
  <component
    :is="tag"
    :class="classes[tag]"
    class="font-title font-bold text-gray-900 pb-4"
  >
    {{ content }}
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      classes: {
        h1: 'text-5xl md:text-7xl capitalize',
        h2: 'text-3xl md:text-5xl capitalize',
        h3: 'text-xl md:text-3xl capitalize',
        h4: 'text-lg md:text-xl capitalize',
        h5: 'text-base md:text-lg',
        h6: 'text-md md:text-base',
      },
    }
  },
}
</script>
