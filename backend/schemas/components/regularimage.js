import { i18n, BASE_LANGUAGE } from '../localization/locales'
export default {
  title: 'Image',
  name: 'regularimage',
  type: 'image',
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  options: {
    hotspot: true // <-- Defaults to false
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    }
  ]
}