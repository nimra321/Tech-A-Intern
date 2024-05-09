// import React from 'react'

import { getImageUrl } from './../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div> 
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon' />
                <a href='mailto:nimra.jahangir2001@gmail.com'>nimra.jahangir2001@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='Email Icon' />
                <a href='https://www.linkedin.com/in/nimra-jahangir-43223a261/'>linkedIn.com//NimraJahangir</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='Github Icon' />
                <a href='https://github.com/nimra321?tab=overview&from=2024-05-01&to=2024-05-09'>GithHub.com//NimraJahangir321</a>
            </li>
        </ul>
    </footer>
  )
}
