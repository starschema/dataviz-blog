import type { PortableTextTypeComponentProps } from '@portabletext/react'

import YoutubeVideo from '@/components/shared/YoutubeVideo'
import type { YoutubeVideo as YoutubeVideoType } from '@/lib/sanity.queries'

interface YoutubeVideoValue extends YoutubeVideoType {
  _type?: 'youtubeVideo'
}

export default function YoutubeVideoBlock(
  props: PortableTextTypeComponentProps<YoutubeVideoValue>
) {
  return (
    <div className="my-6">
      <YoutubeVideo src={props.value.url} />
    </div>
  )
}
