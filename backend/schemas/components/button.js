import { i18n, BASE_LANGUAGE } from '../localization/locales'

export default {
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  name: 'button',
  type: 'object',
  liveEdit: true,
  title: 'Button',
  fields: [
    {
      name: 'button_label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'button_redirect',
      type: 'boolean',
      title: 'External link',
      initialValue: true,
      description: 'Is the link internal or external?'
    },
    {
      name: 'button_url',
      type: 'url',
      title: 'External URL',
      hidden: ({ parent, value }) => !value && !parent?.button_redirect,
    },
    {
      name: 'button_link',
      type: 'string',
      title: 'Internal Link',
      hidden: ({ parent, value }) => !value && parent?.button_redirect,
    },
    {
      name: 'button_color',
      type: 'color',
      title: 'Color',
    },
  ]
}