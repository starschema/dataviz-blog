import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isGuest',
      title: 'Guest Author?',
      type: 'boolean',
      initialValue: false,
      description:
        'Checking this remove the author from the author list on the About page',
    }),
  ],
})
