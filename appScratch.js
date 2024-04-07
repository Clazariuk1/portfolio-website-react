import { useState, useEffect } from 'react'
import styles from './App.module.scss'

// GIVE LINKS TO IMAGES AND NAMES BOTH OF THE PORTFOLIO PIECE!
export default function App(){

    return(
        <main className={styles.Portfolio}>
            <div className={styles.shadowBox}> </div>

            <nav className={styles.scrollNav}>
            <div className={styles.buttonLinks}>
                <a href="/img/portfolio-resume.pdf" target="_blank" ><button className={styles.resume}>Resume</button></a>
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
                <div className={styles.navLinks}>
                    <a className={styles.linkButton} href="#top">Home</a>
                    <a className={styles.linkButton} href="#projects">Projects</a>
                    <a className={styles.linkButton} href="#about">About</a>
                    <a className={styles.linkButton} href="#skills">Skills</a>
                </div>
            </nav>
            <h2 className={styles.shadowBox} id="top">TEXT TEXT<br></br>TEST</h2>
            <div className={styles.heading}>
            <div className={styles.aboutText}>Christopher Lazariuk</div>
        <div className={styles.aboutText}>Software Engineering / Web Design</div>
        <div className={styles.aboutText}>Product / Project Management</div>
        <div className={styles.aboutText}>Operations / Coordination</div>
        </div>
        <section className={styles.portfolioSamples}>

        <h1 className={styles.aboutText} id="projects">Projects</h1>
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
                        <li className={styles.portDescriptionText}>
                            *Heavy Usage of SFX and Music*
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.portfolioCard}>
            <div className={styles.portPiece}>
             <div className={styles.portPicContainer}>
             <a href="https://ecommerce.christopherlazariuk.me">
                    <img className={styles.picFile} src="/img/DevDependencyPortPic.png" />
                    </a>
                </div>
                <div className={styles.portDescriptionCard}>
                    <div className={styles.portTitleCard}>
                    <a href="https://ecommerce.christopherlazariuk.me">
                        <div className={styles.portTitle}><strong>Dev Dependency</strong><br></br>an Ecommerce Website</div></a>
                    <a href="https://github.com/Clazariuk1/unit3-project"><div className={styles.portTitle}><strong>Github Repository Link</strong></div></a>
                    </div>
                    <ul className={styles.descriptionList}>
                    <li className={styles.portDescriptionText}>An ecommerce website with ordering system functionality and a multi-page layout</li>
                        <li className={styles.portDescriptionText}>Built with React, NodeJS, MongoDB</li>
                        <li className={styles.portDescriptionText}>Full stack MERN application featuring RESTful routing and full CRUD functionality</li>
                    </ul>
                </div>
            </div>
        </div>


        <div className={styles.portfolioCard}>
            <div className={styles.portPiece}>
                <div className={styles.portPicContainer}>
                <a href="https://connections.christopherlazariuk.me">
                <img className={styles.picFile} src="/img/ConnectionsScreenshot.png" />
                </a>
                </div>
                <div className={styles.portDescriptionCard}>
                    <div className={styles.portTitleCard}>
                        <a href="https://connections.christopherlazariuk.me">
                    <div className={styles.portTitle}> <strong>Connections</strong><br></br> a Linkedin Alternative</div></a>
                    <a href="https://github.com/Clazariuk1/connection"><div className={styles.portTitle}><strong>Github Repository Link</strong></div></a>
                    </div>
                    <ul className={styles.descriptionList}>
                    <li className={styles.portDescriptionText}>
                            "What if linkedIn got a reboot?"
                            Connect with a group of
                            fellow job-seekers to share and discuss available jobs in this virtual community.
                        </li>
                        <li className={styles.portDescriptionText}>
                            Full-Stack MERN application featuring RESTful routing and full CRUD functionality
                        </li>
                        <li className={styles.portDescriptionText}>
                            Built with React, NodeJS, and MongoDB; acting team Scrum Master
                        </li>

                    </ul>
                </div>
            </div>
        </div>

        <div className={styles.portfolioCard}>
        <div className={styles.portPiece}>
                <div className={styles.portPicContainer}>
                <a href="https://github.com/Clazariuk1/100-days-of-code">
                <img className={styles.picFile} src="/img/infinityLogo.jpeg" />
                </a>
                </div>
                <div className={styles.portDescriptionCard}>
                    <div className={styles.portTitleCard}>
                        <a href="https://github.com/Clazariuk1/100-days-of-code">
                    <div className={styles.portTitle}> <strong>Infinite Grind</strong><br></br> a Linkedin Alternative</div></a>
                    <a href="https://github.com/Clazariuk1/100-days-of-code"><div className={styles.portTitle}><strong>Github Repository Link</strong></div></a>
                    </div>
                    <ul className={styles.descriptionList}>
                    <li className={styles.portDescriptionText}>
                        A log and file compendium of skill building challenges and daily accountability tracking.
                        </li>
                        <li className={styles.portDescriptionText}>
                            leetCode function problems and lesson example challenges
                        </li>
                        <li className={styles.portDescriptionText}>
                            Links and annotated reference to the next big thing in my journey ahead.
                        </li>

                    </ul>
                </div>
            </div>
       </div>
        </section>
        <div className={styles.bio}>
            <h1 className={styles.aboutText} id="about">About Me...</h1>
            <div className={styles.AboutMe}>
            <div className={styles.ProDetails}>
            <div className={styles.ProPicContainer}>
                <img className={styles.ProPic} src="./img/ChrisBioPic.jpg" />
            </div>
            <div className={styles.headerText}>Let's scale up something beautiful together!</div>
        </div>

        </div>
                <div className={styles.bioBullet}>
            For me, building something isn't just about a few lines of code or knowing the most trendy framework. It's about the talent in the room, the vision on the board, and the savviness to utilize every tool in your kit to bring something to life from ideation to deployment.
                </div>
                    <div className={styles.bioBullet}>
            I've led field teams on multi-million dollar events and shoe-string budget ops productions, coordinated staff and operations for countless performative endeavors in the theatrical and podcasting space.
                </div>
                <div className={styles.bioBullet}>
                Client sales and relations for multiple brands and industries has been a major part of my work in life to ensure healthy synergy between communities and products.
            </div>
            <div className={styles.bioBullet}>
            I don't just code. I create and sustain businesses, products, and communities.
            </div>
            <br></br>
            <div className={styles.languageContainer}>
                <h1 className={styles.aboutText} id="skills">Languages and Frameworks</h1>

                <div className={styles.languageButtons}>
                <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" className={styles.languageButton} alt="react" /></a>

                <a href="https://jwt.io/introduction"><img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" className={styles.languageButton} alt="jwt" /></a>

                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" className={styles.languageButton} alt="javascript" /></a>

                <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"><img src="https://img.shields.io/badge/html5-E34F26?logo=html5&logoColor=white&style=for-the-badge" className={styles.languageButton} alt="html" /></a>

                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" className={styles.languageButton} alt="css" /></a>

                <a href="https://www.mongodb.com/docs/"><img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" className={styles.languageButton} alt="mongoDB" /></a>

                <a href="https://docs.github.com/en"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" className={styles.languageButton} alt="github" /></a>

                <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" className={styles.languageButton} alt="Express" /></a>

                <a href="https://nodejs.org/docs/latest/api/"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" className={styles.languageButton} alt="Node" /></a>

                <a href="https://code.visualstudio.com/docs"><img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" className={styles.languageButton} alt="vscode" /></a>

            </div>
            </div>
            </div>
        </main>
    )
}
