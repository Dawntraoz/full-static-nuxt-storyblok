<template>
  <ul>
    <li v-for="link in links" :key="link.content">
      <Link
        v-if="!link.external"
        :link="link.link"
        :content="link.content"
        :white="link.white"
      />
      <ExternalLink
        v-else
        :link="link.link"
        :content="link.content"
        :alt="link.alt"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>
