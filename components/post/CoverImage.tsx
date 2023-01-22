import Image from 'next/image'

import { urlForImage } from '@/lib/sanity.image'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props
  const image = source?.asset?._ref ? (
    <div>
      <Image
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).width(2000).url()}
        sizes="100vw"
        width={2000}
        height={1000}
        priority={priority}
        style={{ objectFit: 'contain', position: 'unset' }}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return image
}
