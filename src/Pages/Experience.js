import React from 'react';
import { useState } from 'react';
import './pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default function Experience() {
    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if (selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }

    
    return (
        <div className='box'>
            <h2>Experience</h2>
            <hr />   
            <div className='accordian'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h3>{item.title}</h3>
                            <FontAwesomeIcon className="Icon" icon={selected === i ? faAngleUp : faAngleDown} />
                        </div>
                        <p className='loc'>{item.loc}</p>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <ul>
                                <li>{item.d1}</li>
                                <li>{item.d2}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const data = [
    {
        title: 'Front-end Developer',
        loc: 'WeAccelerate/eButterfly | Remote',
        d1: 'Developed UI/UX using React.js on eBLabs project',
        d2: 'Collaborated with a remote dev team using GitHub, Slack, and Asana',
    },
    {
        title: 'Pump Operator',
        loc: 'Blue Beacon | Milton, ON',
        d1: 'Operated high pressure pumps using a variety of chemicals to clean large trucks',
        d2: 'Collaborated consistently with a team to achieve quotas in a high intensity workplace',
    },
    {
        title: 'Operations Associate',
        loc: 'Well.ca | Guelph, ON',
        d1: 'Utilized hand-held devices and computers to monitor inventory levels and completed audits',
        d2: 'Rapidly learned new skills daily to increase efficiency and optimize material delivery processes',
    },
    {
        title: 'Line Preparation Cook',
        loc: 'ClubLink | Acton, ON',
        d1: 'Set up and prepared cooking supplies and workstations to maximize productivity',
        d2: 'Collaborated with servers and customers in a high stress environment to produce dishes with consistent attention to detail and quality',
    },
    {
        title: 'Camp Counseller',
        loc: 'Ways of the Woods | Guelph, ON',
        d1: 'Mentored children aged 8-14 through the basic construction of a birdhouse using handheld tools',
        d2: 'Collaborated with senior camp counselors to organize events and resolve conflicts between campers',
    },
]