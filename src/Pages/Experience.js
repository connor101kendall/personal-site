import React from 'react';
import useCollapse from 'react-collapsed';
import './pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default function Experience() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    

    
    return (
        <div className='box'>
            <h3>Experience</h3>
            <hr />   
            <div className='accordian'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title'>
                            <h2>{item.title}</h2>
                            <button className="SeeMore" {...getToggleProps()}>
                                {isExpanded ? 'Less Details' : 'More Details'}
                            </button>
                            {/* <FontAwesomeIcon className="Icon" icon={selected === i ? 'faAngleDown' : 'faAngleUp'} /> */}
                        </div>
                        <div {...getCollapseProps()}>{item.description}</div>
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