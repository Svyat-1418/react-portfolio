import React from "react";
import styles from "./Header.module.css"
import commonStyles from "./../../common/styles/contaiiner.module.css"
import {Nav} from "../Nav/Nav";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${commonStyles.container} ${styles.headerContainer}`}>
                <Nav />
            </div>
        </header>
    )
}