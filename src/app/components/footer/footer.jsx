"use client"

import { usePathname } from "next/navigation"
import React from 'react'
import Content from './content';

export default function Footer() {
  const pathname = usePathname()

  // list any paths where you DON'T want the footer:
  const hideOn = ["/pages/gallery"]

  if (hideOn.includes(pathname)) {
    return null
  }

  return (
    <div 
      className='relative h-[100vh]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[100vh] w-full'>
        <Content />
      </div>
    </div>
  )
}