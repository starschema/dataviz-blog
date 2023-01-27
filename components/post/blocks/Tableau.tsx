import { PortableTextTypeComponentProps } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Modal from '@/components/shared/Modal'
import { imageUrlFromDashboardUrl } from '@/lib/tableauUtils'

type TableauValue = {
  _type?: 'tableau'
  url: string
  alt: string
}
type Props = PortableTextTypeComponentProps<TableauValue>
export default function TableauBlock(props: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const { url, alt } = props.value
  const fullImageUrl = imageUrlFromDashboardUrl(url)
  return (
    <div className="relative h-full">
      <Image src={fullImageUrl} fill alt={alt} className="object-contain" />
      {isZoomed && (
        <Modal open={isZoomed} onClose={() => setIsZoomed(!isZoomed)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fullImageUrl} alt={alt} className="h-full object-contain" />
        </Modal>
      )}
      <div className="absolute flex h-full w-full flex-col content-center items-center justify-evenly bg-neutral-700/50 opacity-0 hover:opacity-100">
        <button
          className="h-8 w-36 rounded-xl bg-neutral-700/50"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          Expand Image
        </button>
        <button className="h-8 w-36 rounded-xl bg-neutral-700/50">
          <Link href={url} target={'_blank'}>
            Open in Tableau
          </Link>
        </button>
      </div>
    </div>
  )
}
