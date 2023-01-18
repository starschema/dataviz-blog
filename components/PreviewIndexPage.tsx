import { usePreview } from 'lib/sanity.preview'
import type { IndexPosts } from 'lib/sanity.queries'
import {
  type Post,
  type Settings,
  indexQuery,
  settingsQuery,
} from 'lib/sanity.queries'

import IndexPage from './IndexPage'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: IndexPosts = usePreview(token, indexQuery) || []
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <IndexPage posts={posts} />
}
