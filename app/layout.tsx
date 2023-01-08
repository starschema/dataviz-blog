import 'tailwindcss/tailwind.css'

import localFont from '@next/font/local'
import BlogHeader from 'components/BlogHeader'

const Satoshi = localFont({
  src: './Satoshi.woff2',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-neutral-900 dark:text-white">
        <div id='modal-root' />
        <BlogHeader />
        {children}
      </body>
    </html>
  )
}
