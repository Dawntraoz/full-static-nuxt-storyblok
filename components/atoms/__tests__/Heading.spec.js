import { render, screen } from '@testing-library/vue'

import Heading from '@/components/atoms/Heading.vue'

test('should give the corresponding styles to the heading tag', () => {
  render(Heading, {
    props: {
      tag: 'h1',
      content: 'The Benefits',
    },
  })

  expect(screen.getByText('The Benefits')).toHaveClass(
    'text-5xl md:text-7xl capitalize'
  )
})
