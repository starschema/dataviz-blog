import type { Post } from 'lib/sanity.queries'

import CoverImage from './CoverImage'
import Date from './Date'
import Excerpt from './Excerpt'
import PostTitle from './Title'

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
