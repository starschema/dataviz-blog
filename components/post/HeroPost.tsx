import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/post/CoverImage'
import Date from 'components/post/Date'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function HeroPost(props: Omit<Post, '_id'>) {
  const { title, coverImage, date, excerpt, authors, slug } = props
  return (
    <section>
      <div className="mb-4 md:mb-16">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-3 text-xl font-medium leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title || 'Untitled'}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          {/* {authors.map(a => <AuthorAvatar name={a.name} picture={a.picture} key={a.name}/>)} */}
        </div>
      </div>
    </section>
  )
}

// FIXME: this component should be merged with the PostPreview component
