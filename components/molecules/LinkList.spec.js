import { render } from '@testing-library/vue'

import LinkList from '@/components/molecules/LinkList.vue'

test('Represent the links', () => {
  const { getByTestId } = render(LinkList, {
    props: {
      links: [
        {
          link: '/benefits',
          content: 'Benefits',
        },
      ],
    },
  })

  expect(getByTestId('link-Benefits')).toBeInTheDocument()
})