import Link from 'next/link'

export default function BlogTitle() {
  return (
    <Link
      href="/"
      className="col-span-1 col-start-2 flex items-center justify-center md:block md:flex-grow"
    >
      <span className="text-center text-xl font-light xs:text-2xl md:text-left lg:text-2xl xl:text-4xl">
        the<strong className="font-medium">viz</strong>collective
      </span>
    </Link>
  )
}
