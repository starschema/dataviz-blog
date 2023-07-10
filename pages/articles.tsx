import { GetStaticProps } from 'next'

import ArticlesPage from '@/components/articles/ArticlesPage'
import PreviewArticlesPage from '@/components/articles/PreviewArticlesPage'
import { readToken } from '@/lib/sanity.api'
import { getArticlesPosts, getClient } from '@/lib/sanity.client'
import { Post } from '@/lib/sanity.queries'
import { SharedPageProps } from '@/pages/_app'

interface PageProps extends SharedPageProps {
  articles: Post[]
}

interface Query {
  [key: string]: string
}

export default function Articles(props: PageProps) {
  const { articles, draftMode, token } = props

  if (draftMode) {
    return <PreviewArticlesPage articles={articles} />
  }

  return <ArticlesPage articles={articles} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx

  const token = draftMode ? readToken : null
  const client = getClient(draftMode ? { token } : undefined)
  const articles = await getArticlesPosts(client)

  return {
    props: {
      articles,
      draftMode,
      token,
      loading: false,
    },
  }
}
