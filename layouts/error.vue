<template>
  <div class="container">
    <header class="text-center pt-12 pb-4">
      <Heading
        v-if="error.statusCode === 404"
        tag="h1"
        content="Page not found"
      />
      <Heading v-else tag="h1" content="An error occurred" />
    </header>
    <Link link="/" content="Home page" />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
