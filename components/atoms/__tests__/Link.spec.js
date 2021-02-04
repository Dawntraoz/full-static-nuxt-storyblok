import { render, screen } from '@testing-library/vue'
import Link from '@/components/atoms/Link.vue'

test('should render the text link Benefits', () => {
  render(Link, {
    props: {
      link: '/benefits',
      content: 'Benefits',
    },
  })

  expect(screen.getByText('Benefits')).toBeInTheDocument()
})
