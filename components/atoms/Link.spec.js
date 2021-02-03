import { render } from '@testing-library/vue'

import Link from '@/components/atoms/Link.vue'

test('Represent the link', () => {
  const { getByText } = render(Link, {
    props: {
      link: '/benefits',
      content: 'Benefits',
    },
    stubs: ['nuxt-link'],
  })

  expect(getByText('Benefits')).toBeInTheDocument()
})