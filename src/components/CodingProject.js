import React from 'react';

import './CodingProject.css';

function CodingProject({ image, alt, title, desc, tags, github, website }) {
    return (
        <div className="coding-project">
            <a href={website} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={alt}></img>
            </a>
            <div className="project-text">
                {/* <p className="project-type">Web Design/Development</p> */}
                <a href={website} target="_blank" rel="noopener noreferrer"><p className="project-title">{title}</p></a>
                <p className="project-desc">{desc}</p>
                <div className="project-tags">
                    {/* <span>React</span>
                        <span>Firebase</span> */}
                    {tags.map(tag => <span key={tag}> {tag} </span>)}
                </div>
                <div className="project-links">
                    <a className="highlight" href={website} target="_blank" rel="noopener noreferrer">Website ↗︎</a>
                    <a className="highlight" href={github} target="_blank" rel="noopener noreferrer">Code ↗︎</a>
                    {/* <img src={code}></img>
                        <img src={website}></img> */}
                </div>
            </div>
        </div>
    )
}

export default CodingProject;