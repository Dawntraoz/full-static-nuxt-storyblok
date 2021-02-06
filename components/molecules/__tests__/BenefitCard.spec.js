import { render, screen } from '@testing-library/vue'

import BenefitCard from '@/components/molecules/BenefitCard.vue'

test('should render the card, with a purple background at the icon and a h4 styled heading', () => {
  render(BenefitCard, {
    props: {
      blok: {
        name: 'Title test',
        color: 'purple',
        icon: {
          filename: 'icon.png',
          alt: 'Icon',
        },
        description: 'This is a test',
      },
    },
  })

  expect(screen.getByAltText('Icon').closest('div')).toHaveClass(
    'bg-purple-500'
  )
  expect(screen.getByText('Title test')).toHaveClass(
    'text-lg md:text-xl capitalize'
  )
})
