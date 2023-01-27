import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useIsClient, useLockedBody, useOnClickOutside } from 'usehooks-ts'

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

  useLockedBody(props.open, 'root')

  if (!isClient) return null

  const modalRoot = document.getElementById('modal-root')
  const modal = (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen justify-center overflow-auto bg-neutral-700/50 px-10 backdrop-blur-sm backdrop-filter ">
      <div className="absolute py-10" ref={childrenWrapperRef}>
        {children}
      </div>
    </div>
  )

  return props.open ? createPortal(modal, modalRoot) : null
}

export default Modal
