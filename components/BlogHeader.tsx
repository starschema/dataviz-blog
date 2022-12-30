import Link from 'next/link'

export default function BlogHeader(props) {
  return (
    <header className="w-min-screen mb-2 flex h-16 flex-row justify-center border-b border-neutral-600 pt-4 pb-2">
      <Link href="/">
        <h1 className="text-center text-2xl font-medium tracking-tighter">
          Blog Name Placeholder
        </h1>
      </Link>
    </header>
  )
}
