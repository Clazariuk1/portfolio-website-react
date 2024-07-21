import { useState, useEffect } from 'react'
import styles from './App.module.scss'

export default function App() {
    return (
        <main className={styles.Portfolio}>
            <header className={styles.header}>
                <nav className={styles.scrollNav}>
                    <div className={styles.navLinks}>
                        <a className={styles.linkButton} href="#resume">Resume</a> |
                        <a className={styles.linkButton} href="#projects">Projects</a> |
                        <a className={styles.linkButton} href="#about">About</a> |
                        <a className={styles.linkButton} href="#skills">Skills</a> |
                        <a className={styles.linkButton} href="#contact">Contact</a>
                    </div>
                </nav>
            </header>

            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 id="resume">Christopher Lazariuk</h1>
                    <h2>Software Engineering, Web Design, Project Management</h2>
                    <a href="/img/lazResLatest.pdf" target="_blank">
                        <button className={styles.resumeButton} >View Resume</button>
                    </a>
                </div>
            </section>

            <section className={styles.portfolioSamples} id="projects">
                <h1>Projects</h1>
                <div className={styles.portfolioGrid}>
                    {/* Project Cards */}
                    {projects.map((project, index) => (
                        <div key={index} className={styles.portfolioCard}>
                            <div className={styles.portPicContainer}>
                                <a href={project.link} target="_blank">
                                    <img className={styles.picFile} src={project.image} alt={project.title} />
                                </a>
                            </div>
                            <div className={styles.portDescriptionCard}>
                                <div className={styles.portTitleCard}>
                                    <div className={styles.portTitle}>
                                        <a href={project.link} target="_blank">
                                            <strong>{project.title}</strong><br />{project.subtitle}
                                        </a>
                                    </div>
                                    <div className={styles.portTitle}>
                                        <a href={project.github} target="_blank">
                                            <strong>Github Repository Link</strong>
                                        </a>
                                    </div>
                                </div>
                                <ul className={styles.descriptionList}>
                                    {project.descriptions.map((desc, index) => (
                                        <li key={index} className={styles.portDescriptionText}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.bio} id="about">
                <h1>About Me...</h1>
                <div className={styles.AboutMe}>
                    <div className={styles.ProDetails}>
                        <div className={styles.ProPicContainer}>
                            <img className={styles.ProPic} src="./img/ChrisBioPic.jpg" alt="Chris Bio" />
                        </div>
                        <div className={styles.headerText}>Let's scale up something beautiful together!</div>
                    </div>
                    <div className={styles.bioBullet}>For me, building a successful proessional isn't just about churning out a few lines of code...</div>
                    <div className={styles.bioBullet}>I've led field teams on multi-million dollar productions and events...</div>
                    <div className={styles.bioBullet}>I've coordinated remote teams on projects in podcasting, software, and more...</div>
                    <div className={styles.bioBullet}> I've handled client sales and relations for multiple brands and industries...</div>
                    <div className={styles.bioBullet}>I don't just code. I create and sustain businesses, products, and communities.</div>
                    <div className={styles.bioBullet}>It's always time for the next big pipe dream!</div>

                </div>
            </section>

            <section className={styles.skills} id="skills">
                <h1>Languages and Frameworks</h1>
                <div className={styles.languageButtons}>
                    {languages.map((lang, index) => (
                        <a key={index} href={lang.link} target="_blank">
                            <img src={lang.image} className={styles.languageButton} alt={lang.name} />
                        </a>
                    ))}
                </div>
            </section>

            <section className={styles.contact} id="contact">
                <h1>Contact</h1>
                <div className={styles.contactIcons}>
                    <a href="mailto:clazariuk@gmail.com" target="_blank">
                        <img src="./img/emailIcon.jpeg" className={styles.contactPic} alt="Email" />
                    </a>
                    <a href="https://www.linkedin.com/in/christopherlazariuk/" target="_blank">
                        <img src="/img/linkedinIcon.png" className={styles.contactPic} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Clazariuk1" target="_blank">
                        <img src="/img/githubPic.png" className={styles.contactPic} alt="GitHub" />
                    </a>
                </div>
            </section>
        </main>
    )
}

const projects = [
    {
        title: "Chef's Choice",
        subtitle: "an AI/ML DRIVEN ONLINE ORDERING APP",
        link: "https://drive.google.com/drive/u/0/folders/1HUBsHjtQ5nOlOBXnnGGNK48Yb6VyDnbM",
        github: "https://github.com/Developers-Challenge/Theta",
        image: "/img/chefsChoiceLogo.png",
        descriptions: [
            "An Eight Week Intensive Hackathon for full SDLC of AI/ML-empowered app.",
            "Product Management Duties, heavy collaboration with UX/UI Research and Design",
            "Git version control management, code review/debugging, and supervision of Full Stack Development teams"
        ]
    },
    {
        title: "Momentum",
        subtitle: "an Arena Survival Game",
        link: "https://momentum.christopherlazariuk.me",
        github: "https://github.com/Clazariuk1/Dungeon-Arena-GAp1",
        image: "./img/MomentumPortPic.png",
        descriptions: [
            "An arcade-style survival game making heavy use of collision detection elements and DOM manipulation.",
            "Front-end HTML/CSS/JS Development",
            "Heavy Usage of SFX and Music"
        ]
    },
    {
        title: "Dev Dependency",
        subtitle: "an Ecommerce Website",
        link: "https://ecommerce.christopherlazariuk.me",
        github: "https://github.com/Clazariuk1/unit3-project",
        image: "/img/DevDependencyPortPic.png",
        descriptions: [
            "An ecommerce website with ordering system functionality and a multi-page layout",
            "Built with React, NodeJS, MongoDB",
            "Full stack MERN application featuring RESTful routing and full CRUD functionality"
        ]
    },
    {
        title: "Connections",
        subtitle: "a Linkedin Alternative",
        link: "https://connections.christopherlazariuk.me",
        github: "https://github.com/Clazariuk1/connection",
        image: "/img/ConnectionsScreenshot.png",
        descriptions: [
            "\"What if LinkedIn got a reboot?\"",
            "Full-Stack MERN application featuring RESTful routing and full CRUD functionality",
            "Built with React, NodeJS, and MongoDB; acting team Scrum Master"
        ]
    },
    {
        title: "Infinite Grind",
        subtitle: "a professional accountability log/tracker",
        link: "https://github.com/Clazariuk1/100-days-of-code",
        github: "https://github.com/Clazariuk1/100-days-of-code",
        image: "/img/infinityLogo.jpeg",
        descriptions: [
            "A log and file compendium of skill building challenges and daily accountability tracking.",
            "LeetCode function problems and lesson example challenges",
            "Links and annotated reference to the next big thing in my journey ahead."
        ]
    }
]

const languages = [
    { name: "React", link: "https://react.dev/", image: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
    { name: "JWT", link: "https://jwt.io/introduction", image: "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" },
    { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", image: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
    { name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5", image: "https://img.shields.io/badge/html5-E34F26?logo=html5&logoColor=white&style=for-the-badge" },
    { name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", image: "https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white&style=for-the-badge" },
    { name: "NodeJS", link: "https://nodejs.org/en", image: "https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge" },
    { name: "Python", link: "https://www.python.org/", image: "https://img.shields.io/badge/python-3670A0?logo=python&logoColor=ffdd54&style=for-the-badge" },
    { name: "MongoDB", link: "https://www.mongodb.com/", image: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white&style=for-the-badge" },
    { name: "Heroku", link: "https://www.heroku.com/home", image: "https://img.shields.io/badge/heroku-%23430098.svg?logo=heroku&logoColor=white&style=for-the-badge" },
    { name: "Postman", link: "https://www.postman.com/", image: "https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white&style=for-the-badge" }
]
