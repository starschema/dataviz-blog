'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import HamburgerIcon from './HamburgerIcon'
import OverlayMenu from './OverlayMenu'

type MenuState = 'closed' | 'closing' | 'open' | 'opening'

export default function BlogHeader(props) {
  const router = useRouter()
  const [menuState, setMenuState] = useState<MenuState>('closed')
  const menuTransitionDuration = 250 //ms

  const handleMenuClick = () => {
    if (menuState === 'closed') {
      setMenuState('opening')

      setTimeout(() => {
        setMenuState('open')
      }, menuTransitionDuration)
    } else if (menuState === 'open') {
      setMenuState('closing')
      setTimeout(() => {
        setMenuState('closed')
      }, menuTransitionDuration)
    }
  }
  //disable scrolling when the menu is open
  useEffect(() => {
    if (menuState === 'open') {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      return
    } else if (menuState === 'closed') {
      document.getElementsByTagName('body')[0].style.overflow = 'unset'
      return
    }

  }, [menuState])
  const isMenuClosed = menuState === 'closed'
  const headerHeight = '4rem'
  const menuHeight = menuState === 'open' ? `calc(100vh - ${headerHeight}` : '0'

  return (<>
    {/* <header className={`border-b bg-white border-neutral-600 px-4 top-0`} style={{ position: isMenuClosed ? 'relative' : 'sticky' }} > */}
    <header className={`border-b bg-white border-neutral-600 dark:bg-neutral-900 dark:text-white px-4 top-0`}  >
      <div className='grid grid-cols-[20px_1fr_20px] ' style={{ height: headerHeight }}>

        <Link href="/" className='col-start-2 col-span-1 flex flex-col justify-center'>
          <h1 className="text-center text-2xl font-medium">
            Blog Name Placeholder
          </h1>
        </Link>
        <HamburgerIcon isClosed={true} onClick={() => handleMenuClick()} className='brightness-0 dark:brightness-0 dark:invert' />
      </div>
      {!isMenuClosed && <div className={`min-w-full overflow-hidden transition-[height] `} style={{ height: menuHeight, top: headerHeight, transitionDuration: `${menuTransitionDuration}ms` }}>
        <OverlayMenu onNavigation={() => handleMenuClick()} />
      </div>}
    </header>
  </>
  )
}
