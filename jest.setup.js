import '@testing-library/jest-dom'
import Vue from 'vue'
import { config } from '@vue/test-utils'

/* Child atoms (auto imported) */
const atoms = [
  '@/components/atoms/ExternalLink.vue',
  '@/components/atoms/Heading.vue',
  '@/components/atoms/Icon.vue',
  '@/components/atoms/Link.vue',
  '@/components/atoms/Paragraph.vue',
  '@/components/atoms/Picture.vue',
]
/* Child molecules (auto imported) */
const molecules = [
  '@/components/molecules/LinkList.vue',
  '@/components/molecules/LinkSection.vue',
]
const components = [...atoms, ...molecules]
components.forEach((path) => {
  const name = path.match(/(\w*)\.vue$/)[1]
  Vue.component(`${name}`, require(path).default)
})

// Mock Nuxt Link component
Vue.config.silent = true
config.stubs['nuxt-link'] = { template: '<a><slot /></a>' }

// Mock Editable Storyblok directive
Vue.directive('editable', {
  update: () => '',
})
