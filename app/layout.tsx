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
            <body className="bg-white text-black dark:bg-neutral-900 dark:text-white">
                {children}
            </body>
        </html>
    )
}
