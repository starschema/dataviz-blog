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

import componentToBlockMapping from '@/components/post/blocks/componentToBlockMapping'
import ScrollNavigation from '@/components/post/ScrollNav'
import type { Post } from '@/lib/sanity.queries'

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
          components={componentToBlockMapping}
        />
      </div>
      <ScrollNavigation content={props.content} />
    </div>
  )
}
