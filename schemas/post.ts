import { BookIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import authorType from './author'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'post',
  title: 'Post',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This will be used to create the URL for your post.',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
    }),
    defineField({
      name: 'layoutType',
      title: 'Layout Type',
      type: 'object',
      fields: [
        defineField({
          name: 'layout',
          title: 'Layout',
          type: 'string',
          options: {
            list: [
              { title: 'Tableau Thumbnail + Title', value: 'tableau' },
              { title: 'Title Only', value: 'titleOnly' },
              { title: 'Hero + Title', value: 'hero' },
            ],
            layout: 'dropdown',
          },
        }),
        defineField({
          name: 'tableauUrl',
          title: 'Tableau URL',
          type: 'url',
          description: 'The URL of the Tableau dashboard',
          hidden: ({ parent, value }) => {
            console.log(parent, value)
            return parent.layout !== 'tableau'
          },
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      description: 'Add and edit blocks to create the content for your post.',
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [{ name: 'alt', type: 'string', title: 'Alternative text' }],
        },
        { type: 'code' },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'This will be used as the cover image for your post.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{ type: authorType.name }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author0: 'authors.0.name',
      author1: 'authors.1.name',
      author2: 'authors.2.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author0, author1, author2, date }) {
      const authors = [author0, author1, author2].filter(Boolean)
      const subtitles = [
        authors.length > 0 && `by ${authors.join(', ')}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
