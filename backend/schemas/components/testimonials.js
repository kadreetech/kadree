import { i18n, BASE_LANGUAGE } from '../localization/locales'
import { AiTwotoneStar } from "react-icons/ai";

export default {
  type: 'document',
  name: 'testimonials',
  title: 'Testimonials',
  icon: AiTwotoneStar,
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fields: [
    {
      name: 'testimonial_collection_name',
      title: 'Friendly Name',
      description: 'Custom name for the group. It is only used in Sanity',
      type: 'string',
    },
    {
      name: 'testimonial_collection',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'testimonial'
        },
      ]
    },
  ]
}