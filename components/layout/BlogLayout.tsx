import BlogHeader from '@/components/layout/BlogHeader'
import Footer from '@/components/layout/Footer'
import AlertBanner from '@/components/live-preview/AlertBanner'

interface BlogLayoutProps {
  draftMode?: boolean
  loading?: boolean
  children: React.ReactNode
}
export default function BlogLayout({
  draftMode,
  loading,
  children,
}: BlogLayoutProps) {
  return (
    <>
      <BlogHeader />
      <AlertBanner draftMode={draftMode} loading={loading} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
