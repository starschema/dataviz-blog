import { defineField, defineType } from 'sanity'

import contentBlockArray from './contentBlock'

const Tabs = defineType({
  name: 'tabsBlock',
  type: 'object',
  title: 'Tabs',
  fields: [
    defineField({
      name: 'tabs',
      type: 'array',
      title: 'Define Tabs and their content here',
      of: [
        {
          type: 'object',
          name: 'tab',
          title: 'Tab',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
            }),
            defineField({
              name: 'content',
              type: 'array',
              title: 'Content',
              of: contentBlockArray,
            }),
          ],
        },
      ],
    }),
  ],
})

export default Tabs
