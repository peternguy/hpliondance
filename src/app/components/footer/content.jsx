import React from 'react'

export default function Content() {
  return (
    <div className='bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section3 />  
        <Section2 />
 
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[14vw] leading-[0.8] mt-10 text-[#ffffff]'>HPLionDance</h1>
            <p className='text-[#ffffff]'>©copyright</p>
        </div>
    )
}

const Section3 = () => {
    return (
        <div className='absolute top-5 right-32'>
            <h1 className='text-[6vw] leading-[0.8] mt-10 text-[#ffffff]'>Lets talk</h1>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20 text-white'>
            <div className='flex flex-col gap-2 '>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Nav</h3>
                <p>Services</p>
                <p>Gallery</p>
                <p>About</p>
                <p>Sponsor</p>
                <p>Join</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Social</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Youttube</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Built by Peter Nguyen</h3>
                <p>LinkedIn</p>
                <p>GitHub</p>
            </div>
        </div>
    )
}