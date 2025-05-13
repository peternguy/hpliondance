
'use client'

import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import Preloader from './preloader'

export default function PreloaderWrapper({ children }) {
  const loaderRef = useRef(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setVisible(false),
    })

    // 1) whip up past the top (fast)
    tl.to(loaderRef.current, {
      y: '-110%',
      duration: 0.4,
      ease: 'power4.in',    // accelerate hard
    })
    // 2) settle back to exactly -100% (slow)
    tl.to(loaderRef.current, {
      y: '-100%',
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',  // elastic snap
    })
  }, [])

  return (
    <>
      {children}
      {visible && <Preloader ref={loaderRef} />}
    </>
  )
}
