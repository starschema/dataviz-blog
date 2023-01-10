import 'tailwindcss/tailwind.css'

import localFont from '@next/font/local'

const Satoshi = localFont({
    src: './Satoshi.woff2',
})
export default function ContentRootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/* add dark:bg-neutral-900 dark:text-white to support dark mode*/}
            <body className="bg-white text-black ">
                {children}
            </body>
        </html>
    )
}
