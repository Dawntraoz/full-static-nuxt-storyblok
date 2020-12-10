export const translatedSlug = (story) => {
  const slugs = {
    en: { slug: story.slug },
  }
  story.translated_slugs.forEach((t) => {
    const tmp = t.path.split('/')
    slugs[t.lang] = { slug: tmp[tmp.length - 1] }
  })

  return slugs
}
