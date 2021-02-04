import { render, screen } from '@testing-library/vue'

import LinkList from '@/components/molecules/LinkList.vue'

test('should render the list of links', () => {
  render(LinkList, {
    props: {
      links: [
        {
          link: '/benefits',
          content: 'Benefits',
        },
        {
          link: 'https://tests.dev',
          content: 'Tests',
          external: true,
        },
      ],
    },
  })

  expect(screen.getByTestId('linkBenefits')).toBeInTheDocument()
  expect(screen.getByTestId('externalLinkTests')).toBeInTheDocument()
})
