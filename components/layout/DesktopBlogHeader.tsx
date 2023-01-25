import Link from 'next/link'

import BlogTitle from '@/components/layout/BlogTitle'
import SocialIcon from '@/components/layout/SocialIcon'

export default function DestkopBlogHeader() {
  // this is only ever shown on md screens and up

  return (
    <header className="top-0 mb-px flex h-20 flex-row items-center bg-white px-8 outline outline-neutral-300 xl:h-24">
      <BlogTitle />
      <DesktopNav />
      <DesktopSocials />
    </header>
  )
}

function DesktopSocials() {
  return (
    <div className="flex h-full flex-row items-center gap-4">
      {/* FIXME: fix the social links once available */}
      <SocialIcon network="twitter" url="https://twitter.com" />
      <SocialIcon network="instagram" url="https://instagram.com" />
      <SocialIcon network="mastodon" url="https://mastodon.social" />
    </div>
  )
}

function DesktopNav() {
  const navigationItemClasses =
    'px-6 lg:px-8 xl:px-12 outline outline-1 outline-neutral-300 flex items-center pb-1 ml-px'
  return (
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
  )
}
