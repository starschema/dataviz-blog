import { PresentationIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'iframe',
  type: 'object',
  title: 'Iframe',
  description: 'A bog standard iframe.',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'src',
      title: 'URL',
      type: 'string',
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'number',
      description: 'The aspect ratio of the iframe. 16:9 is 1.7778',
    }),
  ],
})
