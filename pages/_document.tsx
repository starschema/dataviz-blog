import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-white text-black">
        <Main />
        <NextScript />
        <div id="modal-root" />
      </body>
    </Html>
  )
}
