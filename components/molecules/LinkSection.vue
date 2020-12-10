<template>
  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pr-4 pb-6">
    <Heading tag="h3" :content="title" />
    <LinkList class="flex flex-col space-y-2" :links="links" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>
