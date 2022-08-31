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
            <h3>Experience</h3>
            <hr />   
            <div className='accordian'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h2>{item.title}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                            <FontAwesomeIcon className="Icon" icon={selected === i ? 'faAngleDown' : 'faAngleUp'} />
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>{item.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const data = [
    {
        title: 'Front-end Developer',
        description: 'Developed UI/UX using React.js on eBLabs project and collaborated with a remote dev team using GitHub, Slack, and Asana'
    },
    {
        title: 'Front-end Developer',
        description: 'Developed UI/UX using React.js on eBLabs project and collaborated with a remote dev team using GitHub, Slack, and Asana'
    },
    {
        title: 'Front-end Developer',
        description: 'Developed UI/UX using React.js on eBLabs project and collaborated with a remote dev team using GitHub, Slack, and Asana'
    },
    {
        title: 'Front-end Developer',
        description: 'Developed UI/UX using React.js on eBLabs project and collaborated with a remote dev team using GitHub, Slack, and Asana'
    },
]