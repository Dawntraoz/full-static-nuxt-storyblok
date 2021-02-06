import '@testing-library/jest-dom'
import Vue from 'vue'
import StoryblokVue from 'storyblok-vue'

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
  '@/components/molecules/HeadingSection.vue',
  '@/components/molecules/BenefitCard.vue',
  '@/components/molecules/TechCard.vue',
]
/* Child organisms (auto imported) */
const organisms = [
  '@/components/organisms/Benefits.vue',
  '@/components/organisms/TechStack.vue',
]
/* Template */
const template = ['@/components/PageTemplate.vue']
const components = [...atoms, ...molecules, ...organisms, ...template]
components.forEach((path) => {
  const name = path.match(/(\w*)\.vue$/)[1]
  Vue.component(`${name}`, require(path).default)
})

// Mock Nuxt Link component
Vue.config.silent = true
config.stubs['nuxt-link'] = { template: '<a><slot /></a>' }

// Use Storyblok package
Vue.use(StoryblokVue)
