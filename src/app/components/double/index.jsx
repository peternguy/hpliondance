'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef } from 'react'; 

export default function Double({projects, reversed}) {

    const firstImage = useRef(null);
    const secondImage = useRef(null);

    return(
      <div className={styles.double}>
  
        <div ref={firstImage} className={styles.imageContainer}>
          <div className={styles.stretchyWrapper}>
            <Image 
              src={`/images/${projects[0].src}`}
              fill={true}
              alt={"image"}
            />
          </div>
          <div className={styles.body}>
              <h3>{projects[0].name}</h3>
              <p>{projects[0].description}</p>
              <p>{projects[0].year}</p>
          </div>
        </div>
  
        <div ref={secondImage} className={styles.imageContainer}>
          <div className={styles.stretchyWrapper}>
            <Image 
              src={`/images/${projects[1].src}`}
              fill={true}
              alt={"image"}
            />
          </div>
          <div className={styles.body}>
              <h3>{projects[1].name}</h3>
              <p>{projects[1].description}</p>
              <p>{projects[1].year}</p>
          </div>
        </div>
  
      </div>
    )
}