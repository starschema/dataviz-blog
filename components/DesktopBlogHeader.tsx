import Link from 'next/link';

export default function DestkopBlogHeader() {
    // this is only ever shown on md screens and up
    const navigationItemClasses = 'px-6 lg:px-8 xl:px-12 outline outline-1 outline-neutral-300 flex items-center pb-1 ml-px';
    return <header className='h-20 xl:h-24 bg-white top-0  outline outline-neutral-300 flex flex-row items-center px-12'>
        <Link href='/' className='text-xl font-medium lg:text-2xl xl:text-4xl flex-grow' >
            Blog Name Placeholder
        </Link>
        <nav className='h-full'>
            <ul className='flex flex-row px-8 lg:text-lg xl:text-xl h-full items-middle'>
                <li className={navigationItemClasses}>
                    <Link href='/' className='decoration-blue-500 underline underline-offset-8'>
                        Home
                    </Link>
                </li>
                <li className={navigationItemClasses}>
                    <Link href='/' className='decoration-fuchsia-700 underline underline-offset-8'>
                        Articles
                    </Link>
                </li>
                <li className={navigationItemClasses}>
                    <Link href='/about' className='decoration-teal-500 underline underline-offset-8'>
                        About Us
                    </Link>
                </li>
            </ul>

        </nav>
        <div className='flex flex-row items-center h-full'>
            <div className='h-8 w-8 text-center align-middle'>
                T
            </div>
            <div className='h-8 w-8 text-center'>
                I
            </div>
            <div className='h-8 w-8 text-center'>
                M
            </div>
        </div>
    </header>
}