import { i18n, BASE_LANGUAGE } from '../localization/locales'

export default {
  type: 'object',
  name: 'address',
  title: 'Address',
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fields: [
    {
      name: 'address_header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'address_body',
      title: 'Address',
      type: 'richtext',
    }
  ]
}