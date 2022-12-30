import { PortableTextTypeComponentProps } from '@portabletext/react'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'

// type Props = PortableTextTypeComponentProps<CodeInputValue>
export default function BodyImage(props) {
  const imageData = props.value
  const imageUrl = urlForImage(imageData).width(1000).url()

  // const { src, alt, width, height } = props.node
  return (
    <div className="relative my-6 w-full">
      <Image
        src={imageUrl}
        alt={imageData.alt}
        style={{ objectFit: 'contain', position: 'unset' }}
        sizes="100vw"
        width={2000}
        height={1000}
      />
    </div>
  )
}
