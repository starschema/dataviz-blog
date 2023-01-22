import Image from 'next/image'

import { urlForImage } from '@/lib/sanity.image'

export default function BodyImage(props) {
  const imageData = props.value
  const imageUrl = urlForImage(imageData).width(1000).url()

  return (
    <figure className="relative my-6 w-full">
      <Image
        src={imageUrl}
        alt={imageData.alt}
        style={{ objectFit: 'contain', position: 'unset' }}
        sizes="100vw"
        width={2000}
        height={1000}
      />
      {imageData.caption && (
        <figcaption className="text-md text-center text-neutral-500">
          {imageData.caption}
        </figcaption>
      )}
    </figure>
  )
}
