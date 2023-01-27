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
import Heading from '@/components/post/blocks/Heading'
import Tableau from '@/components/post/blocks/Tableau'
import type { Post } from '@/lib/sanity.queries'

const myPortableTextComponents = {
  types: {
    code: Code,
    image: BodyImage,
    tableau: Tableau,
  },
  block: {
    h1: Heading,
    h2: Heading,
    h3: Heading,
    h4: Heading,
    h5: Heading,
    h6: Heading,
  },
}

interface Props {
  content: Post['content']
}

export default function PostBody(props: Props) {
  return (
    <div className="prose prose-xl prose-neutral mx-auto max-w-[700px]">
      <PortableText
        value={props.content}
        components={myPortableTextComponents}
      />
    </div>
  )
}
