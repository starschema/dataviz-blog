import Modal from 'components/Modal'
import { imageUrlFromDashboardUrl } from 'lib/tableauUtils'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  url: string
  alt: string
  imageWidth: number
  imageHeight: number
}
export default function TableauOverlay(props: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const imageUrl = imageUrlFromDashboardUrl(props.url)

  return (
    <>
      <div
        className="absolute top-0 h-full w-full cursor-zoom-in"
        onClick={() => setIsModalOpen(!isModalOpen)}
      ></div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <Image
          src={imageUrl}
          alt={props.alt}
          width={props.imageWidth}
          height={props.imageHeight}
        />
      </Modal>
    </>
  )
  return
}
