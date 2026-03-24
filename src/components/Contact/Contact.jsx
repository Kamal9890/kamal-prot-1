import React from 'react'
import './Contact.scss'
import { mobileNumber, email } from '../../../public/constants/contactConstants'

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact_bg" aria-hidden="true"></div>

            <div className="contact-header">
                <p className="contact-sub-heading">06. Contact</p>
                <h2>GET IN TOUCH</h2>
                <p className="contact-description">
    I’m currently open to Data Analyst and Data Science opportunities.
    Whether you have a role, a data-driven project, or just want to connect,
    feel free to reach out — I’d love to hear from you.
</p>
            </div>

            <div className="contact__container">
                <div className="contact__left">
                    <h2 className="contact__title">
    Let's build <br />
    data-driven <br />

    <span className="contact__titleAccent">
        solutions.
    </span>
</h2>

                    <p className="contact__desc">
    Actively looking for Data Analyst roles where I can work with real-world data,
    build dashboards, and generate meaningful insights using Python, SQL, and Power BI.
    If you have an opportunity or just want to connect, my inbox is always open.
</p>

                    <div className="contact__info">
                        <a href={`mailto:${email}`} className="contact__email">{email}</a>
                        <div className="contact__phone">{mobileNumber}</div>
                    </div>
                </div>

                <div className="contact__card">
                    <form className="contact__form" method="POST">

                        <input type="hidden" name="_subject" value="Portfolio Contact" />
                        <input
                            type="hidden"
                            name="_gotcha"
                            style={{ display: "none" }}
                            autoComplete="off"
                            tabIndex={-1}
                        />

                        <label className='field'>
                            <span className="field__label">Name</span>
                            <input type="text" className="field__input" name='name' required />
                        </label>

                        <label className='field'>
                            <span className="field__label">Email</span>
                            <input
                                type="email"
                                className="field__input"
                                name='email'
                                required
                                placeholder="you@gmail.com"
                            />
                        </label>

                        <label className='field'>
                            <span className="field__label">Message</span>
                            <textarea
                                className="field__textarea"
                                name='message'
                                rows={5}
                                placeholder="Reaching out about a job or internship?"
                                required
                            />
                        </label>

                        <button className='contact__btn' type='submit'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="contact__footer">
                <div className="contact__footerInner">
                    <div className="contact__copyright">
                        &copy; {new Date().getFullYear()} Disha Patel 
                    </div>

                    <div className="contact__links">
                        <a href="https://www.linkedin.com/in/kamal-pandey-a42906200/" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>

                        <a href="https://github.com/kamal9890" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact