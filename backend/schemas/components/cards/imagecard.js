import { i18n, BASE_LANGUAGE } from '../../localization/locales'

export default {
  type: 'object',
  name: 'imagecard',
  title: 'Image Card',
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fields: [
    {
      type: 'string',
      name: 'card_name',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      type: 'richtext',
      name: 'card_text',
      title: 'Text',
      rows: 2,
    },
    {
      type: 'regularimage',
      name: 'card_image',
      title: 'Image',
      validation: Rule => Rule.required()
    },
    {
      title: "Text Color",
      name: "color",
      type: "colorlist", // required
      initialValue: '#F2F2F2',
      options: {
        list: [
          { title: "Purple", value: "#5149AB" },
          { title: "Teal", value: "#0BB2D7" },
          { title: "Blue", value: "#1172BA" },
          { title: "White", value: "#F2F2F2" },
          { title: "Black", value: "#231F20" },
        ]
      }
    },
  ]
}