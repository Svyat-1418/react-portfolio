import React from 'react';
import styles from './App.module.css';
import {Header} from "./components/Header/Header";
import {Main} from './components/Main/Main';
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import Hire from "./components/Hire/Hire";
import Contacts from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <Main/>
            <Skills />
            <Projects />
            <Hire />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
