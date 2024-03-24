import { useState, useEffect } from 'react'
import styles from './App.module.scss'

// GIVE LINKS TO IMAGES AND NAMES BOTH OF THE PORTFOLIO PIECE!
export default function App(){

    return(
        <main className={styles.Portfolio}>
        <div className={styles.AboutMe}>
        <div className={styles.ProPicContainer}>
            <img className={styles.ProPic} src="./img/ChrisBioPic.jpg" />
        </div>
        <div className={styles.ProDetails}>
        <div className={styles.headerText}>Christopher Lazariuk</div>
        <div className={styles.headerText}>Full Stack Developer. Software Engineer.</div>
        <div className={styles.headerText}>Novelist. Muay Thai Fighter.</div>
        <div className={styles.bio}>They don't call them bootcamps for nothing! You want a dev, I got the creds. Check out some of my projects below! Looking forward to the opportunity to dig into something beautiful together. As to the website here? It's a work in progress, I've still got final projects to contend with for school. I cared so much about applying to your position I churned out a website in a couple hours for you!</div>
        <div className={styles.buttonLinks}>
        <a href="/img/portfolio-resume.pdf" target="_blank" ><button className={styles.resume}>My Professional SWE Resume</button></a>
        <aside className={styles.ContactsBar}>
            <div className={styles.contactIcon}>
                <a href="mailto:clazariuk@gmail.com?body=My custom mail body" ><img className={styles.contactPic} src="./img/emailIcon.jpeg" /></a>
            </div>
            <div className={styles.contactIcon}>
                <a href="https://www.linkedin.com/in/christopherlazariuk/" ><img className={styles.contactPic} src="/img/linkedinIcon.png" /></a>
            </div>
            <div className={styles.contactIcon}>
                <a href="https://github.com/Clazariuk1" ><img className={styles.contactPic} src="/img/githubPic.png" /></a>
            </div>
        </aside>
        </div>
        </div>
        </div>
        <section className={styles.portfolioSamples}>
        <div className={styles.portfolioCard}>
            <div className={styles.portPiece}>
                <div className={styles.portPicContainer}>
                    <a href="https://momentum.christopherlazariuk.me" ><img className={styles.picFile} src="./img/MomentumPortPic.png" /></a>
                </div>
                <div className={styles.portDescriptionCard}>
                    <a href="https://momentum.christopherlazariuk.me" ><h4 className ={styles.portTitle}>Momentum</h4></a>
                    <a href="https://github.com/Clazariuk1/Dungeon-Arena-GAp1"><h5>Github Repository Link</h5></a>
                    <ul>
                    <li className={styles.portDescriptionText}>An arcade-style survival game making heavy use of collision detection elements and DOM manipulation.
</li>
                        <li>
                            Front-end HTML/CSS/JS Development
                        </li>
                        <li>
                            Collision Detection Exploration
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.portfolioCard}>
            <div className={styles.portPiece}>
             <div className={styles.portPicContainer}>
                    <img className={styles.picFile} src="/img/DevDependencyPortPic.png" />
                </div>
                <div className={styles.portDescriptionCard}>
                    <a href="https://ecommerce.christopherlazariuk.me"><h4 className ={styles.portTitle}>Dev Dependency - an Ecommerce Website</h4></a>
                    <a href="https://github.com/Clazariuk1/unit3-project"><h5>Github Repository Link</h5></a>

                    <ul>
                    <li className={styles.portDescriptionText}>An ecommerce website with ordering system functionality and a multi-page layout</li>
                        <li>Languages/Frameworks: React, NodeJS, MongoDB</li>
                        <li>Full stack MERN application featuring RESTful routing</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.portfolioCard}>
            <div className={styles.portPiece}>
                <div className={styles.portPicContainer}>
                <img className={styles.picFile} src="/img/DevDependencyPortPic.png" />
                </div>
                <div className={styles.portDescriptionCard}>
                    <h4 className ={styles.portTitle}>Connections</h4>
                    <a href="https://github.com/Clazariuk1/connection"><h5>Github Repository Link</h5></a>

                    <ul>
                    <li className={styles.portDescriptionText}>A parody of our favorite professional networking website, features chat messaging functionality
</li>
                        <li>
                            Full-Stack MERN application featuring RESTful routing and full CRUD functionality
                        </li>
                        <li>
                            Built with React, NodeJS, and MongoDB
                        </li>
                        <li>
                            Dev Team Scrum Master
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
        </main>
    )
}
