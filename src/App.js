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
        <div className={styles.headerText}>Full Stack Dev / Software Engineer </div>
        <div className={styles.headerText}>Novelist / Muay Thai Fighter</div>
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
                    <a href="https://momentum.christopherlazariuk.me" >
                        <img className={styles.picFile} src="./img/MomentumPortPic.png" /></a>
                </div>
                <div className={styles.portDescriptionCard}>
                    <div className={styles.portTitleCard}>
                    <div className={styles.portTitle}>
                        <a href="https://momentum.christopherlazariuk.me" >
                            <h4 className={styles.portTitle}>Momentum - an Arena Survival Game</h4></a>
                        </div>
                        <div className={styles.portTitle}>
                    <a href="https://github.com/Clazariuk1/Dungeon-Arena-GAp1"><h5 className={styles.portTitle}>~Github Repository Link~</h5></a>
                    </div>
                    </div>
                    <ul className={styles.descriptionList}>
                    <li className={styles.portDescriptionText}>An arcade-style survival game making heavy use of collision detection elements and DOM manipulation.
</li>
                        <li className={styles.portDescriptionText}>
                            Front-end HTML/CSS/JS Development
                        </li>
                        <li className={styles.portDescriptionText}>
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
                    <div className={styles.portTitleCard}>
                    <a href="https://ecommerce.christopherlazariuk.me"><h4 className={styles.portTitle}>Dev Dependency - an Ecommerce Website</h4></a>
                    <a href="https://github.com/Clazariuk1/unit3-project"><h5 className={styles.portTitle}>~Github Repository Link~</h5></a>
                    </div>
                    <ul className={styles.descriptionList}>
                    <li className={styles.portDescriptionText}>An ecommerce website with ordering system functionality and a multi-page layout</li>
                        <li className={styles.portDescriptionText}>Languages/Frameworks: React, NodeJS, MongoDB</li>
                        <li className={styles.portDescriptionText}>Full stack MERN application featuring RESTful routing</li>
                    </ul>
                </div>
            </div>
        </div>


        <div className={styles.portfolioCard}>
            <div className={styles.portPiece}>
                <div className={styles.portPicContainer}>
                <img className={styles.picFile} src="/img/underconstruction.jpeg" />
                </div>
                <div className={styles.portDescriptionCard}>
                    <div className={styles.portTitleCard}>
                    <h4 className={styles.portTitle}> The Liberty Blog - a Full Stack Blog API</h4>
                    <a href="https://github.com/Clazariuk1/https://github.com/Clazariuk1/liberty-blog"><h5 className={styles.portTitle}>~Github Repository Link~</h5></a>
                    </div>
                    <ul className={styles.descriptionList}>
                    <li className={styles.portDescriptionText}>A simple fully functional RESTful API
</li>
                        <li className={styles.portDescriptionText}>
                            Full-Stack MERN application featuring RESTful routing, user authorization, and full CRUD functionality
                        </li>
                        <li className={styles.portDescriptionText}>
                            Built with React, NodeJS, and MongoDB
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div className={styles.portfolioCard}>
            <div className={styles.portPiece}>
                <div className={styles.portPicContainer}>
                <img className={styles.picFile} src="/img/underconstruction.jpeg" />
                </div>
                <div className={styles.portDescriptionCard}>
                    <div className={styles.portTitleCard}>
                    <h4 className={styles.portTitle}> Connections - a Linkedin Alternative</h4>
                    <a href="https://github.com/Clazariuk1/connection"><h5 className={styles.portTitle}>~Github Repository Link~</h5></a>
                    </div>
                    <ul className={styles.descriptionList}>
                    <li className={styles.portDescriptionText}>A parody of our favorite professional networking website, features chat messaging functionality
</li>
                        <li className={styles.portDescriptionText}>
                            Full-Stack MERN application featuring RESTful routing and full CRUD functionality
                        </li>
                        <li className={styles.portDescriptionText}>
                            Built with React, NodeJS, and MongoDB
                        </li>
                        <li className={styles.portDescriptionText}>
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
