import { render, screen } from '@testing-library/vue'

import Vuei18n from 'vue-i18n'
import Header from '@/components/organisms/Header.vue'
import config from '@/nuxt.config.js'

describe('Header component', () => {
  const renderExtended = (locale) => {
    render(Header, { mocks: { localePath: () => 'url' } }, (vue) => {
      // Let's register and configure Vuei18n normally
      vue.use(Vuei18n)

      const i18n = new Vuei18n({
        locale,
        fallbackLocale: 'en',
        messages: config.i18n.vueI18n.messages,
      })

      i18n.locales = config.i18n.locales

      // Notice how we return an object from the callback function. It will be
      // merged as an additional option on the created Vue instance.
      return {
        i18n,
      }
    })
  }

  test('should render the links on header in English', () => {
    renderExtended('en')

    expect(screen.getByText('Benefits')).toBeInTheDocument()
  })

  test('should render the links on header in Spanish', () => {
    renderExtended('es')

    expect(screen.getByText('Beneficios')).toBeInTheDocument()
  })
})
