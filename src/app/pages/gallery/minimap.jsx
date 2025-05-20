"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./gallery.module.css"
import FlipText from "../../components/revealLink/revealLink";


export default function GalleryMinimap({ images, initialIndex, onBack }) {
  const containerRef = useRef(null);
  const itemsRef = useRef(null);
  const indicatorRef = useRef(null);
  const itemRefs = useRef([]);
  const animationFrameRef = useRef(null);

  const translateRef = useRef({
    current: 0,
    target: 0,
    max: 0,
  });

  const [isHorizontal, setIsHorizontal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex); // selected img
  const dimensionsRef = useRef({
    itemSize: 0,
    containerSize: 0,
    indicatorSize: 0,
  });

  const isClickMoveRef = useRef(false);
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  const updateDimensions = () => {
    const newIsHorizontal = window.innerWidth <= 900;
    const firstItem = itemRefs.current[0];

    if (!firstItem) return;

    const newDimensions = {
      itemSize: newIsHorizontal
        ? firstItem.getBoundingClientRect().width
        : firstItem.getBoundingClientRect().height,
      containerSize: newIsHorizontal
        ? itemsRef.current.scrollWidth
        : itemsRef.current.getBoundingClientRect().height,
      indicatorSize: newIsHorizontal
        ? indicatorRef.current.getBoundingClientRect().width
        : indicatorRef.current.getBoundingClientRect().height,
    };

    dimensionsRef.current = newDimensions;
    translateRef.current.max =
      newDimensions.containerSize - newDimensions.indicatorSize;

    if (isHorizontal !== newIsHorizontal) {
      setIsHorizontal(newIsHorizontal);
    }
  };

  const getItemInIndicator = () => {
    const indicatorStart = -translateRef.current.current;
    const indicatorEnd = indicatorStart + dimensionsRef.current.indicatorSize;

    let maxOverlap = 0;
    let selectedIndex = 0;

    itemRefs.current.forEach((item, index) => {
      const itemStart = index * dimensionsRef.current.itemSize;
      const itemEnd = itemStart + dimensionsRef.current.itemSize;

      const overlapStart = Math.max(indicatorStart, itemStart);
      const overlapEnd = Math.min(indicatorEnd, itemEnd);
      const overlap = Math.max(0, overlapEnd - overlapStart);

      if (overlap > maxOverlap) {
        maxOverlap = overlap;
        selectedIndex = index;
      }
    });

    return selectedIndex;
  };

  const animate = () => {
    const lerpFactor = isClickMoveRef.current ? 0.05 : 0.075;
    translateRef.current.current = lerp(
      translateRef.current.current,
      translateRef.current.target,
      lerpFactor
    );

    if (
      Math.abs(translateRef.current.current - translateRef.current.target) >
      0.01
    ) {
      const transform = isHorizontal
        ? `translateX(${translateRef.current.current}px)`
        : `translateY(${translateRef.current.current}px)`;

      if (itemsRef.current) {
        itemsRef.current.style.transform = transform;
      }

      const activeIndex = getItemInIndicator();
      setCurrentImageIndex(activeIndex);
    } else {
      isClickMoveRef.current = false;
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      isClickMoveRef.current = false;

      const delta = e.deltaY;
      const scrollVelocity = Math.min(Math.max(delta * 0.5, -20), 20);

      translateRef.current.target = Math.min(
        Math.max(
          translateRef.current.target - scrollVelocity,
          -translateRef.current.max
        ),
        0
      );
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      if (isHorizontal) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (isHorizontal) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;

        const scrollVelocity = Math.min(Math.max(deltaY * 0.5, -20), 20);

        translateRef.current.target = Math.min(
          Math.max(
            translateRef.current.target - scrollVelocity,
            -translateRef.current.max
          ),
          0
        );

        touchStartY = touchY;
        e.preventDefault();
      }
    };

    const handleResize = () => {
      updateDimensions();

      translateRef.current.target = Math.min(
        Math.max(translateRef.current.target, -translateRef.current.max),
        0
      );
      translateRef.current.current = translateRef.current.target;

      const transform = isHorizontal
        ? `translateX(${translateRef.current.current}px)`
        : `translateY(${translateRef.current.current}px)`;

      if (itemsRef.current) {
        itemsRef.current.style.transform = transform;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    window.addEventListener("resize", handleResize);

    updateDimensions();
    // Center the strip on the clicked thumbnail
    const { itemSize, indicatorSize } = dimensionsRef.current;
    const rawOffset =
      -initialIndex * itemSize +
      (indicatorSize - itemSize) / 2;
    const clampedOffset = Math.max(
      Math.min(rawOffset, 0),
      -translateRef.current.max
    );
    // Seed both current and target so the animation loop doesn’t fight it
    translateRef.current.current = clampedOffset;
    translateRef.current.target  = clampedOffset;
    // Immediately apply the transform so there’s no “flash” at 0
    if (itemsRef.current) {
      const axis = isHorizontal ? "X" : "Y";
      itemsRef.current.style.transform = `translate${axis}(${clampedOffset}px)`;
    }
    // updatePreviewImage(initialIndex);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
      }
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHorizontal, initialIndex]);

  const handleItemClick = (index) => {
    isClickMoveRef.current = true;
    const newTranslate =
      -index * dimensionsRef.current.itemSize +
      (dimensionsRef.current.indicatorSize - dimensionsRef.current.itemSize) /
        2;

    translateRef.current.target = Math.max(
      Math.min(newTranslate, 0),
      -translateRef.current.max
    );
  };

  return (
  <div className={styles.container} ref={containerRef}>

      <button className={styles.backBtn} onClick={onBack}>
        <FlipText>BACK</FlipText>
      </button>

      <div className={styles.imgPreview}>
        <img
        //  ref={previewImageRef}
         src={images[currentImageIndex]} 
         alt="" 
         loading="eager"
        />
      </div>

      <div className={styles.minimap}>
      <div className={styles.indicator} ref={indicatorRef}></div>
        <div className={styles.items} ref={itemsRef}>
          {images.map((src, idx) => (
          <div
            key={idx}
            className={
              `${styles.item}` +
              (idx === currentImageIndex ? ` ${styles.active}` : "")
            }
            ref={el => (itemRefs.current[idx] = el)}
            onClick={() => handleItemClick(idx)}
          >
            <img src={src} alt="" loading="eager" />
          </div>
        ))}

        </div>
      </div>
    </div>
  );
}