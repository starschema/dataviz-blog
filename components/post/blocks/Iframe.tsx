import type { PortableTextTypeComponentProps } from '@portabletext/react'

import type { Iframe } from '@/lib/sanity.queries'

interface IframeValue extends Iframe {
  _type?: 'iframe'
}
export default function ColorSwatch(
  props: PortableTextTypeComponentProps<IframeValue>
) {
  const { src, aspectRatio } = props.value

  return (
    <div style={{ aspectRatio }}>
      <iframe
        src={src}
        loading="lazy"
        className="h-full w-full overflow-auto"
      />
    </div>
  )
}
