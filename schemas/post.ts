import { BookIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import PullQuote from '@/components/post/blocks/PullQuote'
import authorType from '@/schemas/author'
import tableauType from '@/schemas/tableau'
import youtubeVideType from '@/schemas/youtubeVideo'

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
      name: 'layout',
      title: 'Layout',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'hero',
          options: {
            list: [
              { title: 'Tableau Thumbnail + Title', value: 'tableau' },
              { title: 'Image Thumbnail + Title', value: 'hero' },
            ],
            layout: 'dropdown',
          },
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'headerTableau',
          title: 'Tableau URL',
          type: 'tableau',
          description: 'The Tableau dashboard to display in the header',
          hidden: ({ parent, value }) => {
            return parent?.type !== 'tableau'
          },
        }),
      ],
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      description: `This image will be used on the home page, in social media previews, and - if you chose the thumbnail layout type - at the top of your post.  It will be cropped to 1.91 aspect ratio for the previews and displayed in full in the featured section of the home page`,
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          description: 'Alt text',
          type: 'string',
          title: 'Alternative text',
          validation: (rule) =>
            rule
              .error(
                'You have to fill out the alternative text for vision-impaired readers.'
              )
              .required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      description: 'Add and edit blocks to create the content for your post.',
      of: [
        {
          type: 'block',
          // overriding default styles to disallow h1-s
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Heading 5', value: 'h5' },
            { title: 'Heading 6', value: 'h6' },
            { title: 'Quote', value: 'blockquote' },
            { title: 'Pull Quote', value: 'pullquote', component: PullQuote },
          ],
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              validation: (rule) =>
                rule
                  .error(
                    'You have to fill out the alternative text for vision-impaired readers.'
                  )
                  .required(),
            },
            {
              name: 'caption',
              type: 'string',
              description:
                'If you provide a caption, it will be displayed below the image in the post',
              title: 'Caption',
            },
          ],
        },

        { type: 'code' },
        { type: tableauType.name },
        { type: youtubeVideType.name },
      ],
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
      media: 'thumbnail',
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
