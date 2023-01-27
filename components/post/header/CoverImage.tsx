import { urlForImage } from '@/lib/sanity.image'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  sizes?: string
}

export default function CoverImage(props: CoverImageProps) {
  const { title, sizes, image: source } = props
  const hasImage = source?.asset?._ref
  if (!hasImage)
    return <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />

  const imageUrl = urlForImage(source).width(1200).url()

  /* eslint-disable @next/next/no-img-element */
  return <img alt={`Cover Image for ${title}`} src={imageUrl} sizes={sizes} />
}
