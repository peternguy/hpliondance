'use client';
import { useRef } from "react";
import styles from './gallery.module.scss';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Button from '../../components/button/button';

const word = "Explore the passion";

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
        {
            src: "/img/ztz-06-min.jpg", 
            y: sm
        },
        {
            src: "/img/ztz-27-min.jpg", 
            y: lg
        },
        {
            src: "/img/ztz-28-min.jpg", 
            y: md
        }
    ];
    

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <motion.h1 style={{y: sm}}>Check Out Our Work</motion.h1>
                <div data-scroll data-scroll-speed={0}>
                    <Link href="/pages/gallery">
                        <Button className={styles.button}>
                            <p>Gallery</p>
                        </Button>
                    </Link>
                </div>
                <div className={styles.word}>
                    <p>
                        {
                            word.split("").map((letter, i) => {
                                const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -50) - 25])
                                return <motion.span style={{top: y}} key={`l_${i}`} >{letter}</motion.span>
                            })
                        }
                    </p>
                </div>

            </div>
            <div className={styles.images}>
                {
                    images.map( ({src, y}, i) => {
                        return <motion.div style={{y}} key={`i_${i}`} className={styles.imageContainer}>
                            <Image 
                                src={src}
                                // placeholder="blur"
                                alt="image"
                                fill
                            />
                        </motion.div>
                    })
                }
            </div>
            <div className={styles.body}>
                <h2>justo sit amet sapien dignissim aliquet. 
                        Donec efficitur dolor vel lectus fringilla, at 
                        fermentum nisl tincidunt. Aliquam erat volutpat.
                </h2>
            </div>
        </div>
    )
}