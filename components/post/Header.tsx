import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/post/CoverImage'
import Date from 'components/post/Date'
import Excerpt from 'components/post/Excerpt'
import PostTitle from 'components/post/Title'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'authors' | 'slug' | 'excerpt'
  >
) {
  const { title, coverImage, date, authors, slug } = props
  const authorNames = authors?.map((author) => author.name).join(', ')
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <CoverImage title={title} image={coverImage} priority slug={slug} />
      <Excerpt excerpt={props.excerpt} />
      <div className="max-w-2xl text-sm">
        <p className="mb-4 uppercase">
          <span className="text-neutral-400">Written by: </span>
          <span className="font-medium">{authorNames}</span>
        </p>
        <div className="mb-6">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
