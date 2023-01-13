import Tableau from 'components/tableau/Tableau'
import type { Post } from 'lib/sanity.queries'
import { Suspense } from 'react'

import CoverImage from './CoverImage'
import Excerpt from './Excerpt'
import HeaderMeta from './HeaderMeta'
import PostTitle from './Title'

export default function PostHeader(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'authors' | 'slug' | 'excerpt' | 'layoutType'
  >
) {
  // FIXME: the width of this header does not match the body at large screens. this might be an issue
  const { title, coverImage, date, authors, slug, layoutType } = props

  const visualComponent = layoutType?.layout === 'tableau' ? (
    <Suspense>
      {/* @ts-expect-error Server Component */}
      <Tableau url={layoutType.tableauUrl} alt='missing for now FIXME' className='' />
    </Suspense>
  ) : (
    <CoverImage title={title} image={coverImage} priority slug={slug} />
  )
  return (
    <div className='md:grid md:grid-cols-8 md:gap-5 mx-auto max-w-4xl md:mb-10 '>
      <PostTitle>{title}</PostTitle>
      <HeaderMeta date={date} authors={authors} />
      <div className='col-span-3 col-start-1 row-span-2 row-start-2 flex justify-end mr-8'>
        {visualComponent}
      </div>
      <Excerpt excerpt={props.excerpt} />
    </div>
  )
}
