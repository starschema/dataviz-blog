import AuthorMeta from 'components/post/AuthorMeta'
import CoverImage from 'components/post/CoverImage'
import Date from 'components/post/Date'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

interface Props {
  post: Omit<Post, '_id'>
}
export default function PostPreview(props: Props) {
  const { title, thumbnail, date, excerpt, slug } = props.post
  return (
    // FIXME: add layout for SM and below
    <div
      className="grid grid-flow-row grid-cols-1 items-center gap-24 bg-[#A5B4F7] py-16 shadow-[0_0_0_100vmax_#A5B4F7] md:grid-cols-2"
      style={{ clipPath: 'inset(0 -100vmax)' }}
    >
      <Link href={`/posts/${slug}`}>
        <CoverImage
          slug={slug}
          title={title}
          image={thumbnail}
          priority={false}
        />
      </Link>
      <div className="h-fit bg-white p-12">
        <Link
          href={`/posts/${slug}`}
          className="underline-offset-4 hover:underline"
        >
          <h3 className="mb-3 text-4xl font-bold leading-tight">{title}</h3>
        </Link>
        <AuthorMeta authors={props.post.authors} />
        <p>{excerpt}</p>
        <Date dateString={date} />
      </div>
    </div>
  )
}
