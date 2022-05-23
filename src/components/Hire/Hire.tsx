import React from "react";
import styles from "./Hire.module.css"
import commonStyles from "./../../common/styles/contaiiner.module.css"

const Hire = () => {
    return (
        <section className={styles.hireBlock}>
            <div className={`${commonStyles.container} ${styles.hireContainer}`}>
                <h2 className={styles.title}>I am available for freelance</h2>
                <a href="#" className={styles.hireBtn}>Hire me</a>
            </div>
        </section>
    )
}
export default Hire