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

import BodyImage from '@/components/post/blocks/BodyImage'
import Code from '@/components/post/blocks/Code'
import Tableau from '@/components/post/blocks/Tableau'

const myPortableTextComponents = {
  types: {
    code: Code,
    image: BodyImage,
    tableau: Tableau,
  },
}

export default function PostBody({ content }) {
  return (
    <div className="prose prose-xl prose-neutral mx-auto max-w-[700px]">
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}
