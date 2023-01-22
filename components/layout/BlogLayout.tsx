import BlogHeader from '@/components/layout/BlogHeader'
import Footer from '@/components/layout/Footer'
import AlertBanner from '@/components/live-preview/AlertBanner'

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview?: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <BlogHeader />
      <AlertBanner preview={preview} loading={loading} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
