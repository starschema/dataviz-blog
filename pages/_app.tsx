import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'
import { Fragment, lazy } from 'react'

import Layout from '@/components/layout/BlogLayout'
import { DOMAIN_NAME } from '@/lib/constants'

const PreviewProvider = lazy(
  () => import('@/components/live-preview/PreviewProvider')
)

export interface SharedPageProps {
  draftMode: boolean
  token: string
  loading: boolean
}
export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  // @ts-expect-error / getLayout is not a property of Component according to AppProps
  // even though it's used in the official docs https://nextjs.org/docs/basic-features/layouts#per-page-layouts
  const PageLayout = Component.Layout || Layout
  const { draftMode, token, loading } = pageProps

  const PreviewWrapper = draftMode ? PreviewProvider : Fragment
  return (
    <PlausibleProvider domain={DOMAIN_NAME}>
      <PageLayout draftMode={draftMode} loading={loading}>
        {draftMode ? (
          <PreviewProvider token={token}>
            <Component {...pageProps} />
          </PreviewProvider>
        ) : (
          <Component {...pageProps} />
        )}
      </PageLayout>
    </PlausibleProvider>
  )
}
