'use client'
import styles from './index.module.scss'
import { useRef } from 'react';
import Description from './description'
import Services from './services'
import Services2 from './services2'
import Link from 'next/link';
import Gallery from './gallery'


export default function Landing() {

  const projects = [

    {
      id:1,
      title1: "Wedding",
      title2: "Celebrations",
      src: "/img/IMG_1550.jpeg"
    },
    {
      id:2,
      title1: "Lunar",
      title2: "New Year",
      src: "/img/IMG_1550.jpeg"
    },
    {
      id:3,
      title1: "Grand",
      title2: "Openings",
      src: "/img/IMG_1550.jpeg"
    },
    {
      id:4,
      title1: "Corprate",
      title2: "Business",
      src: "/img/IMG_1550.jpeg"
    },
    {
      id:5,
      title1: "Many",
      title2: "More",
      src: "/img/IMG_1550.jpeg"
    }
  ]

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

      {/* <div className={styles.servicesSection}>
          <Services />
      </div>  */}

   
      <div className={styles.services2Section}>
        <p>Services</p>
        {projects.map((project) => (
          <Services2 key={project.id} project={project} />
        ))}
      </div>

      <div className={styles.gallerySection}>
          <Gallery />
      </div> 

    

    </main>
  )
}