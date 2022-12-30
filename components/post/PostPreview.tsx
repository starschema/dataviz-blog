import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/post/CoverImage'
import Date from 'components/post/Date'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview(
  props: Omit<Post, '_id'>
) {

  const { title, coverImage, date, excerpt, authors, slug } = props
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      {authors.map(a => <Avatar name={a.name} picture={a.picture} key={a.name}/>)}
    </div>
  )
}
