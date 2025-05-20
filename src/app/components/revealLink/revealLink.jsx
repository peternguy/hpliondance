"use client";

import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER  = 0.025;

/**
 * Wraps text in two overlaid layers of spans that
 * animate vertically on hover, creating a flipping effect.
 *
 * @param {object} props
 * @param {string} props.children   The text to animate
 * @param {string} props.className  Any extra classes to style the wrapper
 * @param {object} props.style      Inline styles for the wrapper
 */
export default function FlipText({ children, className = "", style = {} }) {
  // Ensure we have a string
  const text = typeof children === "string" ? children : "";

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`relative inline-block overflow-hidden ${className}`}
      style={style}
    >
      {/* Top layer: letters slide up out of view */}
      <span aria-hidden="true">
        {text.split("").map((char, i) => (
          <motion.span
            key={`up-${i}`}
            variants={{
              initial: { y: "0%" },
              hovered: { y: "-100%" },
            }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </span>

      {/* Bottom layer: letters slide in from below */}
      <span
        aria-hidden="true"
        className="absolute inset-0 top-0 left-0"
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={`down-${i}`}
            variants={{
              initial: { y: "100%" },
              hovered: { y: "0%" },
            }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </span>

      {/* Accessibility: keep the original text for screen-readers */}
      <span className="sr-only">{text}</span>
    </motion.span>
  );
}
