import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useIsClient, useLockedBody, useOnClickOutside } from 'usehooks-ts'

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
  useOnClickOutside(childrenWrapperRef, () => {
    props.onClose()
  })

  useLockedBody(isOpen, 'root')

  if (!isClient) return null

  const modalRoot = document.getElementById('modal-root')
  const modal = (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen  justify-center overflow-auto bg-neutral-700/50 backdrop-blur-sm backdrop-filter ">
      {/* FIXME: add an exit button here */}
      <div className="absolute m-10" ref={childrenWrapperRef}>
        {children}
      </div>
    </div>
  )

  return props.isOpen ? createPortal(modal, modalRoot) : null
}

export default Modal
