<template>
  <div v-editable="blok">
    <header class="container text-center">
      <Heading v-if="blok.title" tag="h1" :content="blok.title" />
    </header>
    <component
      :is="blok.component"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
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
