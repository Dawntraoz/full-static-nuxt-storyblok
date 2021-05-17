<template>
  <header v-editable="blok" class="flex flex-col items-center text-center">
    <Paragraph
      v-if="blok.subtitle"
      class="
        font-title font-bold
        text-gray-900
        pb-4
        text-base
        md:text-lg
        tracking-widest
        text-blue-600
        uppercase
      "
      :content="blok.subtitle"
    />
    <Heading v-if="blok.title" tag="h2" :content="blok.title" />
    <Paragraph
      class="text-gray-600 md:text-lg max-w-2xl md:pt-2"
      :content="blok.intro"
    />
  </header>
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
