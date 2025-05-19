"use client";

import { useRef } from 'react';
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";


export default function Section() {
    const container = useRef();
    const Background = "/img/ztz2.jpg";

    return (
        <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
                <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>Beauty and quality need the right time to be conceived and realised even in a world that is in too much of a hurry.</p>
                <p className='text-[5vw] uppercase mix-blend-difference'>check out the Gallery</p>
            </div>
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <ParallaxImage
                src={Background}
                alt="hero background"
                className="relative w-full h-full"
                scrollTarget={container}
                offset={["start end","end start"]}
                distance={["-10%","10%"]}
                imageProps={{ loading: "eager" }}
                />
            </div>
        </div>
    )
}

