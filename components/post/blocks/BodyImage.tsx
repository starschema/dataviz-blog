import Image from 'next/image'

import { calculateSanityImageDimensions } from '@/lib/calculateSanityImageDimensions'
import { urlForImage } from '@/lib/sanity.image'

export default function BodyImage(props) {
  const imageData = props.value
  let imageUrl
  try {
    imageUrl = urlForImage(imageData).url()
  } catch (error) {
    console.error('Failed to generate image URL for Sanity image')
    console.log(imageData)
    console.error(error)
    return null
  }

  const dimensions = calculateSanityImageDimensions(imageUrl)
  const aspectRatio = dimensions.width / dimensions.height

  const sizes = [
    `(min-width: 768px) ${Math.min(768, dimensions.width)}px`,
    `(min-width: 640px) ${Math.min(608, dimensions.width)}px`,
    `(min-width: 375px) ${Math.min(343, dimensions.width)}px`,
    '100vw',
  ]

  return (
    <figure className="my-6 w-full">
      <div
        style={{ aspectRatio, maxWidth: dimensions.width }}
        className="relative mx-auto"
      >
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
