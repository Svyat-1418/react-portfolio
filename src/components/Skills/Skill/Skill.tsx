import React from "react";
import styles from "./Skill.module.css"

type Props = {
    title: string
    description: string
}

export const Skill = ({title, description}: Props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.description}>{description}</div>
        </div>
    )
}