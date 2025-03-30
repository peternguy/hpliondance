'use client';
import { useRef } from "react";
import styles from './page.module.scss';
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
            src: "/img/ztz-27-min.jpg", 
            y: lg
        }
   
    ];
    

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <motion.h1 style={{y: sm}}>Services</motion.h1>
            </div>
            <div className={styles.images}>
                {
                    images.map( ({src, y}, i) => {
                        return <motion.div style={{y}} key={`i_${i}`} className={styles.imageContainer}>
                            <Image 
                                src={src}
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