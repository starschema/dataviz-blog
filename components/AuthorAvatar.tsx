import { motion } from 'framer-motion'
import Image from 'next/image'

import { urlForImage } from '@/lib/sanity.image'
import type { Author } from '@/lib/sanity.queries'

interface Props extends Pick<Author, 'name' | 'picture'> {}
export default function AuthorAvatar(props: Props) {
  const { name, picture } = props
  return (
    <motion.div
      className="relative flex items-center "
      initial={{ opacity: 0, left: '-3rem' }}
      animate={{ opacity: 1, left: '0' }}
      exit={{ opacity: 0, left: '-3rem' }}
    >
      <div className="relative h-12 w-12">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={96}
          width={96}
          aria-hidden
          alt=""
        />
      </div>
    </motion.div>
  )
}
