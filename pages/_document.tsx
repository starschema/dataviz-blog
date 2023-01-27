import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-pt-10 scroll-smooth">
      <Head />
      <body className="min-h-screen bg-white text-black">
        <Main />
        <NextScript />
        <div id="modal-root" />
      </body>
    </Html>
  )
}
