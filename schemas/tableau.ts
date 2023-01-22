import { BarChartIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const Tableau = defineType({
  name: 'tableau',
  type: 'object',
  title: 'Tableau',
  icon: BarChartIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'string',
      title: 'Tableau URL',
      description: 'The URL of the Tableau dashboard',
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt text',
      description:
        'Alternative text when displaying the dashboard as a static image',
    }),
  ],
})

export default Tableau
