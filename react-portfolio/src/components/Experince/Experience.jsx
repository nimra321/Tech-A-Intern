// import React from 'react'
import "./Experience.module.css";
import styles from "./Experience.module.css";
import skills from "../../Data/skills.json";
import { getImageUrl } from './../../utils';
import history from "../../Data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="skills" >
        <h2 className={styles.title}>Skills and Achivements</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                            <p>{skill.title}</p>
                        </div>
                    })
                }
            </div>
            <ul className={styles.history}>
                {
                    history.map((historyITem, id) => {
                        return <li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(historyITem.imageSrc)} alt={`${history.organisation} Logo`} />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyITem.role}, ${historyITem.organisation}`}</h3>
                                <p>{`${historyITem.startDate} - ${historyITem.endDate}`}</p>
                                <ul>{historyITem.experiences.map((experience, id) => {
                                    return <li key={id}>{experience}</li>
                                })}</ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
  )
}
