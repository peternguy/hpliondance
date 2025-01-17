'use client'
import styles from './style.module.scss'
import { useRef } from 'react';
import Description from './description'
import Services from './services'
export default function Landing() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  return (
    <main className={styles.main}>
      <div className={styles.videoContainer}>
        <video 
          src="/videos/hero-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          alt="background"
        />
        <div className={styles.sliderContainer}>
          <div className={styles.textContainer}>
            <p className={styles.firstText}>Hoang Phuc</p>
            <p className={styles.secondText}>Lion Dance</p>
          </div>
        </div>
      </div>

      <div className={styles.descriptionSection}>
        <Description />
      </div> 

      <div className={styles.servicesSection}>
          <Services />
      </div> 

    </main>
  )
}