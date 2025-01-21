'use client'
import styles from './index.module.scss'
import { useRef } from 'react';
import Description from './description'
import Services from './services'
import Gallery from './gallery'
import Link from 'next/link';


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
            <div className={styles.textWithButton}>
              <p className={styles.thirdText}>Step into the culture. Celebrate the tradition.</p>
                <Link href="/pages/contact">
                  <div className={styles.button}>
                    <p>Contact Now</p>
                  </div>
                </Link>
            </div>

          </div>


        </div>
        
      </div>

      <div className={styles.descriptionSection}>
        <Description />
      </div> 

      <div className={styles.servicesSection}>
          <Services />
      </div> 

      <div>
          <Gallery />
      </div> 

    </main>
  )
}