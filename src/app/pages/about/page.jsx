import React from 'react'
import styles from './about.module.scss'

export default function About() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Who is HP Lion Dance?</h1>
      <p className={styles.intro}>
        At HPLionDance, we are committed to cultural excellence and community engagement through the art of traditional lion dance. Our team brings together passion, precision, and heritage to create unforgettable performances for any occasion. With over a decade of experience, we pride ourselves on delivering high-energy shows that honor tradition while inspiring the next generation.
      </p>

      <p className={styles.intro}>
        We collaborate with organizations, schools, and businesses to provide customized performances that align with each client’s vision and values. From grand openings and festivals to private events and weddings, HPLionDance transforms moments into memories.
      </p>

      <section className={styles.section2}>
        <h2>Get in Touch</h2>
        <p>
          Ready to elevate your event? Contact us to book a performance or learn more about our cultural programming, workshops, and sponsorship opportunities. Let’s bring vibrant energy and cultural storytelling to your next celebration.
        </p>
      </section>
    </section>
  )
}
