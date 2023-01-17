import { calculatePngDimensions } from 'lib/calculatePngDimensions'
import { imageUrlFromDashboardUrl } from 'lib/tableauUtils'
import Image from 'next/image'
import Link from 'next/link'

import Overlay from './Overlay'

interface Props {
  url: string
  alt?: string
  className?: string
}

export default function Tableau(props: Props) {
  const imageUrl = imageUrlFromDashboardUrl(props.url)
  //   FIXME
  //   const dimensions = await calculatePngDimensions(imageUrl)
  const dimensions = { width: 800, height: 1200 }
  const imageHeight = 300
  const aspectRatio = dimensions.width / dimensions.height
  const containerWidth = imageHeight * aspectRatio
  return (
    <div className={props.className}>
      <Link
        className="mb-2 block text-right underline decoration-blue-600 underline-offset-2"
        style={{ width: `${containerWidth}px` }}
        href={props.url}
        target="_blank"
      >
        Open the viz on Tableau Public
      </Link>
      <div
        style={{ height: `${imageHeight}px`, aspectRatio: aspectRatio }}
        className="relative overflow-hidden rounded-lg shadow-[10px_13px_0px_0px_rgba(0,0,0,1)] shadow-[#C676BD] outline outline-[5px] outline-[#C676BD]"
      >
        <Image
          src={imageUrl}
          alt={props.alt}
          height={300}
          width={containerWidth}
        />
        <Overlay
          url={props.url}
          alt={props.alt}
          imageWidth={dimensions.width}
          imageHeight={dimensions.height}
        />
      </div>
    </div>
  )
}
