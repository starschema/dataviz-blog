import type { PortableTextTypeComponentProps } from '@portabletext/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import type { ColorSwatch as ColorSwatchType } from '@/lib/sanity.queries'

interface ColorSwatchValue extends ColorSwatchType {
  _type?: 'colorSwatch'
}
export default function ColorSwatch(
  props: PortableTextTypeComponentProps<ColorSwatchValue>
) {
  const [showTooltip, setShowTooltip] = useState(false)
  const { hex } = props.value.color
  const name = props.value.name

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex)
    setShowTooltip(true)
    setTimeout(() => {
      setShowTooltip(false)
    }, 1000)
  }

  return (
    <span className="relative">
      <button
        className="inline-block h-4 w-4 cursor-pointer rounded-md"
        style={{ backgroundColor: hex }}
        aria-label="Copy color hex to clipboard"
        onClick={copyToClipboard}
      ></button>
      <span> {name}</span>
      <AnimatePresence>
        {showTooltip && (
          <motion.span
            className="absolute top-full left-0 rounded-md bg-gray-900 px-2 py-1 text-xs text-white"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
