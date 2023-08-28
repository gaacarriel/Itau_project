import { Header } from '@/components/Header'
import { Lato } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const lato = Lato({ 
  subsets: ['latin'], 
  weight: ['300', '700']
})

export const metadata: Metadata = {
  icons: {
    icon: "@/app/logo.svg"
  },
  title: 'Projeto Itaú'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="@/app/logo.svg"
        type="image/svg"
        sizes="32px"
      />
      </head>
      <body className={lato.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
