import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useIsClient, useOnClickOutside } from 'usehooks-ts'

interface Props {
  children: React.ReactNode
  className?: string
  open: boolean
  onClose: () => void
}

const Modal = (props: Props) => {
  const childrenWrapperRef = useRef<HTMLDivElement>(null)
  const { children } = props
  const isClient = useIsClient()
  useOnClickOutside(childrenWrapperRef, () => {
    props.onClose()
  })

  if (!isClient) return null

  const modalRoot = document.getElementById('modal-root')
  const modal = (
    <div className="fixed top-0 left-0 z-50 h-screen w-screen overflow-auto bg-neutral-700/50 px-10 backdrop-blur-sm backdrop-filter ">
      <div className="absolute mx-auto inline-block">
        <div ref={childrenWrapperRef} className="my-10">
          {children}
        </div>
      </div>
    </div>
  )

  return props.open ? createPortal(modal, modalRoot) : null
}

export default Modal
