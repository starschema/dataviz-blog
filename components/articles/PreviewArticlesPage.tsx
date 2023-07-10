import { useLiveQuery } from 'next-sanity/preview'

import ArticlesPage, {
  ArticlesPageProps,
} from '@/components/articles/ArticlesPage'
import type { Post } from '@/lib/sanity.queries'
import { articlesQuery } from '@/lib/sanity.queries'

export default function PreviewIndexPage(props: ArticlesPageProps) {
  const [articles, loadingArticles] = useLiveQuery(
    props.articles,
    articlesQuery
  )

  return (
    <ArticlesPage articles={articles} draftMode loading={loadingArticles} />
  )
}
