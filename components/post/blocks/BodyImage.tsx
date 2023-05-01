import Image from 'next/image'

import { calculateSanityImageDimensions } from '@/lib/calculateSanityImageDimensions'
import { urlForImage } from '@/lib/sanity.image'

export default function BodyImage(props) {
  const imageData = props.value
  const imageUrl = urlForImage(imageData).width(1000).url()

  const dimensions = calculateSanityImageDimensions(imageUrl)
  const aspectRatio = dimensions.width / dimensions.height

  return (
    <figure className="my-6 w-full">
      <div style={{ aspectRatio }} className="relative">
        <Image
          src={imageUrl}
          alt={imageData.alt}
          style={{ objectFit: 'contain', margin: '0 auto' }}
          sizes="(min-width: 320px) 100vw, 100vw"
          fill
        />
      </div>
      {imageData.caption && (
        <figcaption className="text-md text-center text-neutral-500">
          {imageData.caption}
        </figcaption>
      )}
    </figure>
  )
}
