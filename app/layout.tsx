import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jujutsu Infinite Codes (January 2025) | Latest Codes and Redeem Guide',
  description: 'Get the latest Jujutsu Infinite Codes, learn how to redeem them, and boost your gameplay. Updated regularly with new and expired codes.',
  keywords: 'Jujutsu Infinite Codes, Jujutsu Infinite, Roblox, redeem codes, game codes',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
       <link rel="alternate" hrefLang="x-default" href="https://jujutsuinfinitecodes.xyz/"/>
       <link rel="canonical" href="https://jujutsuinfinitecodes.xyz/"/>
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-KW84QYZ62D"></script>
        <script>
           {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KW84QYZ62D');
          `}
        </script>
        
     </head>

      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

