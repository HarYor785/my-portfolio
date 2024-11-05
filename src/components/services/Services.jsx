import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) =>{
        setToggleState(index)
    }
  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">
            What i offer
        </span>

        <div className="services__container container grid">

            <div className="services__content">
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className="services__title">
                        Full-Stack <br/> Web & Mobile <br /> Developer
                    </h3>
                </div>

                <span className="services__button" onClick={()=>{
                    toggleTab(1)
                }}>
                    View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 1 ? `services__modal
                active-modal` : 'services__modal'}>
                    <div className="services__modal-content">
                        <i className='uil uil-times services__modal-close'
                        onClick={()=>{
                            toggleTab(0)
                        }}></i>
                        <h3 className="services__modal-title">
                            Web Developer
                        </h3>
                        <p className="services__modal-description">
                        Service with more than 3 years of experience.
                        Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Develop visually appealing and intuitive user interfaces for 
                                websites and applications.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Implement responsive design to ensure optimal user experience 
                                    across devices.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Build the server-side logic and functionality that powers the website 
                                or web application.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Work with databases to store and retrieve data, ensuring seamless interactions 
                                between the user interface and the server.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Ensure the integration of various components for a cohesive and functional web 
                                application.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className='uil uil-arrow services__icon'></i>
                    <h3 className="services__title">
                        UI/UX <br /> Designer
                    </h3>
                </div>

                <span className="services__button" onClick={()=>{
                    toggleTab(2)
                }}>
                    View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 2 ? `services__modal
                active-modal` : 'services__modal'}>
                    <div className="services__modal-content">
                        <i className='uil uil-times services__modal-close'
                        onClick={()=>{
                            toggleTab(0)
                        }}></i>
                        <h3 className="services__modal-title">
                            UI/UX Designer
                        </h3>
                        <p className="services__modal-description">
                        Service with more than 3 years of experience.
                        Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Conduct user research to understand audience needs and 
                                    preferences
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Implement user-centric design principles to enhance overall 
                                    usability.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Create wireframes and interactive prototypes to visualize and 
                                    iterate the user experience.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Incorporate feedback and insights from testing into the design process.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Design visually appealing user interfaces using color schemes, typography, 
                                    and imagery.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Ensure consistency and brand adherence across the visual elements.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className='uil uil-edit services__icon'></i>
                    <h3 className="services__title">
                        Graphic <br /> Designer
                    </h3>
                </div>

                <span className="services__button" onClick={()=>{
                    toggleTab(3)
                }}>
                    View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 3 ? `services__modal
                active-modal` : 'services__modal'}>
                    <div className="services__modal-content">
                        <i className='uil uil-times services__modal-close'
                        onClick={()=>{
                            toggleTab(0)
                        }}></i>
                        <h3 className="services__modal-title">
                            Graphic Designer
                        </h3>
                        <p className="services__modal-description">
                        Service with more than 3 years of experience.
                        Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Develop and refine brand identities through the creation of 
                                    logos and visual elements.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Ensure consistent representation of brand across various mediums.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Create engaging content for brochures, posters, banners, and digital platforms.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Create original illustrations and edit images to enhance visual appeal.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Maintain attention to detail and aesthetics in all graphic elements
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services