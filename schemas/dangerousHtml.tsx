import { ErrorOutlineIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dangerousHtml',
  type: 'object',
  title: 'Dangerous HTML',
  description:
    'Use with caution! You can break our users experience with this field.',
  icon: ErrorOutlineIcon,
  fields: [
    defineField({
      name: 'html',
      title: 'HTML',
      type: 'code',
      options: {
        language: 'html',
        languageAlternatives: [{ title: 'HTML', value: 'html' }],
      },
    }),
  ],
})
