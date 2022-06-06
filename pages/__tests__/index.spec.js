import { render, screen } from '@testing-library/vue'

import index from '@/pages/index.vue'

describe('Home page', () => {
  const renderWithAsyncData = async (
    component,
    { asyncDataContext, ...options } = {}
  ) => {
    const initialData = options.data === 'function' ? options.data() : null
    if ('data' in options && initialData === null)
      throw new Error('data should be a function that returns an object')
    if (typeof component.asyncData === 'function') {
      const data = await component.asyncData(asyncDataContext)
      options.data = () => ({ ...(initialData || {}), ...(data || {}) })
    }
    return render(component, options)
  }

  test('should render the links on header in English', async () => {
    await renderWithAsyncData(index, {
      asyncDataContext: {
        app: {
          $storyapi: {
            get() {
              // eslint-disable-next-line promise/param-names
              return new Promise((resolutionFunc) => {
                resolutionFunc({
                  data: {
                    story: {
                      content: {
                        _uid: '627e6287-bbd0-4f34-9528-9f00bf134eba',
                        body: [
                          {
                            _uid: '30b97c89-42a9-4e3a-993b-3abe650f6da5',
                            heading: [
                              {
                                _uid: 'da5452b5-3b43-4fcd-9ad2-2e62845606ab',
                                intro:
                                  'Here you will see the benefits of using Full Static to generate your project.',
                                title: 'Why Full Static',
                                subtitle: 'Benefits',
                                component: 'heading-section',
                                _editable:
                                  '<!--#storyblok#{"name": "heading-section", "space": "99352", "uid": "da5452b5-3b43-4fcd-9ad2-2e62845606ab", "id": "30595513"}-->',
                              },
                            ],
                            benefits: [
                              {
                                _uid: 'e3200323-9ea0-4de4-b4b1-5aa9b86dfec4',
                                icon: {
                                  id: 1705766,
                                  alt: 'Security as a benefit of full static',
                                  name: '',
                                  focus: null,
                                  title: null,
                                  filename:
                                    'https://a.storyblok.com/f/99352/172x172/c826bde453/security.png',
                                  copyright: null,
                                  fieldtype: 'asset',
                                },
                                name: 'Security',
                                color: 'orange',
                                component: 'benefit-card',
                                description:
                                  'There are no intermediaries (e.g. BD), the threat of code injection is minimal.',
                                _editable:
                                  '<!--#storyblok#{"name": "benefit-card", "space": "99352", "uid": "e3200323-9ea0-4de4-b4b1-5aa9b86dfec4", "id": "30595513"}-->',
                              },
                            ],
                            component: 'benefits',
                            _editable:
                              '<!--#storyblok#{"name": "benefits", "space": "99352", "uid": "30b97c89-42a9-4e3a-993b-3abe650f6da5", "id": "30595513"}-->',
                          },
                        ],
                        title: 'Full static with Nuxt & Storyblok',
                        component: 'page-template',
                        _editable:
                          '<!--#storyblok#{"name": "page-template", "space": "99352", "uid": "627e6287-bbd0-4f34-9528-9f00bf134eba", "id": "30595513"}-->',
                      },
                    },
                  },
                })
              })
            },
          },
          i18n: {},
        },
        query: '',
        route: {
          path: '',
        },
      },
      mocks: {
        $storybridge: jest.fn(),
      },
    })

    // Testing heading 1
    expect(screen.getByText('Full static with Nuxt & Storyblok')).toHaveClass(
      'text-5xl md:text-7xl capitalize'
    )
    // Testing heading 2
    expect(screen.getByText('Why Full Static')).toHaveClass(
      'text-3xl md:text-5xl capitalize'
    )
    expect(
      screen.getByAltText('Security as a benefit of full static').closest('div')
    ).toHaveClass('bg-yellow-500')
    // Testing heading 4
    expect(screen.getByText('Security')).toHaveClass(
      'text-lg md:text-xl capitalize'
    )
  })
})
