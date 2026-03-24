import React from 'react'
import './Projects.scss'

const PROJECTS = [
    {
        title: "Consoleflare Data Analytics Portal",
        desc: "Built an interactive data analytics web app using Streamlit to analyze CSV/Excel datasets. Implemented real-time visualizations and insights using Plotly and Pandas.",
        image: "/assets/images/common/data-analytics.png",
        tags: ["Python", "Pandas", "Streamlit", "Plotly", "Data Analysis"],
        links: [
            { label: "Live Demo", href: "https://my-data-analytics.streamlit.app/", icon: "↗" },
            { label: "Source Code", href: "https://github.com/patelji97/my-data-analytics", icon: "💻" }
        ]
    },

    {
        title: "Car Price Prediction (Machine Learning)",
        desc: "Developed a machine learning model using Random Forest Regressor to predict car prices based on multiple features. Performed data cleaning, feature engineering, and deployed using Streamlit.",
        image: "/assets/images/common/ml-project.png",
        tags: ["Python", "Machine Learning", "Pandas", "NumPy", "Streamlit"],
        links: [
            { label: "Live Demo", href: "https://random-forest-project.streamlit.app/", icon: "↗" },
            { label: "Source Code", href: "https://github.com/patelji97/Random-Forest-Project", icon: "💻" }
        ]
    },

    {
        title: "Power BI Sales Dashboard",
        desc: "Created a fully interactive Power BI dashboard with dynamic KPIs, DAX calculations, and data visualization for analyzing business performance.",
        image: "/assets/images/common/powerbi-dashboard.png",
        tags: ["Power BI", "DAX", "Data Visualization", "Business Intelligence"],
        links: [
            { label: "Project Details", href: "https://github.com/patelji97/Random-Forest-Project", icon: "💻" }
        ]
    }
];



export default function Projects() {

    return (
        <section className="projects" id="projects">
            <div className="sectionHeader">
                <p className="sectionKicker">04. PROJECTS</p>
                <h2 className="sectionTitle">PROJECTS</h2>
                <p className="sectionSub">
                    Here are some of my projects that showcase my skills and experience in web development.
                    Each project demonstrates my ability to create responsive, user-friendly, and visually appealing applications using modern technologies and best practices.
                    Feel free to explore the live demos and source code to see how I bring ideas to life through code.
                </p>
            </div>
            <div className="projectsGrid">
                {
                    PROJECTS.map((p) => {
                        return (
                            <article className="projectsCard" key={p.title}>
                            <div className="projectMedia">
                                <img src={p.image} alt="" loading='lazy' />
                                <div className="projectMediaOverlay"></div>
                            </div>

                            <div className="projectBody">
                                <h3 className="projectTitle">{p.title}</h3>
                                <p className="projectDesc">{p.desc}</p>

                                <div className="projectTags">
                                    {p.tags.map((t) => (
                                        <span className="tag" key={t}>
                                            {t}

                                        </span>
                                    ))}
                                </div>

                                <div className="projectFooter">
                                    {p.links.map((l) => (
                                        <a href={l.href} target='_blank' rel='norreferrer' className='projectLink' key={l.label}
                                        >
                                            <span className="icon"> {l.icon}</span>
                                            {l.label}
                                        </a>


                                    ))}
                                </div>
                            </div>
                        </article>
                        )

                    })
                }
            </div>
        </section>
    )

}