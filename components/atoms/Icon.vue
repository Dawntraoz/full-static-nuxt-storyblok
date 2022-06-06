<template>
  <div
    class="rounded-full flex flex-col items-center justify-center w-16 h-16 mb-6"
  >
    <img :src="iconSrc" :alt="iconAlt" width="35" height="35" />
  </div>
</template>

<script>
export default {
  props: {
    iconSrc: {
      type: String,
      required: true,
    },
    iconAlt: {
      type: String,
      required: true,
    },
  },
}
</script>
