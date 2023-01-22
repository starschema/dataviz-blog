import Link from 'next/link'

interface Props {
  className?: string
  onNavigation?: () => void
}
export default function PageNav(props: Props) {
  const navigationItemClasses = 'font-medium text-2xl my-10'
  const socialItemClasses = 'my-2'
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
        {/* FIXME: this should be a separate page with only the posts and no hero */}
        <li className={navigationItemClasses}>
          <Link
            href="/"
            onClick={props.onNavigation}
            className="underline decoration-fuchsia-700 underline-offset-8"
          >
            Articles
          </Link>
        </li>
        <li className={navigationItemClasses}>
          <Link
            href="/about"
            onClick={props.onNavigation}
            className="underline decoration-teal-500 underline-offset-8"
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
          <li className={`${socialItemClasses}`}>Twitter</li>
          <li className={`${socialItemClasses}`}>Instagram</li>
          <li className={`${socialItemClasses}`}>Mastodon</li>
        </ul>
      </div>
    </nav>
  )
}
