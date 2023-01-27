import Image from 'next/image'
import { useState } from 'react'

import Modal from '@/components/shared/Modal'
import { imageUrlFromDashboardUrl } from '@/lib/tableauUtils'

interface Props {
  url: string
  alt: string
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
        {/* eslint-disable-next-line */}
        <img src={imageUrl} alt={props.alt} />
      </Modal>
    </>
  )
  return
}
