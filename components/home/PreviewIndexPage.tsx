import { usePreview } from 'lib/sanity.preview'
import type { IndexPosts } from 'lib/sanity.queries'
import { indexQuery } from 'lib/sanity.queries'

import IndexPage from '@/components/home/IndexPage'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: IndexPosts = usePreview(token, indexQuery) || []

  return <IndexPage posts={posts} />
}
