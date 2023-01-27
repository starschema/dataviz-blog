import type { Post } from 'lib/sanity.queries'

import CoverImage from '@/components/post/header/CoverImage'
import Excerpt from '@/components/post/header/Excerpt'
import Meta from '@/components/post/header/Meta'
import Tableau from '@/components/post/header/tableauHeader/Tableau'
import PostTitle from '@/components/post/header/Title'

export default function PostHeader(
  props: Pick<
    Post,
    'title' | 'thumbnail' | 'date' | 'authors' | 'slug' | 'excerpt' | 'layout'
  >
) {
  // FIXME: the width of this header does not match the body at large screens. this might be an issue
  const { title, thumbnail, date, authors, slug, layout } = props

  const isTableau = layout?.type === 'tableau'

  const visualComponent = isTableau ? (
    <Tableau
      url={layout.headerTableau.url}
      alt={layout.headerTableau.alt}
      className=""
    />
  ) : (
    <CoverImage title={title} image={thumbnail} slug={slug} />
  )

  const parentLayout = isTableau ? 'md:grid' : 'block'
  const gridTemplateAreas = isTableau
    ? '"title title" "vis excerpt" "vis meta"'
    : '"title title" "meta meta" "excerpt excerpt"'

  return (
    <div
      className={`items-middle mx-auto max-w-4xl md:mb-10 md:gap-5 ${parentLayout}`}
      style={{
        gridTemplateAreas: gridTemplateAreas,
        gridTemplateRows: 'auto 1fr 1fr',
      }}
    >
      <PostTitle>{title}</PostTitle>
      <Meta date={date} authors={authors} />
      <div className="mr-8 flex justify-end" style={{ gridArea: 'vis' }}>
        {visualComponent}
      </div>
      <Excerpt excerpt={props.excerpt} />
    </div>
  )
}
