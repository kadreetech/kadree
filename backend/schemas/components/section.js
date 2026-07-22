import { i18n, BASE_LANGUAGE } from '../localization/locales'

export default {
  type: 'object',
  name: 'section',
  title: 'Section',
  liveEdit: true,
  i18n: i18n,
  initialValue: {
    __i18n_lang: BASE_LANGUAGE,
  },
  fields: [
    {
      name: 'section_title',
      type: 'string',
      title: 'Section Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'section_content',
      Title: 'Select the content type',
      type: 'string',
      options: {
        list: [
          { value: 'empty', title: 'Empty' },
          { value: 'steps_graphic', title: 'Steps graphic' },
          { value: 'image', title: 'Single Image' },
          { value: 'cta', title: 'Call 2 Action' },
          { value: 'imagecards', title: 'Image Cards' },
          { value: 'textcards', title: 'Text Cards' },
          { value: 'iconcards', title: 'Icon Cards' },
          { value: 'form', title: 'Form' },
          { value: 'testimonials', title: 'Testimonials' },
        ]
      }
    },
    {
      name: 'section_desc',
      type: 'richtext',
      title: 'Section Description',
      rows: 2,
      hidden: ({ parent }) => parent?.section_content === 'empty' || parent?.section_content === 'cta' || parent?.section_content === 'form',
    },
    {
      name: 'section_steps_graphic',
      type: 'reference',
      title: 'Steps',
      desctription: 'Maximum 3 steps',
      to: [{ type: 'stepsgraphics' }],
      hidden: ({ parent }) => parent?.section_content !== 'steps_graphic',
    },
    {
      name: 'section_image',
      type: 'object',
      title: 'Single Image',
      fields: [
        {
          name: 'section_image_desktop',
          type: 'regularimage',
          title: 'Desktop Image',
          validation: Rule => Rule.required()
        },
        {
          name: 'section_image_mobile',
          type: 'regularimage',
          title: 'Mobile Image',
        },
      ],
      hidden: ({ parent }) => parent?.section_content !== 'image',
    },
    {
      name: 'section_imagecards',
      type: 'array',
      title: 'Image Cards',
      desctription: 'Maximum 6 cards',
      hidden: ({ parent }) => parent?.section_content !== 'imagecards',
      validation: Rule => Rule.max(6),
      of: [
        {
          type: 'imagecard',
        }
      ]
    },
    {
      name: 'section_textcards',
      type: 'array',
      title: 'Text Cards',
      desctription: 'Maximum 5 cards',
      hidden: ({ parent }) => parent?.section_content !== 'textcards',
      validation: Rule => Rule.max(5),
      of: [
        {
          type: 'textcard',
        }
      ]
    },
    {
      name: 'section_iconcards',
      type: 'array',
      title: 'Icon Cards',
      desctription: 'Maximum 3 cards',
      hidden: ({ parent }) => parent?.section_content !== 'iconcards',
      validation: Rule => Rule.max(4),
      of: [
        {
          type: 'iconcard',
        }
      ]
    },
    {
      name: 'section_cta',
      title: 'Call 2 Action',
      type: 'reference',
      to: [{ type: 'cta' }],
      hidden: ({ parent }) => parent?.section_content !== 'cta',
    },
    {
      name: 'section_form',
      title: 'Form',
      type: 'reference',
      to: [{ type: 'mainform' }],
      hidden: ({ parent }) => parent?.section_content !== 'form',
    },
    {
      name: 'section_testimonials',
      title: 'Testimonials',
      type: 'reference',
      to: [{ type: 'testimonials' }],
      hidden: ({ parent }) => parent?.section_content !== 'testimonials',
    },
  ]
}