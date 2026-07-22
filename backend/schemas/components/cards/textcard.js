import { i18n, BASE_LANGUAGE } from '../../localization/locales'

export default {
  type: 'object',
  name: 'textcard',
  title: 'Text Card',
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fields: [
    {
      name: 'textcard_title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'textcard_body',
      title: 'Body',
      type: 'richtext'
    },
  ]
}