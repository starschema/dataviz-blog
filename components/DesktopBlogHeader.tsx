import SocialIcon from 'components/SocialIcon'
import Link from 'next/link'

export default function DestkopBlogHeader() {
  // this is only ever shown on md screens and up
  const navigationItemClasses =
    'px-6 lg:px-8 xl:px-12 outline outline-1 outline-neutral-300 flex items-center pb-1 ml-px'
  return (
    <header className="top-0 mb-px flex h-20  flex-row items-center bg-white px-8 outline outline-neutral-300 xl:h-24">
      <Link
        href="/"
        className="flex-grow text-xl font-medium lg:text-2xl xl:text-4xl"
      >
        Blog Name Placeholder
      </Link>
      <nav className="h-full">
        <ul className="items-middle flex h-full flex-row px-8 lg:text-lg xl:text-xl">
          <li className={navigationItemClasses}>
            <Link
              href="/"
              className="underline decoration-blue-500 underline-offset-8"
            >
              Home
            </Link>
          </li>
          <li className={navigationItemClasses}>
            <Link
              href="/"
              className="underline decoration-fuchsia-700 underline-offset-8"
            >
              Articles
            </Link>
          </li>
          <li className={navigationItemClasses}>
            <Link
              href="/about"
              className="underline decoration-teal-500 underline-offset-8"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
      {/* FIXME: fix the social links once available */}
      <div className="flex h-full flex-row items-center gap-4">
        <SocialIcon network="twitter" url="https://twitter.com" />
        <SocialIcon network="instagram" url="https://instagram.com" />
        <SocialIcon network="mastodon" url="https://mastodon.social" />
      </div>
    </header>
  )
}
