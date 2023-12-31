import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Home/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hotel Management System',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    

      <body className={inter.className}>
        <Header></Header>
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>

      </body>
    </html>
  )
}
