import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/post/CoverImage'
import Date from 'components/post/Date'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

interface Props {
  post: Omit<Post, '_id'>
  isFeatured?: boolean
}
export default function PostPreview(props: Props) {
  const { title, thumbnail, date, excerpt, slug } = props.post
  return (
    <div>
      <Link href={`/posts/${slug}`} className="hover:underline">
        <div className="mb-4">
          <CoverImage
            slug={slug}
            title={title}
            image={thumbnail}
            priority={false}
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
