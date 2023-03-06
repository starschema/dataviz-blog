import { PreviewSuspense } from '@sanity/preview-kit'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

import ArticlesPage from '@/components/articles/ArticlesPage'
import { getArticlesPosts } from '@/lib/sanity.client'
import { Post } from '@/lib/sanity.queries'

const PreviewArticlesPage = lazy(
  () => import('@/components/articles/PreviewArticlesPage')
)

interface PageProps {
  articles: Post[]
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Articles(props: PageProps) {
  const { articles, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense fallback={<ArticlesPage articles={articles} />}>
        <PreviewArticlesPage token={token} />
      </PreviewSuspense>
    )
  }

  return <ArticlesPage articles={articles} />
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const articles = await getArticlesPosts()

  return {
    props: {
      articles,
      preview,
      token: previewData.token ?? null,
    },
  }
}
