<template>
  <p>
    {{ content }}
  </p>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>
