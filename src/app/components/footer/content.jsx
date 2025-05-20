'use client'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Link from 'next/link';
import Button from '../button/button';
import styles from './footer.module.scss'
import { Playfair_Display } from 'next/font/google'
import AnimatedH1 from "../AnimatedH1/AnimatedH1";


const playfair_display = Playfair_Display ({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Content() {
  return (
    <div className={`bg-[#262626] py-8 px-12 h-full w-full flex flex-col justify-between ${playfair_display.className}`}>
        <Section1 />
        <Section3 />  
        <Section2 />
 
    </div>
  )
}

const Section1 = () => {
    return (
        <div className='flex shrink-0 gap-20 text-white'>
            <div className='flex flex-col gap-2 text-[1.5vw]'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Social</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Youttube</p>
                {/* <RevealLinks /> */}
            </div>
            <div className='flex flex-col gap-2 text-[1.5vw]'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Built by Peter Nguyen</h3>
                <p>LinkedIn</p>
                <p>GitHub</p>
            </div>
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <AnimatedH1 className='text-[14vw] leading-[0.8] mt-10 text-[#ffffff]'>HPLionDance</AnimatedH1>
            <p className='text-[#ffffff]'>©copyright</p>
        </div>
    )
}


const Section3 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // Map scrollYProgress to a X offset 
  const x = useTransform(scrollYProgress, [0.7, 1], [-200, -50]);

  return (
    <motion.div
      ref={ref}
      style={{ x }}
      className='absolute top-[30vh] right-32'
    >
      <Link href="/pages/contact">
        <Button className={styles.button}>
          <p>Let's Talk</p>
        </Button>
      </Link>
    </motion.div>
  );
};



