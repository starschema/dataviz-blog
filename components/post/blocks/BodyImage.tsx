import Image from 'next/image'

import { calculateSanityImageDimensions } from '@/lib/calculateSanityImageDimensions'
import { urlForImage } from '@/lib/sanity.image'

export default function BodyImage(props) {
  const imageData = props.value
  const imageUrl = urlForImage(imageData).url()

  const dimensions = calculateSanityImageDimensions(imageUrl)
  const aspectRatio = dimensions.width / dimensions.height

  // TODO check why we are not using this
  const sizes = [
    '(min-width: 768px) 768px',
    '(min-width: 640px) 608px',
    '(min-width: 375px) 343px',
    '100vw',
  ]

  return (
    <figure className="my-6 w-full">
      <div style={{ aspectRatio }} className="relative">
        <Image
          src={imageUrl}
          alt={imageData.alt}
          style={{ objectFit: 'contain', margin: '0 auto' }}
          sizes={sizes.join(', ')}
          quality={100}
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
