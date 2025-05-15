import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './gallery2-words.module.scss';

export default function Paragraph({
  paragraph = 'Relive moments from our past shows.',
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.6', 'start 0.25'],
  });

  const words = paragraph.split(' ');

  return (
    <section ref={container} className={styles.wrapper}>
      <motion.p className={styles.paragraph}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [0, 1]
          );

          return (
            <span key={i} className={styles.word}>
              <span className={styles.shadow}>{word}</span>
              <motion.span style={{ opacity }}>{word}</motion.span>
            </span>
          );
        })}
      </motion.p>
    </section>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
