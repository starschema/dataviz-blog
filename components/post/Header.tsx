import Tableau from '@/components/tableau/Tableau'
import type { Post } from 'lib/sanity.queries'
import { Suspense } from 'react'

import Excerpt from '@/components/post/Excerpt'
import HeaderMeta from '@/components/post/HeaderMeta'
import PostTitle from '@/components/post/Title'
import CoverImage from '@/components/shared/CoverImage' // FIXME: this component needs to be replaced

export default function PostHeader(
  props: Pick<
    Post,
    'title' | 'thumbnail' | 'date' | 'authors' | 'slug' | 'excerpt' | 'layout'
  >
) {
  // FIXME: the width of this header does not match the body at large screens. this might be an issue
  const { title, thumbnail, date, authors, slug, layout } = props

  const visualComponent =
    layout?.type === 'tableau' ? (
      <Tableau
        url={layout.headerTableau.url}
        alt={layout.headerTableau.alt}
        className=""
      />
    ) : (
      <CoverImage title={title} image={thumbnail} priority slug={slug} />
    )
  return (
    <div className="mx-auto max-w-4xl md:mb-10 md:grid md:grid-cols-8 md:gap-5 ">
      <PostTitle>{title}</PostTitle>
      <HeaderMeta date={date} authors={authors} />
      <div className="col-span-3 col-start-1 row-span-2 row-start-2 mr-8 flex justify-end">
        {visualComponent}
      </div>
      <Excerpt excerpt={props.excerpt} />
    </div>
  )
}
