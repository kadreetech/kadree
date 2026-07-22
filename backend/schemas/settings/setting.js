import { i18n, BASE_LANGUAGE } from '../localization/locales'

export default {
  type: 'document',
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  name: 'setting',
  title: 'Settings',
  groups: [
    {
      name: 'menu',
      title: 'Menu',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'lang',
      title: 'Lang',
    },
  ],
  fields: [
    {
      name: 'settings_page_name',
      title: 'Page name',
      type: 'string',
      hidden: true
    },
    {
      name: 'menu_setting',
      type: 'menu',
      title: 'Main Navigation',
      group: 'menu',
    },
    {
      name: 'footer_setting',
      type: 'footer',
      title: 'Main Footer',
      group: 'footer',
    },
  ]
}