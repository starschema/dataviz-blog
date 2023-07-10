import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'colorSwatch',
  type: 'object',
  title: 'Color Swatch',
  fields: [
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})
