import { PortableTextTypeComponentProps } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Modal from '@/components/shared/Modal'
import { calculatePngDimensions } from '@/lib/calculatePngDimensions'
import { imageUrlFromDashboardUrl } from '@/lib/tableauUtils'

type TableauValue = {
  _type?: 'tableau'
  url: string
  alt: string
}
type Props = PortableTextTypeComponentProps<TableauValue>
export default function TableauBlock(props: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [aspectRatio, setAspectRatio] = useState(0)

  const { url, alt } = props.value
  const fullImageUrl = imageUrlFromDashboardUrl(url)

  useEffect(() => {
    if (!fullImageUrl) return
    const dimensions = fetch(
      `/api/tableau-dashboard-dimensions?url=${fullImageUrl}`
    )
      .then((res) => res.json())
      .then((dimensions) => {
        setAspectRatio(dimensions.width / dimensions.height)
      })
  }, [fullImageUrl])

  return (
    <div className="relative w-full" style={{ aspectRatio }}>
      <Image src={fullImageUrl} fill alt={alt} className="m-0 object-contain" />
      {isZoomed && (
        <Modal open={isZoomed} onClose={() => setIsZoomed(!isZoomed)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fullImageUrl} alt={alt} className="h-full object-contain" />
        </Modal>
      )}
      <div className="absolute flex h-full w-full flex-col content-center items-center justify-evenly bg-blue-300/50 opacity-0 hover:opacity-100">
        <button
          className="rounded-2xl bg-neutral-700/50 px-4 py-1"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          Expand Image
        </button>
        <button className="rounded-2xl bg-neutral-700/50 px-4 py-1">
          <Link href={url} target={'_blank'}>
            Open in Tableau
          </Link>
        </button>
      </div>
    </div>
  )
}
