import { GetStaticProps } from 'next'

import PostPage from '@/components/post/PostPage'
import PreviewPostPage from '@/components/post/PreviewPostPage'
import { readToken } from '@/lib/sanity.api'
import {
  getAllPostsSlugs,
  getClient,
  getPostAndMoreStories,
} from '@/lib/sanity.client'
import { Post } from '@/lib/sanity.queries'
import type { SharedPageProps } from '@/pages/_app'

interface PageProps extends SharedPageProps {
  post: Post
  morePosts: Post[]
}

interface Query {
  [key: string]: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { post, morePosts, draftMode } = props

  if (draftMode) {
    return <PreviewPostPage post={post} morePosts={morePosts} />
  }

  return <PostPage post={post} morePosts={morePosts} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx

  const token = draftMode ? readToken : null
  const client = getClient(draftMode ? { token } : undefined)
  const { post, morePosts } = await getPostAndMoreStories(client, params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      morePosts,
      draftMode,
      token,
      loading: false,
    },
  }
}

export const getStaticPaths = async () => {
  const client = getClient()
  const slugs = await getAllPostsSlugs(client)

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: false,
  }
}
