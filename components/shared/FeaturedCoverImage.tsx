import Image from 'next/image'

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

  const imageUrl = urlForImage(source).width(2000).url()
  //example url is: https://cdn.sanity.io/images/gj1oqiyh/production/417f67829999b9da54f647f7d65d58110bb57f08-1199x1499.png?w=2000&fit=max&auto=format
  const [ogWidth, ogHeight] = imageUrl.split('-')[1].split('.')[0].split('x')
  const aspectRatio = parseInt(ogWidth) / parseInt(ogHeight)

  return (
    <div className="relative object-contain" style={{ aspectRatio }}>
      <Image
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).width(2000).url()}
        sizes="100vw"
        priority
        fill
      />
    </div>
  )
}
