import React, { useState } from 'react'
import './qualifications.css'

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) =>{
        setToggleState(index)
    }
  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section_title">Qualifications</h2>
        <span className="section_subtitle">
            My personal journey
        </span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div 
            onClick={()=>toggleTab(1)}
              className={
                toggleState === 1 
                  ? `qualification__button qualification__active 
                  button-flex` 
                  : "qualification__button button-flex"
              }
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div 
            onClick={()=>toggleTab(2)}
              className={
                toggleState === 2 
                  ? `qualification__button qualification__active 
                  button-flex` 
                  : "qualification__button button-flex"
              }
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>

          <div className="qualification__sections">

              {/* EDUCATION */}
            <div 
              className={
                toggleState === 1 
                  ? `qualification__content 
                  qualification__content-active`
                  : `qualification__content`
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Meta Profesional Frontend Developer
                  </h3>
                  <span className="qualification__subtitle">
                    Cousera - Meta
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Electrical / Electronics Engineer
                  </h3>
                  <span className="qualification__subtitle">
                    National Diploma - Ogun State Institute of Technology
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2020 - 2022
                  </div>
                </div>
              </div>

            </div>

              {/* EXPERIENCE */}
            <div className={
                toggleState === 2
                  ? `qualification__content 
                  qualification__content-active`
                  : `qualification__content`
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    IT Officer/Web Developer
                  </h3>
                  <span className="qualification__subtitle">
                    Aspom Travel Agency - Lagos, Nigeria.
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    Jan 2024 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Intern - Web Development
                  </h3>
                  <span className="qualification__subtitle">
                    Oasis Infobyte - India
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    Jan 2024 - March 2024
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        </div>
    </section>
  )
}

export default Qualifications