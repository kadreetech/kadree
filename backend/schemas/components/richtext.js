import { i18n, BASE_LANGUAGE } from '../localization/locales'

export default {
  name: 'richtext',
  title: 'Text',
  i18n: i18n,
  liveEdit: true,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  type: 'array',
  rows: 2,
  of: [
    {
      type: 'block'
    },
    {
      type: 'image',
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Alternative text',
          description: `Some of your visitors cannot see images,
            be they blind, color-blind, low-sighted;
            alternative text is of great help for those
            people that can rely on it to have a good idea of
            what\'s on your page.`,
          options: {
            isHighlighted: true
          }
        }
      ]
    },
  ]
}