import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="Container">
          <img className="Image" alt="Portrait" src="img/Portrait.png"></img>
          <div>
          <h3>I'M CONNOR KENDALL</h3>
          <h4>A Biomedical Engineering student at the University Of Waterloo</h4>
          This is a personal site I created to showcase some of my skills! 
          <br></br>
          <br></br>
          Feel free to have a look around and 
          check out my past experiences with the NavBar at the top. You will also find my socials at the bottom.
          Don't hesitate to send me an&nbsp;
          <a className='Link' href="mailto:connor101kendall@gmail.com?subject=Website Contact">email</a> 
          &nbsp;to discuss any opportunities!
          <br></br>
          
          <a href="img/Connor_Kendall_Resume.pdf" download="Connor_Kendall_Resume.pdf">
         <button className='Button' type="button">DOWNLOAD MY RESUME</button>
         </a>
          </div>
      </div>
    )
}