import React from "react";
import styles from "./Project.module.css"

type Props = {
    title: string
    description: string
}

export const Project = ({title, description}: Props) => {
    return (
        <div className={styles.project}>
            <div className={styles.image}>
                <a href="#" className={styles.viewBtn}>View</a>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    )
}