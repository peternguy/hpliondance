import React from 'react'
import styles from './contact.module.scss'

export default function Contact() {
  return (
    <section className={styles.section}>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
      </p>
      <section className={styles.section2}>
        <h2>Get in Touch</h2>
        <p>
          Quisque vel justo sit amet sapien dignissim aliquet. Donec efficitur dolor vel lectus fringilla, at fermentum nisl tincidunt. Aliquam erat volutpat.
        </p>
      </section>
    </section>
  )
}
