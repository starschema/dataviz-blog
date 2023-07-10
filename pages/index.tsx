import { GetStaticProps } from 'next'

import IndexPage from '@/components/home/IndexPage'
import PreviewIndexPage from '@/components/home/PreviewIndexPage'
import { readToken } from '@/lib/sanity.api'
import { getClient, getIndexPosts } from '@/lib/sanity.client'
import { IndexPosts } from '@/lib/sanity.queries'
import type { SharedPageProps } from '@/pages/_app'

interface PageProps extends SharedPageProps {
  indexPosts: IndexPosts
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { indexPosts, draftMode } = props

  if (draftMode) {
    return <PreviewIndexPage posts={indexPosts} />
  }

  return <IndexPage posts={indexPosts} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx

  const token = draftMode ? readToken : null
  const client = getClient(draftMode ? { token } : undefined)

  const indexPosts = await getIndexPosts(client)

  return {
    props: {
      indexPosts,
      draftMode,
      token,
      loading: false,
    },
  }
}
