import Link from 'next/link'

import PageNav from '@/components/layout/PageNav'
import { GITHUB_REPO } from '@/lib/constants'

import SocialIcon from './SocialIcon'

export default function Footer() {
  return (
    <footer className="flex flex-col bg-zinc-50 px-10 pr-24 pb-8 lg:flex-row lg:gap-24 ">
      <PageNav className="flex-1 gap-8 text-left" />
      <div className="my-10 flex-1 text-neutral-600">
        <p>
          We do not use cookies for tracking on this website because we respect
          your privacy.
        </p>
        <p className="mt-4">
          We do use some third-party analytics by{' '}
          <Link
            href="https://plausible.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Plausible Analytics
          </Link>
          , which is a privacy-friendly alternative to Google Analytics.
        </p>
        <div className="my-8 flex flex-row gap-2">
          <SocialIcon
            network="github"
            url={`https://github.com/${GITHUB_REPO}`}
          />
          <Link
            href={`https://github.com/${GITHUB_REPO}`}
            target="_blank"
            className="hover:underline"
          >
            Check our GitHub repository{' '}
          </Link>
        </div>
      </div>
    </footer>
  )
}
