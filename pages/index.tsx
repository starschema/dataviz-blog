import { PreviewSuspense } from '@sanity/preview-kit'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

import IndexPage from '@/components/home/IndexPage'
import { getIndexPosts } from '@/lib/sanity.client'
import { IndexPosts } from '@/lib/sanity.queries'

const PreviewIndexPage = lazy(
  () => import('@/components/home/PreviewIndexPage')
)

interface PageProps {
  indexPosts: IndexPosts
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Page(props: PageProps) {
  const { indexPosts, preview, token } = props
  if (preview) {
    return (
      <PreviewSuspense fallback={<IndexPage posts={indexPosts} />}>
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return <IndexPage posts={indexPosts} />
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const indexPosts = await getIndexPosts()

  return {
    props: {
      indexPosts,
      preview,
      token: previewData.token ?? null,
    },
  }
}
