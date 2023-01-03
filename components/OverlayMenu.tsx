// a full page menu that slides in from the top

import Link from 'next/link'
import { ScrollEventHandler } from 'sanity'

interface Props {
    className?: string
    onNavigation?: () => void
}
export default function OverlayMenu(props: Props) {
    const navigationItemClasses = 'font-medium text-2xl my-10'
    const socialItemClasses = 'my-2'
    return <nav className={`${props.className ?? ''} text-center `}>
        <ul className=' py-32'>
            <li className={navigationItemClasses}><Link href='/' onClick={props.onNavigation} className='decoration-blue-500 underline underline-offset-8'>Home</Link></li>
            <li className={navigationItemClasses}><Link href='/about' onClick={props.onNavigation} className='decoration-teal-500 underline underline-offset-8'>About Us</Link></li>
            {/* FIXME: this should be a separate page with only the posts and no hero */}
            <li className={navigationItemClasses}><Link href='/' onClick={props.onNavigation} className='decoration-fuchsia-700 underline underline-offset-8'>Articles</Link></li>
        </ul>
        <div>
            <span className='text-neutral-500 uppercase tracking-widest mb-6'>Keep in touch</span>
            <ul className='mt-6'>
                <li className={`${socialItemClasses}`}>
                    Twitter
                </li>
                <li className={`${socialItemClasses}`}>
                    Instagram
                </li>
                <li className={`${socialItemClasses}`}>
                    Mastodon
                </li>
            </ul>
        </div>
    </nav>
}