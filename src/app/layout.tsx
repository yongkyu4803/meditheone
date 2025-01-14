import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: '메디더원 - 관절 건강 전문 건강기능식품',
  description: '소연골콘드로이친, 보스웰리아, 식이섬유가 결합된 관절 건강 솔루션',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
