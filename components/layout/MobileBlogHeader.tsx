import { useEffect, useState } from 'react'
import { useLockedBody } from 'usehooks-ts'

import BlogTitle from '@/components/layout/BlogTitle'
import MenuIcon from '@/components/layout/MenuIcon'
import OverlayMenu from '@/components/layout/OverlayMenu'

type MenuState = 'closed' | 'closing' | 'open' | 'opening'

export default function BlogHeader() {
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

  const isMenuClosed = menuState === 'closed'

  const headerHeight = '4rem'
  const menuHeight = menuState === 'open' ? `calc(100vh - ${headerHeight}` : '0'

  useLockedBody(!isMenuClosed, 'root')

  return (
    <>
      <header className="top-0 border-b border-neutral-600 bg-white px-4 ">
        <div
          className="grid grid-cols-[48px_1fr_48px] items-center justify-center "
          style={{ height: headerHeight }}
        >
          <BlogTitle />
          <MenuIcon
            isClosed={isMenuClosed}
            onClick={() => handleMenuClick()}
            className="flex h-12 w-12 items-center justify-center brightness-0"
          />
        </div>
        <OverlayMenu
          isClosed={isMenuClosed}
          onNavigation={() => handleMenuClick()}
          style={{
            height: menuHeight,
            top: headerHeight,
            transitionDuration: `${menuTransitionDuration}ms`,
          }}
        />
      </header>
    </>
  )
}
