import React from "react";
import styles from "./Contacts.module.css"
import commonStyles from "./../../common/styles/contaiiner.module.css"

const Contacts = () => {
    return (
        <main className={styles.contactsBlock}>
            <div className={`${commonStyles.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.contactsForm}>
                    <input/>
                    <input/>
                    <textarea/>
                    <button type={"submit"} className={styles.submitBtn}>
                        Send
                    </button>
                </form>
            </div>
        </main>
    )
}
export default Contacts