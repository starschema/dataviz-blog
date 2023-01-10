import 'tailwindcss/tailwind.css'

import BlogHeader from '../../components/BlogHeader'
import Footer from '../../components/Footer'

export default function ContentRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div id='modal-root' />
      <BlogHeader />
      {children}
      <Footer />
    </>
  )
}
