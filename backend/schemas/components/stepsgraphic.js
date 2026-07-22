export default {
  name: 'stepsgraphic',
  type: 'object',
  title: 'Steps graphic',
  liveEdit: true,
  fields: [
    {
      name: 'steps_graphic_title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'steps_graphic_desc',
      type: 'richtext',
      rows: 2,
      title: 'Description',
    },
    {
      title: 'Image',
      name: 'step_image',
      type: 'regularimage'
    },
  ]
}