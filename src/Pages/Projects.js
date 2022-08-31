import React from 'react';
import './pages.css';


export default function Projects() {
    return (
      <div className='box'>
        <h2>Projects</h2>
            <hr />
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className='sizer'><img className='preview' alt="ebLabs" src="img/ebLabs.png"></img></div>
      <div class="carousel-caption d-none d-md-block">
      <a href='https://eblabs.dev.e-butterfly.org/en' className='Link'><h2>eBLabs</h2></a>
        <h5>React.js, Bootstrap, FastAPI, HTML/CSS</h5>
        <p>
        ebLabs is a a web-based application 
        that allows users to create and interact with resources
        </p>
      </div>
    </div>
    <div class="carousel-item">
    <div className='sizer'><img className='preview' alt="CobaltHardware" src="img/cobalthardware.png"></img></div>
      <div class="carousel-caption d-none d-md-block">
      <a href='http://cobalt-group199.herokuapp.com/' className='Link'><h2>Cobalt Hardware</h2></a>
        <h5>React.js, RestAPI, HTML/CSS</h5>
        <p>
        Cobalt Hardware is a mock hardware store website 
        to showcase React elements and Rest API
        </p>
      </div>
    </div>
    <div class="carousel-item">
    <div className='sizer'><img className='preview' alt="ICS4U" src="img/ics4u.png"></img></div>
      <div class="carousel-caption d-none d-md-block">
      <a href='https://icsprogramming.ca/2020-2021/kendall1a334/' className='Link'><h2>ICS4U Website</h2></a>
        <h5>PHP, MySQL, HTML/CSS</h5>
        <p>
        ICS4U site is a web-based application to showcase coursework
        </p>
      </div>
    </div>
    <div class="carousel-item">
    <div className='sizer'><img className='preview' alt="Robobug" src="img/robobug.png"></img></div>
      <div class="carousel-caption d-none d-md-block">
      <a href='https://icsprogramming.ca/2020-2021/kendall1a334/activities2/platformer-example.php' className='Link'><h2>Robobug</h2></a>
        <h5>PHP, MySQL, HTML/CSS</h5>
        <p>
        Robobug is a Platformer game designed using PHP and Javascript
        </p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
        );
    }