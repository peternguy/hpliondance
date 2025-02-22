import styles from './description.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './descriptionAnim';
import Link from 'next/link';
import Button from '../../components/button/button';

export default function index() {

    const phrase = "Bridge between the past and present all across Chicago. Dedicated to preserving and celebrating the heritage of lion dance.";

    const description = useRef(null);
    const isInView = useInView(description)
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
                    <Link href="/pages/about">
                        <Button className={styles.button}>
                            <p>About Us</p>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}