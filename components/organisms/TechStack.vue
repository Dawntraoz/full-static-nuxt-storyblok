<template>
  <section v-editable="blok" class="py-6 container">
    <component
      :is="heading.component"
      v-for="heading in blok.heading"
      :key="heading._uid"
      :blok="heading"
    />
    <div class="flex flex-wrap justify-center md:-mr-6 py-8 md:py-16">
      <div
        v-for="stack in blok.stack"
        :key="stack._uid"
        class="w-full md:w-1/2 lg:w-1/3 md:pr-6 pb-6"
      >
        <component :is="stack.component" :blok="stack" />
      </div>
    </div>
  </section>
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
