import { i18n, BASE_LANGUAGE } from '../localization/locales'

export default {
  type: 'object',
  name: 'footer',
  title: 'Footer',
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.custom(email => {
        if (typeof email === 'undefined') {
          return true // Allow undefined values
        }

        return email.toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )

          ? true
          : 'This is not an email'
      })
    },
    {
      name: 'footer_address',
      type: 'array',
      title: 'Address',
      of: [
        {
          type: 'address'
        }
      ]
    },
    {
      name: 'footer_social',
      type: 'array',
      title: 'Follow us',
      options: {
        layout: 'checkbox',
        list: [
          { title: 'Linkedin', value: 'linkedin' },
          { title: 'WhatsApp', value: 'whatsapp' },
        ]
      },
      of: [
        {
          type: 'string'
        }
      ]
    },
  ]
}