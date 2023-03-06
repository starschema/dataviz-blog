import { usePreview } from 'lib/sanity.preview'
import type { Post } from 'lib/sanity.queries'
import { articlesQuery } from 'lib/sanity.queries'

import ArticlesPage from '@/components/articles/ArticlesPage'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const articles: Post[] = usePreview(token, articlesQuery) || []

  return <ArticlesPage articles={articles} />
}
