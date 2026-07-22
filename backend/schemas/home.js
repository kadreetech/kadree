import { i18n, BASE_LANGUAGE } from './localization/locales'

export default {
  type: 'document',
  name: 'home',
  title: 'Home',
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
      name: 'home_page_title',
      type: 'string',
      title: 'Page title',
      initialValue: 'Home',
      validation: Rule => Rule.required(),
      group: 'page'
    },
    {
      name: 'home_page_slug',
      type: 'string',
      title: 'Slug',
      initialValue: '/',
      readOnly: true,
      group: 'page'
    },
    {
      name: 'home_hero',
      type: 'hero',
      title: 'Home Hero',
      group: 'hero'
    },
    {
      name: 'home_sections',
      type: 'array',
      title: 'Sections',
      group: 'sections',
      of: [
        {
          type: 'section',
        },
      ]
    }
  ]
}