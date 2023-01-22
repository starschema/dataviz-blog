import Link from 'next/link'

import CoverImage from '@/components/shared/CoverImage'
import Date from '@/components/shared/Date'
import type { Post } from '@/lib/sanity.queries'

interface Props {
  post: Omit<Post, '_id'>
  withExcerpt?: boolean
  imageSizes?: string
}
export default function PostPreview(props: Props) {
  const { withExcerpt, imageSizes, post } = props
  const { title, thumbnail, date, excerpt, slug } = post
  return (
    <div>
      <Link href={`/posts/${slug}`} className="hover:underline">
        <div className="mb-4">
          <CoverImage
            slug={slug}
            title={title}
            image={thumbnail}
            priority={false}
            sizes={imageSizes ? imageSizes : undefined}
          />
        </div>
        <h3 className="mb-3 text-xl font-medium leading-snug">{title}</h3>
      </Link>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      {/* <p className="mb-4 text-lg leading-relaxed">{excerpt}</p> */}
      {/* {authors.map(a => <Avatar name={a.name} picture={a.picture} key={a.name}/>)} */}
    </div>
  )
}
