import { i18n, BASE_LANGUAGE } from '../localization/locales'
import { AiTwotoneMail } from "react-icons/ai";

export default {
  type: 'document',
  name: 'mainform',
  title: 'Form Text',
  icon: AiTwotoneMail,
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fields: [
    {
      name: 'mainform_name',
      type: 'string',
      title: 'Name',
      description: 'This is a friendly name, that can be only used here in Sanity Studio'
    },
    {
      name: 'mainform_title',
      type: 'richtext',
      title: 'Title'
    },
    {
      name: 'mainform_body',
      type: 'richtext',
      title: 'Body'
    },
  ]
}