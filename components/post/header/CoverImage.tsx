import Image from 'next/image'

import { calculateSanityImageDimensions } from '@/lib/calculateSanityImageDimensions'
import { urlForImage } from '@/lib/sanity.image'
import { Post } from '@/lib/sanity.queries'

interface CoverImageProps {
  title: string
  slug?: string
  image: Post['thumbnail']
}

export default function CoverImage(props: CoverImageProps) {
  const { title, image: source } = props
  const hasImage = source?.asset?._ref
  if (!hasImage)
    return <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />

  const imageUrl = urlForImage(source).url()
  const dimensions = calculateSanityImageDimensions(imageUrl)
  const aspectRatio = dimensions.width / dimensions.height

  const sizes = [
    '(min-width: 1024px) 896px',
    '(min-width: 768px) 768px',
    '(min-width: 640px) 640px',
    '(min-width: 375px) 375px',
    '100vw',
  ]

  return (
    <div className="w-full">
      <div style={{ aspectRatio }} className="relative sm:relative">
        <Image
          src={imageUrl}
          alt={source.alt ?? ''}
          style={{ objectFit: 'contain', margin: '0 auto' }}
          sizes={sizes.join(', ')}
          priority
          fill
        />
      </div>
    </div>
  )
}

// "http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fgj1oqiyh%2Fproduction%2Fd4d08ec408bd66f47d94912c8f4a5c6d1c0bfae2-4138x2100.png%3Ffit%3Dmax%26auto%3Dformat&w=1080&q=75"
