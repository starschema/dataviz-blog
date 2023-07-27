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
import Break from '@/components/post/blocks/Break'
import Code from '@/components/post/blocks/Code'
import ColorSwatch from '@/components/post/blocks/ColorSwatch'
import DangerousHTML from '@/components/post/blocks/DangerousHTML'
import Heading from '@/components/post/blocks/Heading'
import Iframe from '@/components/post/blocks/Iframe'
import PullQuote from '@/components/post/blocks/PullQuote'
import TableauBlock from '@/components/post/blocks/TableauBlock'
import YoutubeVideoBlock from '@/components/post/blocks/YoutubeVideoBlock'
import ScrollNavigation from '@/components/post/ScrollNav'
import type { Post } from '@/lib/sanity.queries'

const myPortableTextComponents = {
  types: {
    code: Code,
    image: BodyImage,
    tableau: TableauBlock,
    youtubeVideo: YoutubeVideoBlock,
    colorSwatch: ColorSwatch,
    inlineHtml: DangerousHTML,
    blockHtml: DangerousHTML,
    break: Break,
    iframe: Iframe,
  },
  block: {
    h1: Heading,
    h2: Heading,
    h3: Heading,
    h4: Heading,
    h5: Heading,
    h6: Heading,
    pullquote: PullQuote,
  },
}

interface Props {
  content: Post['content']
}

export default function PostBody(props: Props) {
  return (
    <div className="grid-flow-col xl:grid">
      {/* FIXME margin should only apply if the scrollnav is not empty */}
      <div className="prose prose-xl prose-neutral mx-auto mb-8 max-w-3xl 2xl:mr-12">
        <PortableText
          value={props.content}
          // @ts-expect-error PullQuote typing is difficult
          components={myPortableTextComponents}
        />
      </div>
      <ScrollNavigation content={props.content} />
    </div>
  )
}
