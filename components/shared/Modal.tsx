import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useIsClient, useLockedBody, useOnClickOutside } from 'usehooks-ts'

import XIconImage from '@/public/images/x-icon.svg'

interface Props {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

const Modal = (props: Props) => {
  const childrenWrapperRef = useRef<HTMLDivElement>(null)
  const { children, onClose, isOpen } = props
  const isClient = useIsClient()

  useLockedBody(isOpen, 'root')

  const wrapperClickHandler = (event) => {
    if (event.target == event.currentTarget) {
      onClose()
    }
  }

  if (!isClient) return null

  const modalRoot = document.getElementById('modal-root')
  const modal = (
    <dialog
      className="fixed top-0 left-0 z-50 flex h-screen w-screen  cursor-pointer justify-center overflow-auto bg-neutral-700/50 backdrop-blur-sm backdrop-filter "
      onClick={wrapperClickHandler}
    >
      <button
        className="absolute top-4 right-4"
        aria-label="Close the Image Preview"
        type="button"
        onClick={onClose}
        autoFocus
      >
        <XIconImage aria-hidden className="stroke-black hover:stroke-2" />
      </button>
      <div className="absolute m-10 cursor-auto" ref={childrenWrapperRef}>
        {children}
      </div>
    </dialog>
  )

  return props.isOpen ? createPortal(modal, modalRoot) : null
}

export default Modal
