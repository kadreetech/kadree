import { i18n, BASE_LANGUAGE } from '../localization/locales'

export default {
  type: 'object',
  name: 'link',
  title: 'Link',
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fields: [
    {
      name: 'link_label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'link_redirect',
      type: 'boolean',
      title: 'External link',
      initialValue: true,
      description: 'Is the link internal or external?'
    },
    {
      name: 'link_url',
      type: 'url',
      title: 'External URL',
      hidden: ({ parent, value }) => !value && !parent?.link_redirect,
    },
    {
      name: 'link_link',
      type: 'string',
      title: 'Internal Link',
      hidden: ({ parent, value }) => !value && parent?.link_redirect,
    },
  ]
}