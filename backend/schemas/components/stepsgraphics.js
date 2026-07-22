import { i18n, BASE_LANGUAGE } from '../localization/locales'
import { AiTwotoneThunderbolt } from "react-icons/ai";

export default {
  name: 'stepsgraphics',
  icon: AiTwotoneThunderbolt,
  type: 'document',
  title: 'Steps graphic',
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fields: [
    {
      name: 'stepsgraphics_collection_name',
      title: 'Friendly Name',
      description: 'Custom name for the group. It is only used in Sanity',
      type: 'string',
    },
    {
      name: 'stepsgraphics_collection_body',
      type: 'richtext',
      rows: 2,
      title: 'Body',
    },
    {
      name: 'stepsgraphics_collection',
      title: 'Graphics Collection',
      type: 'array',
      of: [
        {
          type: 'stepsgraphic'
        },
      ]
    },
  ]
}