'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import { React, useRef } from "react";

const Gallery = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-[100vh] items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Gallery coming soon
        </span>
      </div>
    
      <div className="flex h-[100vh] items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};





export default Gallery;
