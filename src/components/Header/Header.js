import React from "react";
import './Header.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
  
export default function Header() {
  return <footer className="Header">
      <Link className="Link" to="/"><FontAwesomeIcon className="Icon" icon={faHome}></FontAwesomeIcon></Link>
      <ul>
        <CustomLink to="/projects">PROJECTS</CustomLink>
        <CustomLink to="/experience">EXPERIENCE</CustomLink>
      </ul>
    </footer>
}

function CustomLink({ to, children,...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true })
  return(
  <li className={isActive ? "active" : ""}>
    <Link to={to}>{children}</Link>
  </li>
  )
}