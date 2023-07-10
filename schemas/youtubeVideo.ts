import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'youtubeVideo',
  type: 'object',
  title: 'YouTube Video',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})
