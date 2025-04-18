'use client'
import React                         from 'react'
import LinkNext                      from 'next/link'
import { motion }                    from 'framer-motion'
import { useTransitionRouter }       from 'next-view-transitions'
import { slide, scale }              from '../../anim'
import { slideInOut }                from '../../pageTransition'
import styles                        from './style.module.scss'

export default function LinkItem({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data
  const router = useTransitionRouter()

  return (
    <motion.div
      className={styles.link}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onMouseEnter={() => setSelectedIndicator(href)}
    >
      <motion.div
        className={styles.indicator}
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
      />
      <LinkNext
        href={href}
        onClick={e => {
          e.preventDefault()
          setSelectedIndicator(href)
          router.push(href, { onTransitionReady: slideInOut })
        }}
        className={isActive ? styles.active : ''}
      >
        {title}
      </LinkNext>
    </motion.div>
  )
}
