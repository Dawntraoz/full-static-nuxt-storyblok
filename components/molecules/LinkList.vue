<template>
  <ul>
    <li v-for="link in links" :key="link.content">
      <Link
        v-if="!link.external"
        :data-testid="`link${link.content}`"
        :link="link.link"
        :content="link.content"
        :white="link.white"
      />
      <ExternalLink
        v-else
        :data-testid="`externalLink${link.content}`"
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
