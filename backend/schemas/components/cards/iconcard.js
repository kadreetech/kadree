import { i18n, BASE_LANGUAGE } from '../../localization/locales'

export default {
  type: 'object',
  name: 'iconcard',
  title: 'Icon Card',
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fieldsets: [{
    name: 'icon',
    title: 'Icon'
  }],
  fields: [
    {
      type: 'string',
      name: 'card_name',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      type: 'text',
      name: 'card_text',
      title: 'Text',
      rows: 2,
    },
    {
      title: "Text Color",
      name: "color",
      type: "colorlist", // required
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
    {
      type: 'boolean',
      name: 'card_icon_source',
      title: 'Is the icon on the list',
      description: 'Select one from the list or paste the SVG code in the box',
      fieldset: 'icon',
      initialValue: true,
    },
    {
      type: 'text',
      name: 'card_icon_svg',
      title: 'SVG Icon',
      fieldset: 'icon',
      rows: 2,
      hidden: ({ parent, value }) => parent?.card_icon_source,
    },
    {
      type: 'string',
      name: 'card_icon_selection',
      title: 'Icon',
      fieldset: 'icon',
      options: {
        list: [
          { title: "Staff", value: "icon_staff" },
          { title: "Lab", value: "icon_lab" },
          { title: "Knight", value: "icon_knight" },
          { title: "Cog", value: "icon_money_cog" },
          { title: "Profiling", value: "icon_profiling" },
          { title: "Low Risk", value: "icon_low_risk" },
          { title: "Shield", value: "icon_shield" },
        ]
      },
      hidden: ({ parent, value }) => !parent?.card_icon_source,
    },

  ]
}