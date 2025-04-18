'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './nav';
import gsap from 'gsap';
import Link from 'next/link'
import Button from '../button/button';
import Magnetic from '../magnetic/magnetic';
import { Playfair_Display } from 'next/font/google'
import useIsMobile from './useIsMobile';
import { useTransitionRouter } from 'next-view-transitions';
import {slideInOut} from './pageTransition'


const playfair_display = Playfair_Display ({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);
    const isMobile = useIsMobile();

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        if (!button.current) return;
      
        // Always reset scale if mobile
        if (isMobile) {
          gsap.set(button.current, { scale: 1 });
          return;
        }
      
        // For desktop only
        const anim = gsap.to(button.current, {
          scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight,
            onLeave: () => {
              gsap.to(button.current, {
                scale: 1,
                duration: 0.25,
                ease: "power1.out",
              });
            },
            onEnterBack: () => {
              gsap.to(button.current, {
                scale: 0,
                duration: 0.25,
                ease: "power1.out",
              });
            },
          },
        });
      
        // Cleanup
        return () => {
          if (anim.scrollTrigger) anim.scrollTrigger.kill();
        };
      }, [isMobile]);
      
      

    const router = useTransitionRouter(); // for page transition


    return (
        <>
            <div ref={header} className={`${styles.header} ${playfair_display.className}`}>
                <Magnetic>
                    <div className={styles.logo}>
                            <a 
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/", {
                                        onTransitionReady: slideInOut,
                                    })
                                }}
                                href="/"
                            >
                                <img src="/img/hp-logo-2.png" alt="Logo" />    
                            </a>
                    </div>
                </Magnetic>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            <a 
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/pages/services", {
                                        onTransitionReady: slideInOut,
                                    })
                                }}
                                href="/pages/services"
                            >
                                Services    
                            </a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a 
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/pages/gallery", {
                                        onTransitionReady: slideInOut,
                                    })
                                }}
                                href="/pages/gallery"
                            >
                                Gallery    
                            </a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic> 
                        <div className={styles.el}>
                            <a 
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/pages/about", {
                                        onTransitionReady: slideInOut,
                                    })
                                }}
                                href="/pages/about"
                            >
                                About    
                            </a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a 
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/pages/contact", {
                                        onTransitionReady: slideInOut,
                                    })
                                }}
                                href="/pages/contact"
                            >
                                Contact    
                            </a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a 
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/pages/sponsor", {
                                        onTransitionReady: slideInOut,
                                    })
                                }}
                                href="/pages/sponsor"
                            >
                                Sponsor    
                            </a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a 
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/pages/join", {
                                        onTransitionReady: slideInOut,
                                    })
                                }}
                                href="/pages/join"
                            >
                                Join    
                            </a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
        
            <div ref={button} className={styles.headerButtonContainer}>
                {/* Button that toggles the menu open/close state */}
                <Button onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                    {/* Hamburger icon (changes style when active) */}
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Button>
            </div>

       
            <AnimatePresence mode="wait">
                {/* Only render <Nav /> when the menu is active */}
                {isActive && <Nav />}
            </AnimatePresence>




        </>
    )
}