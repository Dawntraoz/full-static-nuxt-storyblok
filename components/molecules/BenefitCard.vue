<template>
  <article
    v-editable="blok"
    role="article"
    class="
      group
      h-full
      p-8
      rounded-large
      shadow-inner
      bg-blue-50
      transition
      duration-500
      ease-in-out
      hover:shadow-2xl hover:bg-white
    "
  >
    <Icon
      class="group-hover:shadow-lg"
      :class="colors[blok.color]"
      :icon-src="blok.icon.filename"
      :icon-alt="blok.icon.alt"
    />
    <Heading
      tag="h3"
      :content="blok.name"
      class="text-lg md:text-xl capitalize"
    />
    <Paragraph class="text-md text-gray-600 pb-4" :content="blok.description" />
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
  data() {
    return {
      colors: {
        orange: 'bg-yellow-500',
        purple: 'bg-purple-500',
        blue: 'bg-blue-500',
        green: 'bg-green-500',
      },
    }
  },
}
</script>
