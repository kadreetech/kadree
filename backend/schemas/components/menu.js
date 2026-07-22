import { i18n, BASE_LANGUAGE } from '../localization/locales'

export default {
  type: 'object',
  name: 'menu',
  title: 'Menu',
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fields: [
    {
      name: 'menu_collection',
      title: 'Menu items',
      type: 'array',
      of: [
        {
          name: 'menu_item',
          type: 'link'
        }
      ]
    }
  ]
}