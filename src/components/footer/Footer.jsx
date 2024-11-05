import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Abdullahi Oluwafemi</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/abdullahi-oluwafemi-a91987255/" 
                className="footer__social-link"
                target='_blank'>
                    <i class='bx bxl-linkedin-square'></i>
                </a>
                <a href="https://github.com/HarYor785" 
                className="footer__social-link"
                target='_blank'>
                    <i class='bx bxl-github'></i>
                </a>
                <a href="https://wa.me/message/ZYOFIWOSI7BWB1" 
                className="footer__social-link"
                target='_blank'>
                    <i class='bx bxl-whatsapp' ></i>
                </a>
            </div>

            <span className='footer__copy'>
                &#169; Abdullahi-Oluwafemi. All rights reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer