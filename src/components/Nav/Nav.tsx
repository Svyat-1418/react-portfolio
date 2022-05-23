import React from "react";
import styles from "./Nav.module.css"

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <a href="#">Main</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contacts</a>
        </nav>
    )
}