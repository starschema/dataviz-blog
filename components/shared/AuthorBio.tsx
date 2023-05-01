import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { MouseEventHandler, ReactNode, useState } from 'react'

import AuthorAvatar from '@/components/AuthorAvatar'
import { Author } from '@/lib/sanity.queries'
import ChevronImage from '@/public/images/chevron.svg'

import SocialIcon from '../layout/SocialIcon'

interface Props extends Pick<Author, 'bio' | 'name' | 'picture' | 'socials'> {
  isFixedOpen: boolean
}
export default function AuthorBio(props: Props) {
  const { name, bio, picture, socials, isFixedOpen } = props
  const [isOpen, setIsOpen] = useState(false)

  const backgGroundClass =
    isFixedOpen || isOpen ? 'bg-blue-50' : 'bg-transparent'
  return (
    <li
      className={`flex list-none flex-col p-8 pb-6 text-black transition-colors ${backgGroundClass}`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex h-12 flex-row items-center gap-4">
          <LayoutGroup>
            <AnimatePresence initial={false}>
              {(isOpen || isFixedOpen) && (
                <AuthorAvatar name={name} picture={picture} />
              )}
            </AnimatePresence>
            <motion.p layout className="text-xl font-medium">
              {name}
            </motion.p>
          </LayoutGroup>
        </div>
        {!isFixedOpen && (
          <ExpandButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        )}
      </div>
      <BioContent isOpen={isFixedOpen || isOpen}>
        <div className="flex flex-grow flex-col justify-between gap-2 ">
          <p>{bio}</p>
          <div className="mt-2 flex flex-row gap-2">
            {socials &&
              socials.map((social) => {
                return (
                  <SocialIcon
                    key={social.url}
                    url={social.url}
                    // FIXME typing the networks should help type safety here
                    // @ts-ignore
                    network={social.name}
                  />
                )
              })}
          </div>
        </div>
      </BioContent>
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
      className="flex h-8 w-8 items-center justify-center"
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
          className="flex flex-grow flex-col overflow-hidden"
        >
          <div className="my-4 h-[2px] w-16 bg-blue-700"></div>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
