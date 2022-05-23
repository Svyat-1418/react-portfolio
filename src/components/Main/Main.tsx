import React from "react";
import styles from "./Main.module.css"
import commonStyles from "./../../common/styles/contaiiner.module.css"

export const Main = () => {
    return (
        <main className={styles.mainBlock}>
            <div className={`${commonStyles.container}`}>
                <div className={styles.text}>
                    <span>Hi!</span>
                    <h1>I am Svyatoslav</h1>
                    <p>I Am Frontend Developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </main>
    )
}