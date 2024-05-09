// import React from 'react'

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Nimra Jahangir</h1>
            <p className={styles.description}>I'm a Mern Stack Developer. I develop fully responsive and attractive User interfaces websites.</p>
            <a href="mailto:nimra.jahangir2001@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="hero image" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
