import Image from 'next/image'
import Link from 'next/link'

import Overlay from '@/components/tableau/Overlay'
import { imageUrlFromDashboardUrl } from '@/lib/tableauUtils'
import breakpoints from '@/lib/tailwind.breakpoints'

interface Props {
  url: string
  alt?: string
  className?: string
}

export default function Tableau(props: Props) {
  const imageUrl = imageUrlFromDashboardUrl(props.url)
  // @ts-ignore - breakpoints is typed incorrectly
  const imageSizes = `(max-width: ${breakpoints.md}) 100vw, 33vw`
  return (
    <div className={props.className}>
      <div className="relative max-h-full max-w-full overflow-hidden rounded-lg shadow-[10px_13px_0px_0px_rgba(0,0,0,1)] shadow-[#C676BD] outline outline-[5px] outline-[#C676BD]">
        {/* eslint-disable-next-line */}
        <img src={imageUrl} alt={props.alt} />
        <Overlay url={props.url} alt={props.alt} />
      </div>
      <Link
        className="mb-2 mt-6 block text-right underline decoration-blue-600 underline-offset-2"
        href={props.url}
        target="_blank"
      >
        Open on Tableau Public
      </Link>
    </div>
  )
}
