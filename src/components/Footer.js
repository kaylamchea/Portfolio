import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div data-aos="fade-up" data-aos-duration="1500" className="footer-text">
          <h1>Thanks for stopping by 😊</h1>
          <p>Want to chat? Shoot me a message at <a className="highlight" href="mailto: kaylamchea@hotmail.com">kaylamchea@hotmail.com!</a></p>
          <div>Designed and Coded by Kayla Chea</div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="footer-socials">
          <h2>Check out ↓</h2>
          <div className="footer-icons">
            <a className="highlight underline mr-3" href="https://www.linkedin.com/in/kaylamchea/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="highlight underline mr-3" href="https://github.com/kaylamchea" target="_blank" rel="noopener noreferrer">Github</a>
            {/* <a className="highlight underline" href="https://www.behance.net/kaylachea" target="_blank" rel="noopener noreferrer">Behance</a> */}
            {/* <a href="mailto: kaylamchea@hotmail.com">
              <img src="https://www.flaticon.com/svg/static/icons/svg/37/37572.svg" alt="letter"></img>
            </a>
            <a href="https://www.linkedin.com/in/kaylamchea/" target="_blank" rel="noopener noreferrer">
              <img src="https://www.flaticon.com/svg/static/icons/svg/25/25320.svg" alt="Linkedin logo"></img>
            </a>
            <a href="https://github.com/kaylamchea" target="_blank" rel="noopener noreferrer">
              <img src="https://www.flaticon.com/svg/static/icons/svg/733/733609.svg" alt="GitHub logo"></img>
            </a> */}
          </div>
        </div>
      </div>
    </footer>)
}


export default Footer;