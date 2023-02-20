import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Modal from '@/components/shared/Modal'
import type { Tableau as TableauType } from '@/lib/sanity.queries'
import { imageUrlFromDashboardUrl } from '@/lib/tableauUtils'
import breakpoints from '@/lib/tailwind.breakpoints'

interface Props extends TableauType {
  className?: string
}

export default function Tableau(props: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const { url, alt, className, dimensions } = props
  const { width, height } = dimensions || {}

  const imageUrl = imageUrlFromDashboardUrl(url)

  const router = useRouter()

  const onZoom = () => {
    router.push(router.pathname, router.asPath + '?tableauOpen', {
      shallow: true,
      scroll: false,
    })
    router.beforePopState(({ options }) => {
      options.scroll = false
      options.shallow = true
      setIsZoomed(false)
      return true
    })
    setIsZoomed(true)
  }

  const onClose = () => {
    router.beforePopState(({ options }) => {
      options.scroll = false
      options.shallow = true
      setIsZoomed(false)
      return true
    })
    router.back()
    setIsZoomed(false)
  }

  // @ts-ignore - breakpoints is typed incorrectly
  const imageSizes = `(max-width: ${breakpoints.md}) 100vw, 33vw`
  return (
    <div className="flex flex-col items-end gap-6">
      <button onClick={onZoom} type="button" aria-label="Expand Image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={alt}
          width={width}
          height={height}
          sizes={imageSizes}
          className="my-0 cursor-zoom-in rounded-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] shadow-[#C676BD] outline outline-4 outline-[#C676BD]"
        />
      </button>
      <Link
        href={url}
        className="text-right underline decoration-blue-500 underline-offset-4 hover:decoration-2"
      >
        Open the viz on Tableau Public
      </Link>
      <Modal isOpen={isZoomed} onClose={onClose}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={alt}
          sizes="80vw"
          width={width}
          height={height}
        />
      </Modal>
    </div>
  )
}
