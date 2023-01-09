import 'tailwindcss/tailwind.css'

import BlogHeader from '../../components/BlogHeader'

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
    </>
  )
}
