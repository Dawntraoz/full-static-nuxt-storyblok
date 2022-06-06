import { render, screen } from '@testing-library/vue'

import Vuei18n from 'vue-i18n'
import Footer from '@/components/organisms/Footer.vue'
import config from '@/nuxt.config.js'

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
        messages: config.i18n.vueI18n.messages,
      })

      i18n.locales = config.i18n.locales

      // Notice how we return an object from the callback function. It will be
      // merged as an additional option on the created Vue instance.
      return {
        i18n,
      }
    }
  )

  expect(screen.getByText('Benefits')).toBeInTheDocument()
})
