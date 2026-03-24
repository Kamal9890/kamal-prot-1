import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import "./Experience.scss"

gsap.registerPlugin(ScrollTrigger)

const TIMELINE = [
  {
    date: "2022 - 2026",
    title: "B.Tech — Computer Science",
    org: "University Institute of Technology, Barkatullah University, Bhopal",
    desc: "Pursuing Bachelor of Technology with CGPA 7.53. Building strong foundation in programming, data science, and software development."
  },
  {
    date: "Nov 2024 - Jul 2025",
    title: "Python with Data Science & MySQL",
    org: "Sheryians Coding School",
    desc: "Completed intensive training in Python, Data Science, and MySQL. Built real-world projects and gained hands-on experience in data analysis and machine learning."
  },
  {
    date: "Sep 2025",
    title: "Data Analytics Portal Project",
    org: "Self Project",
    desc: "Developed a Streamlit-based data analytics web app with real-time visualizations using Plotly and Pandas."
  },
  {
    date: "Aug 2025",
    title: "Car Price Prediction (ML Project)",
    org: "Self Project",
    desc: "Built a machine learning model using Random Forest for predicting car prices with data preprocessing and deployment."
  },
  {
    date: "Sep 2024",
    title: "Power BI Sales Dashboard",
    org: "Self Project",
    desc: "Created an interactive dashboard with KPIs, DAX formulas, and data visualization for business insights."
  },
  {
    date: "2021 - 2022",
    title: "Class 12th (Higher Secondary)",
    org: "MP Board, Maihar",
    desc: "Completed higher secondary education with 84%."
  }
];

export default function Experience() {

  const sectionRef = useRef(null)
  const timelineRef = useRef(null)
  const lineFillRef = useRef(null)

  useGSAP(() => {

    const items = gsap.utils.toArray(".tl-item", timelineRef.current)

    items.forEach((item) => {
      const card = item.querySelector(".tl-card")
      const dot = item.querySelector(".tl-dot")

      // safer initial state
      gsap.set(card, { opacity: 0.6, y: 40 })
      gsap.set(dot, { scale: 0.8, opacity: 0.6 })
    })

    gsap.set(lineFillRef.current, {
      scaleY: 0,
      transformOrigin: "top center"
    })

    gsap.to(lineFillRef.current, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 60%",
        scrub: true
      }
    })

    items.forEach((item) => {

      const card = item.querySelector(".tl-card")
      const dot = item.querySelector(".tl-dot")

      ScrollTrigger.create({
        trigger: item,
        start: "top 75%",

        onEnter: () => {

          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
          })

          gsap.to(dot, {
            scale: 1,
            opacity: 1,
            duration: 0.4
          })

          item.classList.add("is-active")
        },

        onLeaveBack: () => {

          gsap.to(card, {
            opacity: 0.6,
            y: 40,
            duration: 0.5
          })

          gsap.to(dot, {
            scale: 0.8,
            opacity: 0.6
          })

          item.classList.remove("is-active")
        }

      })

    })

  }, { scope: sectionRef })

  return (

    <section className="journey" id="timeline" ref={sectionRef}>

      <div className="journey-hero">
        <p className="journey-kicker">02.JOURNEY</p>
        <h1 className="journey-title">Professional Path</h1>

        <p className="journey-sub">
          A snapshot of my professional journey showcasing my education and development experience.
        </p>
      </div>

      <div className="timeline" ref={timelineRef}>

        <div className="timeline-line">
          <span className="timeline-line-bg"></span>
          <span className="timeline-line-fill" ref={lineFillRef}></span>
        </div>

        {TIMELINE.map((t, i) => {

          const side = i % 2 === 0 ? "left" : "right"

          return (

            <div className={`tl-item ${side}`} key={i}>

              <div className="tl-side tl-left">
                {side === "left" && (

                  <article className="tl-card">
                    <div className="tl-date">{t.date}</div>
                    <h3 className="tl-title">{t.title}</h3>
                    <p className="tl-org">{t.org}</p>
                    <p className="tl-desc">{t.desc}</p>
                  </article>

                )}
              </div>

              <div className="tl-center">
                <span className="tl-dot"></span>
              </div>

              <div className="tl-side tl-right">
                {side === "right" && (

                  <article className="tl-card">
                    <div className="tl-date">{t.date}</div>
                    <h3 className="tl-title">{t.title}</h3>
                    <p className="tl-org">{t.org}</p>
                    <p className="tl-desc">{t.desc}</p>
                  </article>

                )}
              </div>

            </div>

          )
        })}

      </div>

    </section>

  )
}