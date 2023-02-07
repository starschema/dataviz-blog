import { PreviewSuspense } from '@sanity/preview-kit'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

import PostPage from '@/components/post/PostPage'
import { getAllPostsSlugs, getPostAndMoreStories } from '@/lib/sanity.client'
import { Post } from '@/lib/sanity.queries'

const PreviewPostPage = lazy(() => import('@/components/post/PreviewPostPage'))

interface PageProps {
  post: Post
  morePosts: Post[]
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { post, morePosts, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PostPage loading preview post={post} morePosts={morePosts} />
        }
      >
        <PreviewPostPage token={token} post={post} morePosts={morePosts} />
      </PreviewSuspense>
    )
  }

  return <PostPage post={post} morePosts={morePosts} />
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const { post, morePosts } = await getPostAndMoreStories(params.slug, token)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      morePosts,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: false,
  }
}
