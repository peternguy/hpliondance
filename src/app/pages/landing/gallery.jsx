import styles from './gallery.module.scss';
import Picture1 from '/public/img/IMG_1550.jpeg';
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                <motion.div style={{scale}} className={styles.el}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={Picture1}
                            fill
                            alt="image"
                            placeholder='blur'
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}