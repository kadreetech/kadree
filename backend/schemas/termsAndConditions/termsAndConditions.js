import { i18n, BASE_LANGUAGE } from '../localization/locales'
import { AiFillFile } from "react-icons/ai";

export default {
  type: 'document',
  i18n: i18n,
  icon: AiFillFile,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  name: 'terms_and_conditions',
  title: 'Terms and Conditions',

  fields: [
    {
      name: 'terms_and_conditions_page_name',
      title: 'Page name',
      type: 'string',
    },
    {
      name: 'terms_and_conditions_body',
      type: 'richtext',
    },
  ]
}