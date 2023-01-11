/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react'
import BodyImage from 'components/blocks/BodyImage'
import Code from 'components/blocks/Code'
import Tableau from 'components/blocks/Tableau'

const myPortableTextComponents = {
  types: {
    code: Code,
    image: BodyImage,
    tableau: Tableau,
  },
}

export default function PostBody({ content }) {
  return (
    <div className='mx-auto max-w-4xl prose prose-neutral prose-xl'>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}
