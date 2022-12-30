import { PreviewSuspense } from 'components/live-preview/Suspense'
import { getAllPosts, getSettings } from 'lib/sanity.client'
import { previewData } from 'next/headers'

import IndexPage from './IndexPage'
import PreviewIndexPage from './PreviewIndexPage'


export default async function IndexRoute() {
  // Fetch queries in parallel
  const [settings, posts] = await Promise.all([getSettings(), getAllPosts()])

  if (previewData()) {
    const token = previewData().token || null

    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview posts={posts} settings={settings} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return <IndexPage posts={posts} settings={settings} />
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
