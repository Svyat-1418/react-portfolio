import React from "react";
import styles from "./Projects.module.css"
import commonStyles from "./../../common/styles/contaiiner.module.css"
import {Project} from "./Project/Project";


export const Projects = () => {
    return (
        <section className={styles.projectsBlock}>
            <div className={`${commonStyles.container} ${styles.projectsContainer}`}>
                <h3 className={styles.title}>Projects</h3>
                <div className={styles.projects}>
                    <Project title={"Social Network"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
                    />
                    <Project title={"Todolist"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                                 " Itaque provident sequi suscipit!"}
                    />
                    <Project title={"Online Cinema"}
                             description={"Lorem dolor sit amet, ipsum dolor sit amet, consectetur adipisicing."}
                    />
                    <Project title={"Education Platform"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus."}
                    />
                </div>
            </div>
        </section>
    )
}