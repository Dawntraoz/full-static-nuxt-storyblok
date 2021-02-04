import { render, screen } from '@testing-library/vue'

import Header from '@/components/organisms/Header.vue'
import Vuei18n from 'vue-i18n'

const messages = {
  en: {
    benefits: 'Benefits',
    techstack: 'JAMstack',
    benefitsUrl: 'our-benefits',
    techstackUrl: 'our-jamstack',
  },
  es: {
    benefits: 'Beneficios',
    techstack: 'JAMstack',
    benefitsUrl: 'nuestros-beneficios',
    techstackUrl: 'nuestro-jamstack',
  },
}
const locales = [
  {
    code: 'en',
    name: 'EN',
  },
  {
    code: 'es',
    name: 'ES',
  },
]

test('should render the links on header in English', () => {
  render(Header, { mocks: { localePath: () => 'url' } }, (vue) => {
    // Let's register and configure Vuei18n normally
    vue.use(Vuei18n)

    const i18n = new Vuei18n({
      locale: 'en',
      fallbackLocale: 'en',
      messages,
    })

    i18n.locales = locales

    // Notice how we return an object from the callback function. It will be
    // merged as an additional option on the created Vue instance.
    return {
      i18n,
    }
  })

  expect(screen.getByText('Benefits')).toBeInTheDocument()
})

test('should render the links on header in Spanish', () => {
  render(Header, { mocks: { localePath: () => 'url' } }, (vue) => {
    // Let's register and configure Vuei18n normally
    vue.use(Vuei18n)

    const i18n = new Vuei18n({
      locale: 'es',
      fallbackLocale: 'en',
      messages,
    })

    i18n.locales = locales

    // Notice how we return an object from the callback function. It will be
    // merged as an additional option on the created Vue instance.
    return {
      i18n,
    }
  })

  expect(screen.getByText('Beneficios')).toBeInTheDocument()
})
