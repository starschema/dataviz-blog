import Image from 'next/image'

import { urlForImage } from '@/lib/sanity.image'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
  sizes?: string
}

export default function CoverImage(props: CoverImageProps) {
  const { title, sizes, image: source, priority } = props
  const hasImage = source?.asset?._ref
  if (!hasImage)
    return <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />

  const imageUrl = urlForImage(source).width(1200).height(630).url()

  return (
    <div className="relative aspect-[1200/630] object-cover">
      <Image
        alt={`Cover Image for ${title}`}
        src={imageUrl}
        sizes={sizes}
        priority={priority}
        fill
      />
    </div>
  )
}
