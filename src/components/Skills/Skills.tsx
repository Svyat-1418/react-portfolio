import React from "react";
import styles from "./Skills.module.css"
import commonStyles from "./../../common/styles/contaiiner.module.css"
import { Skill } from "./Skill/Skill";

export const Skills = () => {
    return (
        <section className={styles.skillsBlock}>
            <div className={`${commonStyles.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"ReactJS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                               "Commodi, rem."}
                    />
                    <Skill title={"JS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                               "Commodi, rem.  Commodi, rem."}
                    />
                    <Skill title={"REST API"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad" +
                               "  assumenda delectus fugit nesciunt nisi repudiandae."}
                    />
                </div>
            </div>
        </section>
    )
}