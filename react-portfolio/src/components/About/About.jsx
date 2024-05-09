// import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt='About img' className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor icon' />
                <div className={styles.aboutImageTex}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimizied sites</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt='Cursor icon' />
                <div className={styles.aboutImageTex}>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimised and APIs</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt='UI  icon' />
                <div className={styles.aboutImageTex}>
                    <h3>Full Stack Developer</h3>
                    <p>Developing and maintaining web applications using React.js, Express.js and other related technologies.</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
