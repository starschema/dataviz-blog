import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/post/CoverImage'
import Date from 'components/post/Date'
import PostTitle from 'components/post/Title'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'authors' | 'slug'>
) {
  const { title, coverImage, date, authors, slug } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        {authors && authors.map(a => <Avatar name={a.name} picture={a.picture} key={a.name}/>)}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
        {authors && authors.map(a => <Avatar name={a.name} picture={a.picture} key={a.name}/>)}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
