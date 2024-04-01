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
        <div className={styles.headerText}>Full Stack Software Engineer </div>
        <div className={styles.bio}>
            Thanks for stopping by! My name is Christopher and I'm a full stack software engineer with a background in public speaking, project coordination, and team leadership. My creative problem-solving skills and adaptability has empowered me to foster effective working environments and positive results in the face of new challenges. Check out some of my projects below! I look forward to the opportunity to connect and build something beautiful together.</div>
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
                            <div className={styles.portTitle}><strong>Momentum</strong><br></br>an Arena Survival Game</div></a>
                        </div>
                        <div className={styles.portTitle}>
                    <a href="https://github.com/Clazariuk1/Dungeon-Arena-GAp1"><div className={styles.portTitle}><strong>Github Repository Link</strong></div></a>
                    </div>
                    </div>
                    <ul className={styles.descriptionList}>
                    <li className={styles.portDescriptionText}>An arcade-style survival game making heavy use of collision detection elements and DOM manipulation.
</li>
                        <li className={styles.portDescriptionText}>
                            Front-end HTML/CSS/JS Development
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
                    <a href="https://ecommerce.christopherlazariuk.me"><div className={styles.portTitle}><strong>Dev Dependency</strong><br></br>an Ecommerce Website</div></a>
                    <a href="https://github.com/Clazariuk1/unit3-project"><div className={styles.portTitle}><strong>Github Repository Link</strong></div></a>
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
                <img className={styles.picFile} src="/img/ConnectionsScreenshot.png" />
                </div>
                <div className={styles.portDescriptionCard}>
                    <div className={styles.portTitleCard}>
                    <div className={styles.portTitle}> <strong>Connections</strong><br></br> a Linkedin Alternative</div>
                    <a href="https://github.com/Clazariuk1/connection"><div className={styles.portTitle}><strong>Github Repository Link</strong></div></a>
                    </div>
                    <ul className={styles.descriptionList}>
                        <li className={styles.portDescriptionText}>
                            Full-Stack MERN application featuring RESTful routing and full CRUD functionality
                        </li>
                        <li className={styles.portDescriptionText}>
                            Built with React, NodeJS, and MongoDB
                        </li>
                        <li className={styles.portDescriptionText}>
                            Team Scrum Master
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        </section>
        </main>
    )
}
