export default {
  type: 'object',
  liveEdit: true,
  i18n: true,
  initialValue: {
    __i18n_lang: 'es_ES',
  },
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'hero_title',
      type: 'richtext',
      title: 'Hero title',
      validation: Rule => Rule.required()
    },
    {
      name: 'hero_body',
      type: 'richtext',
      title: 'Hero Body',
    },
    {
      name: 'hero_button',
      type: 'button',
      title: 'Button',
    },
    {
      name: 'hero_image',
      type: 'regularimage',
      title: 'Image',
    },
  ]
}