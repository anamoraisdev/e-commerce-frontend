import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Menu from './components/menu'
import Notice from './components/notice'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sualoja',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Notice/><Navbar/><Menu/>{children}</body>
    </html>
  )
}
