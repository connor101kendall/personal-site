import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
  
export default function Footer() {
  return (
    <footer className="Footer">
      <a className="Link" href="https://github.com/connor101kendall"><FontAwesomeIcon className="Icon" icon={faGithub}></FontAwesomeIcon></a>
      <a className="Link" href="https://www.linkedin.com/in/connor-m-kendall/"><FontAwesomeIcon className="Icon" icon={faLinkedinIn}></FontAwesomeIcon></a>
      <a className="Link" href="https://www.instagram.com/connor_kendall101/"><FontAwesomeIcon className="Icon" icon={faInstagram}></FontAwesomeIcon></a>
    </footer>
  );
}