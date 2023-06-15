import Image from 'next/image'

import { calculateSanityImageDimensions } from '@/lib/calculateSanityImageDimensions'
import { urlForImage } from '@/lib/sanity.image'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
}

export default function FeaturedCoverImage(props: CoverImageProps) {
  const { title, slug, image: source } = props

  const hasImage = source?.asset?._ref
  if (!hasImage)
    return <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />

  const imageUrl = urlForImage(source).url()
  const dimensions = calculateSanityImageDimensions(imageUrl)
  const aspectRatio = dimensions.width / dimensions.height

  return (
    <div className="relative object-contain" style={{ aspectRatio }}>
      <Image
        alt={source.alt}
        src={imageUrl}
        sizes="(min-width: 640px) 66vw, (min-width: 320px) 100vw, 100vw"
        priority
        fill
      />
    </div>
  )
}
