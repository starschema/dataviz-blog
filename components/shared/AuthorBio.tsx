import { AnimatePresence, motion } from 'framer-motion'
import { MouseEventHandler, ReactNode, useState } from 'react'

import ChevronImage from '@/public/images/chevron.svg'

interface Props {
  name: string
  bio: string
  isFixedOpen: boolean
}
export default function AuthorBio(props: Props) {
  const { name, bio, isFixedOpen } = props
  const [isOpen, setIsOpen] = useState(false)
  const backgGroundClass =
    isFixedOpen || isOpen ? 'bg-blue-50' : 'bg-transparent'
  return (
    <li
      className={`list-none p-4 pb-6 text-black transition-colors ${backgGroundClass}`}
    >
      <div className="flex flex-row justify-between">
        <p className="text-xl font-medium">{name}</p>
        {!isFixedOpen && (
          <ExpandButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        )}
      </div>
      <BioContent isOpen={isFixedOpen || isOpen}>{bio}</BioContent>
    </li>
  )
}

function ExpandButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Expand Bio"
      className="flex h-8 w-8 items-center justify-center "
    >
      {/* adding this inner div to increase hit area of the button without making it too big visually */}
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white outline outline-[0.5px] outline-blue-300 focus:outline-1 active:bg-neutral-50">
        <ChevronImage
          className={`h-3 w-3  text-blue-700 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
    </button>
  )
}

function BioContent({
  isOpen,
  children,
}: {
  isOpen: boolean
  children: ReactNode
}) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          className="overflow-hidden"
        >
          <div className="my-4 h-[2px] w-16 bg-blue-700"></div>
          <p>{children}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
