'use client'

import { usePreview } from 'lib/sanity.preview'
import {
  type Post,
  type Settings,
  postAndMoreStoriesQuery,
  settingsQuery,
} from 'lib/sanity.queries'

import PostPage from './PostPage'

export default function PreviewPostPage({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const data: { post: Post; morePosts: Post[] } = usePreview(
    token,
    postAndMoreStoriesQuery,
    {
      slug,
    }
  ) || { post: null, morePosts: [] }
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <PostPage preview data={data} settings={settings} />
}
