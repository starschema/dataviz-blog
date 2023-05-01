import Link from 'next/link'

import {
  INSTAGRAM_USER,
  LINKEDIN_PAGE,
  MASTODON_URL,
  PINTEREST_USER,
  TWITTER_USER,
} from '@/lib/constants'

interface Props {
  className?: string
  onNavigation?: () => void
}
export default function PageNav(props: Props) {
  const navigationItemClasses = 'font-medium text-2xl my-10 hover:decoration-4'
  const socialItemClasses = 'my-2 hover:underline '
  return (
    <nav
      className={`flex h-full flex-col justify-between lg:flex-row lg:justify-start lg:gap-40 ${
        props.className ?? ''
      }`}
    >
      <ul>
        <li className={navigationItemClasses}>
          <Link
            href="/"
            onClick={props.onNavigation}
            className="underline decoration-blue-500 underline-offset-8"
          >
            Home
          </Link>
        </li>
        <li className={navigationItemClasses}>
          <Link
            href="/articles"
            onClick={props.onNavigation}
            className="underline decoration-teal-500 underline-offset-8"
          >
            Articles
          </Link>
        </li>
        <li className={navigationItemClasses}>
          <Link
            href="/about"
            onClick={props.onNavigation}
            className="underline decoration-fuchsia-700 underline-offset-8"
          >
            About Us
          </Link>
        </li>
      </ul>
      <div className="lg:mt-10">
        <span className="mb-6 uppercase tracking-widest text-neutral-500">
          Keep in touch
        </span>
        <ul className="mt-6">
          <li className={`${socialItemClasses}`}>
            <Link href={`https://twitter.com/${TWITTER_USER}`}>Twitter</Link>
          </li>
          <li className={`${socialItemClasses}`}>
            <Link href={`https://instagram.com/${INSTAGRAM_USER}`}>
              Instagram
            </Link>
          </li>
          <li className={`${socialItemClasses}`}>
            <Link href={`${MASTODON_URL}`}>Mastodon</Link>
          </li>
          <li className={`${socialItemClasses}`}>
            <Link href={`https://pinterest.com/${PINTEREST_USER}`}>
              Pinterest
            </Link>
          </li>
          <li className={`${socialItemClasses}`}>
            <Link href={`https://linkedin.com/${LINKEDIN_PAGE}`}>LinkedIn</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
