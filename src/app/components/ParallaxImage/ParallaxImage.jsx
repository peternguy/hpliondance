"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export default function ParallaxImage({
  src,
  alt,
  scrollTarget,
  offset = ["start end", "end start"],
  distance = ["-10%", "10%"],
  className = "",
  imageProps = {},
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollTarget, offset });
  const y = useTransform(scrollYProgress, [0, 1], distance);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ willChange: "transform" }}
    >
      <motion.div style={{ y }} className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          {...imageProps}
        />
      </motion.div>
    </div>
  );
}
