import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';

import './ExtraProject.css'

function ExtraProject({ name, category, time, desc, url, img, alt }) {
    return (
        <React.Fragment>
            <Card>
            <Card.Body>
                <Card.Link href={url}>
                    <Card.Img variant="top" src={img} alt={alt}/>
                </Card.Link>
                <div className="card-info">
                    <Card.Title><Card.Link href={url}>{name} | {time}</Card.Link></Card.Title>
                    <Card.Text className="lower-opacity">{category}</Card.Text>
                    <Card.Text>{desc}</Card.Text>
                    <Card.Link href={url} className="highlight"><strong>Read more </strong><span role="img" aria-label="right arrow">→</span></Card.Link>
                </div>
            </Card.Body>
            </Card>
                {/* <Link to={url}>
                    <img src={img} alt={alt}></img>
                </Link>
                <div>
                    <h1>
                        <Link to={url}>{name}</Link>
                    </h1>
                    <p>{category} | {time}</p>
                    <p>{desc}</p>
                    <Link to={url} className="highlight"><strong>Read more </strong><span role="img" aria-label="right arrow">→</span></Link>
                </div>
            </div> */}
        </React.Fragment>
    );
}

export default ExtraProject;