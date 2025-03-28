import styles from './jo-spo.module.scss'
import { projects } from './jo-spo-data';
import Double from '../../components/double/double';
import Magnetic from '../../components/magnetic/magnetic'


export default function Jospo() {
  return (
    <main className={styles.main}>
      {/* <h1>We use design and technology to create brands and products that perform, delight, and scale.</h1> */}
      <h1>Looking to get involved? Become part of our journey.</h1>

  
        <div className={styles.gallery}>
          <Double projects={[projects[0], projects[1]]}/>
          {/* <Double projects={[projects[2], projects[3]]} reversed={true}/> */}
        </div>
  
    </main>
  )
}