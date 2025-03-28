'use client'
import Image from 'next/image'
import styles from './sponsor.module.scss'
import { useRef } from 'react';

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  return (
    <main className={styles.main}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>really Developer -</p>
        </div>
      </div>
    </main>
  )
}