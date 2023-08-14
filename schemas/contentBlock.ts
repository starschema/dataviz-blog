import { defineField, defineType } from 'sanity'

import PullQuote from '@/components/post/blocks/PullQuote'
import breakType from '@/schemas/break'
import colorSwatchType from '@/schemas/colorSwatch'
import dangerousHtmlType from '@/schemas/dangerousHtml'
import iframeType from '@/schemas/iframe'
import tableauType from '@/schemas/tableau'
import youtubeVideoType from '@/schemas/youtubeVideo'

const ContentBlock = [
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
    of: [
      { type: colorSwatchType.name },
      defineType({
        name: 'inlineHtml',
        title: 'Dangerous HTML (Inline)',
        type: dangerousHtmlType.name,
      }),
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
  { type: youtubeVideoType.name },
  { type: breakType.name },
  defineType({
    name: 'blockHtml',
    title: 'Dangerous HTML (Block)',
    type: dangerousHtmlType.name,
  }),
  { type: iframeType.name },
]

export default ContentBlock
