import { BarChartIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import { TableauInput } from '@/plugins/tableauInput'

import { vcColors } from 'tailwind.config'

const Tableau = defineType({
  name: 'tableau',
  type: 'object',
  title: 'Tableau',
  icon: BarChartIcon,
  components: {
    input: TableauInput,
  },
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
    defineField({
      name: 'width',
      type: 'number',
      title: 'Width',
      description: 'The width of the dashboard in pixels',
    }),
    defineField({
      name: 'height',
      type: 'number',
      title: '',
      description: 'The height of the dashboard in pixels',
    }),
    defineField({
      name: 'borderColor',
      type: 'string',
      initialValue: vcColors.find((color) => color.name === 'vc-lightpurple')!
        .name,
      options: {
        list: vcColors.map((color) => ({
          title: color.title,
          value: color.name,
        })),
      },
    }),
  ],
})

export default Tableau
