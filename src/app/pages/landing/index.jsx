'use client'
import styles from './index.module.scss'
import { useRef } from 'react';
import Description from './description'
import Services2 from './services2'
import Link from 'next/link';
import Gallery2 from './gallery2'
import Gallery2_words from './gallery2-words'
import Button from '../../components/button/button';
import Sponsors from './sponsors'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitType from "split-type"




gsap.registerPlugin(useGSAP);

export default function Landing() {

  const projects = [

    {
      id:1,
      title1: "Wedding",
      title2: "Celebrations",
      src: "/img/rings.png",

    },
    {
      id:2,
      title1: "Lunar",
      title2: "New Year",
      src: "/img/rings.png",
    },
    {
      id:3,
      title1: "Grand",
      title2: "Openings",
      src: "/img/rings.png",
    },
    {
      id:4,
      title1: "Schools",
      title2: "Businesses",
      src: "/img/rings.png",
    },
    {
      id:5,
      title1: "See",
      title2: "All",
      src: "/img/rings.png",
    }
  ]
  const container = useRef();
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);


  useGSAP(
    () => {
      const text = new SplitType(".info p", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });

      text.lines.forEach((line) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
      });

      gsap.set(".info p .line span", {
        y: 400,
        display: "block",
      }),

      gsap.to(".info p .line span", {
        y: 0,
        duration: 2,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });
      

      return () => {
        if (text) text.revert();
      };
    },
    {scope: container}
    
  );
  



  return (
    <main className={styles.main} >
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
          <div ref={container} className={`${styles.textContainer} info`}>
            <p className={styles.firstText}>Hoang Phuc</p>
            <p className={styles.secondText}>Lion Dance</p>
    
            <div className={styles.textWithButton}>
              <p className={styles.thirdText}>Step into the culture. Celebrate the tradition.</p>
                <Link href="/pages/contact">
                  <Button className={styles.button}>
                    <p>Contact Now</p>
                  </Button>
                </Link>
            </div>
          </div>
        </div>
      </div>

      
      <div className={styles.descriptionSection}>
        <Description />
      </div> 

      <div>
        <Sponsors />
      </div>
   
      <div className={styles.services2Section}>
        <p>Services</p>
        {projects.map((project) => (
          <Services2 key={project.id} project={project} />
        ))}
      </div>

      <div>
        <Gallery2_words />
      </div>

      <div>
          <Gallery2 />
      </div>



 
    

    </main>
  )
}