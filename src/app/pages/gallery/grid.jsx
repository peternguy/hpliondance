"use client";

import styles from "./gallery.module.css";

export default function GalleryGrid({ images, onSelect }) {
  return (
    <div className={styles.gridContainer}>
      {images.map((src, i) => (
        <div
          key={i}
          className={styles.gridItem}
          onClick={() => onSelect(i)}
        >
            <img
                src={src}
                alt={`Thumbnail ${i + 1}`}
                loading="eager"
            />
        </div>
      ))}
    </div>
  );
}
