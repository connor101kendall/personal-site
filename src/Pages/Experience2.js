import React from 'react';
import '../pages.css';
export default function Experience() {
    return (
        <div className='box'>
            <h3>Experience</h3>
            <hr />
        <div className='grid'>
                <a href='https://eblabs.dev.e-butterfly.org/en' className='Link'>
                <div className='wrapper'>
                    <b>Front-end Developer</b>
                    <hr />
                    <br />
                    eButterfly/WeAccelerate
                    <div className='description'>Developed UI/UX using React.js on eBLabs project and
                    collaborated with a remote dev team using GitHub, Slack, and Asana</div>
                </div>
                </a>
                <a href='http://cobalt-group199.herokuapp.com/' className='Link'>
                <div className='wrapper'>
                    <b>Pump Operator</b>
                    <hr />
                    <br />
                    Blue Beacon
                    <div className='description'>Operated high pressure pumps to clean large trucks
                    and collaborated consistently with a team to achieve quotas in a high intensity workplace</div>
                </div>
                </a>
                <a href='https://icsprogramming.ca/2020-2021/kendall1a334/' className='Link'>
                <div className='wrapper'>
                    <b>Operations Associate</b>
                    <hr />
                    <br />
                    Well.ca
                    <div className='description'>Monitored inventory levels and completed audits.
                    Efficiently picked, sorted, and packed multi-item delicate orders of up to 50+ items and 20 lbs</div>
                </div>
                </a>
                <a href='https://icsprogramming.ca/2020-2021/kendall1a334/activities2/platformer-example.php' className='Link'>
                <div className='wrapper'>
                    <b>Line Preparation Cook</b>
                    <hr />
                    <br />
                    ClubLink
                    <div className='description'>Set up and prepared cooking supplies and 
                    workstations to maximize productivity. Collaborated with servers and customers in a 
                    high stress environment to produce dishes with consistent attention to detail and quality </div>
                </div>
                </a>
        </div>
        </div>
    );
}