import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

import OpenGraphInput from '@/schemas/settings/OpenGraphInput'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  preview: { select: { title: 'title', subtitle: 'description' } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your blog.',
      title: 'Title',
      type: 'string',
      initialValue: 'Blog Name Placeholder',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description:
        'Used both for the <meta> description tag for SEO, and the blog subheader.',
      title: 'Descriprion',
      type: 'array',
      initialValue: [
        {
          _key: '9f1a629887fd',
          _type: 'block',
          children: [
            {
              _key: '4a58edd077880',
              _type: 'span',
              marks: [],
              text: 'A statically generated blog example using ',
            },
            {
              _key: '4a58edd077881',
              _type: 'span',
              marks: ['ec5b66c9b1e0'],
              text: 'Next.js',
            },
            {
              _key: '4a58edd077882',
              _type: 'span',
              marks: [],
              text: ' and ',
            },
            {
              _key: '4a58edd077883',
              _type: 'span',
              marks: ['1f8991913ea8'],
              text: 'Sanity',
            },
            {
              _key: '4a58edd077884',
              _type: 'span',
              marks: [],
              text: '.',
            },
          ],
          markDefs: [
            {
              _key: 'ec5b66c9b1e0',
              _type: 'link',
              href: 'https://nextjs.org/',
            },
            {
              _key: '1f8991913ea8',
              _type: 'link',
              href: 'https://sanity.io/',
            },
          ],
        },
      ],
      of: [
        defineArrayMember({
          type: 'block',
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: 'object',
                name: 'link',
                fields: [
                  {
                    type: 'string',
                    name: 'href',
                    title: 'URL',
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      description:
        'Used for social media previews when linking to the index page.',
      type: 'object',
      components: {
        input: OpenGraphInput as any,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Blog Name Placeholder',
        }),
      ],
    }),
  ],
})
