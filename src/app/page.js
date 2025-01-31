'use client';
import { useEffect } from 'react'
import Landing from './pages/landing'
import { Playfair_Display } from 'next/font/google'
import Footer from './components/footer/footer'

const playfair_display = Playfair_Display ({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className={playfair_display.className}>
      {/* <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      <Landing />
      <Footer />
    </main>
  )
}
