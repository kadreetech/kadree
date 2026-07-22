import { i18n, BASE_LANGUAGE } from '../localization/locales'
import { AiTwotoneFire } from "react-icons/ai";

export default {
  type: 'document',
  name: 'cta',
  title: 'CTA',
  icon: AiTwotoneFire,
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fields: [
    {
      type: 'string',
      name: 'cta_name',
      title: 'Friendly Name',
    },
    {
      type: 'richtext',
      name: 'cta_title',
      title: 'Title',
    },
    {
      type: 'richtext',
      name: 'cta_body',
      title: 'Body',
    },
    {
      name: 'cta_button',
      type: 'button',
      title: 'Button',
    },
    {
      name: 'cta_image',
      type: 'regularimage',
      title: 'Image',
    },
    {
      title: "Background Color",
      name: "cta_color",
      type: "colorlist", // required
      initialValue: '#F2F2F2',
      options: {
        list: [
          { title: "Purple", value: "#5149AB" },
          { title: "Teal", value: "#0BB2D7" },
          { title: "Blue", value: "#1172BA" },
          { title: "Transparent", value: "#FFFFFF" },
        ]
      }
    },
  ]
}