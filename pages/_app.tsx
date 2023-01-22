import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'

import Layout from '@/components/layout/BlogLayout'

export default function App({ Component, pageProps }: AppProps) {
  // @ts-expect-error / getLayout is not a property of Component according to AppProps
  // even though it's used in the official docs https://nextjs.org/docs/basic-features/layouts#per-page-layouts
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  return getLayout(<Component {...pageProps} />)
}
