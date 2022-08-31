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
                            <h3>{item.title}<FontAwesomeIcon className="Icon2" icon={selected === i ? faAngleUp : faAngleDown} /></h3>
                            <h4 className='date'>{item.date}</h4>
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
        title: 'Project Team Member',
        loc: 'WeAccelerate/Manulife/eButterfly | Remote',
        date: 'June 2022 - August 2022',
        d1: 'Received high-level training in modern web app development from Manulife Engineers',
        d2: 'Developed UI/UX for eButterfly using React.js on the eBLabs project',
    },
    {
        title: 'Pump Operator',
        loc: 'Blue Beacon | Milton, ON',
        date: 'May 2022 - August 2022',
        d1: 'Operated high pressure pumps using a variety of chemicals to clean large trucks',
        d2: 'Collaborated consistently with a team to achieve quotas in a high intensity workplace',
    },
    {
        title: 'Operations Associate',
        loc: 'Well.ca | Guelph, ON',
        date: 'June 2021 - August 2021',
        d1: 'Utilized hand-held devices and computers to monitor inventory levels and completed audits',
        d2: 'Rapidly learned new skills daily to increase efficiency and optimize material delivery processes',
    },
    {
        title: 'Line Preparation Cook',
        loc: 'ClubLink | Acton, ON',
        date: 'June 2019 - October 2020',
        d1: 'Set up and prepared cooking supplies and workstations to maximize productivity',
        d2: 'Collaborated with servers and customers in a high stress environment to produce dishes with consistent attention to detail and quality',
    },
    {
        title: 'Camp Counseller',
        loc: 'Ways of the Woods | Guelph, ON',
        date: 'July 2018 – August 2018',
        d1: 'Mentored children aged 8-14 through the basic construction of a birdhouse using handheld tools',
        d2: 'Collaborated with senior camp counselors to organize events and resolve conflicts between campers',
    },
]