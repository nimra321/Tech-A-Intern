// import React from 'react'

import { getImageUrl } from './../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h3>Contact</h3>
            <p>Feel free to reach out!</p>
        </div> 
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon' />
                <a href='mailto:nimra.jahangir2001@gmail.com'>
                    <h6>nimra.jahangir2001@gmail.com</h6></a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='Email Icon' />
                <a href='https://www.linkedin.com/in/nimra-jahangir-43223a261/'>
                <h6>linkedIn.com//NimraJahangir</h6></a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='Github Icon' />
                <a href='https://github.com/nimra321?tab=overview&from=2024-05-01&to=2024-05-09'>
                <h6>GithHub.com//NimraJahangir321</h6></a>
            </li>
        </ul>
    </footer>
  )
}
