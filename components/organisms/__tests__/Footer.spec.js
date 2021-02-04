import { render, screen } from '@testing-library/vue'

import Footer from '@/components/organisms/Footer.vue'
import Vuei18n from 'vue-i18n'

const messages = {
  en: {
    benefits: 'Benefits',
    techstack: 'JAMstack',
    benefitsUrl: 'our-benefits',
    techstackUrl: 'our-jamstack',
    footer: {
      desc:
        'Get incredible results in performance, surprise your audience by returning to the Full Static.',
      internal: 'Internal links',
      social: 'Social media',
      contact: 'Contact',
    },
  },
  es: {
    benefits: 'Beneficios',
    techstack: 'JAMstack',
    benefitsUrl: 'nuestros-beneficios',
    techstackUrl: 'nuestro-jamstack',
    footer: {
      desc:
        'Consigue resultados increíbles en performance, sorprende a tu público volviendo al Full Static.',
      internal: 'Links internos',
      social: 'Social media',
      contact: 'Contacto',
    },
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

test('should render the links on footer in English', () => {
  render(
    Footer,
    { mocks: { localePath: () => 'url', switchLocalePath: () => '/es' } },
    (vue) => {
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
    }
  )

  expect(screen.getByText('Benefits')).toBeInTheDocument()
})
