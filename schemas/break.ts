import { StackIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'break',
  type: 'object',
  title: 'Break',
  icon: StackIcon,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: 'horizontal',
      options: {
        list: [{ title: 'Horizontal Divider', value: 'horizontal' }],
      },
    }),
  ],
})
