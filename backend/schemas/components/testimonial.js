import { i18n, BASE_LANGUAGE } from '../localization/locales'

export default {
  type: 'object',
  name: 'testimonial',
  title: 'Testimonial',
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fields: [
    {
      name: 'testimonial_name',
      type: 'string',
      title: 'Customer',
      validation: Rule => Rule.required(),
    },
    {
      name: 'testimonial_company',
      type: 'string',
      title: 'Company',
      validation: Rule => Rule.required(),
    },
    {
      name: 'testimonial_role',
      type: 'string',
      title: 'Position'
    },
    {
      name: 'testimonial_location',
      type: 'string',
      title: 'Location'
    },
    {
      title: "Rating",
      name: "testimonial_rating",
      type: "rating", // Required
      description: "Apply a rating out of 5 stars",
      options: {
        stars: 5, // Optional. Default 5.
      }
    },
    {
      name: 'testimonial_image',
      type: 'regularimage',
      title: 'Image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'testimonial_body',
      type: 'text',
      title: 'Body',
      validation: Rule => Rule.required(),
    },
  ]
}