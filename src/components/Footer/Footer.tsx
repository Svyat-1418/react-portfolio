import React from "react";
import styles from "./Footer.module.css"
import commonStyles from "./../../common/styles/contaiiner.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${commonStyles.container} ${styles.footerContainer}`}>
                <div className={styles.socNetworks}>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
                <span className={styles.author}>Nemkovich Svyatoslav</span>
                <span className={styles.copyrights}>&copy; 2022. All rights reserved</span>
            </div>
        </footer>
    )
}