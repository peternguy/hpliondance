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
import { useTransitionRouter } from 'next-view-transitions';
import { Playfair_Display } from 'next/font/google'

const playfair_display = Playfair_Display ({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"})}
            }
        })
    }, [])

    const router = useTransitionRouter();

    function slideInOut() {
        document.documentElement.animate(
            [
                {
                    opacity: 1,
                    transform: "translateY(0)",
                },
                {
                    opacity: 0.2,
                    transform: "translateY(-35%)",
                },
            ], 
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            }
        );

        document.documentElement.animate(
            [
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",   
                }
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    }

    return (
        <>
        <div ref={header} className={`${styles.header} ${playfair_display.className}`}>
            <Magnetic>
                <div className={styles.logo}>
                    {/* <Link href="/">
                        <img src="/img/hp-logo-2.png" alt="Logo" />
                    </Link> */}
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
                        {/* <Link href="/pages/services">Services</Link> */}
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
                        {/* <Link href="/pages/gallery">Gallery</Link> */}
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
                        {/* <Link href="/pages/about">About</Link> */}
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
                        {/* <Link href="/pages/contact">Contact</Link> */}
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
                        {/* <Link href="/pages/sponsor">Sponsor</Link> */}
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
                        {/* <Link href="/pages/join">Join</Link> */}
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
            <Button onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Button>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}