import type { Post } from 'lib/sanity.queries'

import CoverImage from '@/components/post/header/CoverImage'
import Excerpt from '@/components/post/header/Excerpt'
import Meta from '@/components/post/header/Meta'
import TableauHeader from '@/components/post/header/TableauHeader'
import PostTitle from '@/components/post/header/Title'

export default function PostHeader(
  props: Pick<
    Post,
    'title' | 'thumbnail' | 'date' | 'authors' | 'slug' | 'excerpt' | 'layout'
  >
) {
  const { title, thumbnail, date, authors, slug, layout } = props

  const isTableau = layout?.type === 'tableau'

  const visualComponent = isTableau ? (
    <TableauHeader {...layout.headerTableau} className="mr-8" />
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
      }}
    >
      <PostTitle>{title}</PostTitle>
      <Meta date={date} authors={authors} />
      <div className="flex justify-end" style={{ gridArea: 'vis' }}>
        {visualComponent}
      </div>
      <Excerpt excerpt={props.excerpt} />
    </div>
  )
}
