import { i18n, BASE_LANGUAGE } from './localization/locales'

export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  // liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  groups: [
    {
      name: 'page',
      title: 'Page',
    },
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'sections',
      title: 'Sections',
    },
  ],
  fields: [
    {
      name: 'page_title',
      type: 'string',
      title: 'Page title',
      validation: Rule => Rule.required(),
      group: 'page'
    },
    {
      name: 'page_slug',
      type: 'string',
      title: 'Slug',
      initialValue: '/',
      readOnly: true,
      group: 'page'
    },
    {
      name: 'page_hero',
      type: 'hero',
      title: 'Page Hero',
      group: 'hero'
    },
    {
      name: 'page_sections',
      type: 'array',
      title: 'Sections',
      group: 'sections',
      of: [
        {
          type: 'section',
        }
      ]
    }
  ]
}