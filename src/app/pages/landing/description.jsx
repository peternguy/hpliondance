import styles from './description.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './descriptionAnim';
import Link from 'next/link';
import Button from '../../components/button/button';
import { useTransitionRouter } from 'next-view-transitions';
import {slideInOut} from '../../components/header/pageTransition'


export default function index() {

    const phrase = "Bridge between the past and present all across Chicago. Dedicated to preserving and celebrating the heritage of lion dance.";

    const description = useRef(null);
    const isInView = useInView(description)
    const buttonRef = useRef(null);
    const router = useTransitionRouter(); // for page transition

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
            <p>
                {
                    phrase.split(" ").map((word, index) => {
                        return (
                            <span className={styles.mask} key={index}>
                                <motion.span 
                                    variants={slideUp} 
                                    custom={index} 
                                    animate={isInView ? "open" : "closed"}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        );
                    })
                }
            </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>A tradition symbolizing strength, courage, and good fortune. Learn more about our story and what we stand for. </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    {/* <Link href="/pages/about">
                        <Button className={styles.button}>
                            <p>About Us</p>
                        </Button>
                    </Link> */}
                    <div ref={buttonRef}>
                        <Button className={styles.button}
                        
                            onClick={(e) => {
                                e.preventDefault();
                                router.push("/pages/about", {
                                    onTransitionReady: slideInOut,
                                })
                            }}
                            href="/pages/about"
                        >
                            <p>About Us</p>
                        
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}