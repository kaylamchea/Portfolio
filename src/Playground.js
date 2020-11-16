import React from 'react';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Playground.css';

import ExtraProject from './ExtraProject';

function Playground() {
    const options = {
        settings: {
            disablePanzoom: true
        }
      };

    return (
        <React.Fragment>
            <div className="playground-desc">
                <h1>Additional Work</h1>
                <p>Here is a collection of other side projects I have worked on!</p>
            </div>
            <div className="extra-cases">
                <ExtraProject name="My Portfolio" category="Front-End Development, UX/UI Design" time="Winter 2020" desc="Designing and building my portfolio from scratch" img="/img/Nexus-Builders/Nexus-1.png" url={process.env.PUBLIC_URL + '/work'}></ExtraProject>
                <ExtraProject name="My Portfolio" category="Front-End Development, UX/UI Design" time="Winter 2020" desc="Designing and building my portfolio from scratch" img="/img/Nexus-Builders/Nexus-1.png" url={process.env.PUBLIC_URL + '/work'}></ExtraProject>
            </div>
            {/* <SimpleReactLightbox>
                <SRLWrapper options={options}>
                    <Container>
                        <Row>
                            <Col xs={12} md={12} lg={6}>
                                <a href="/img/infographic.png" data-attribute="SRL">
                                    <img src="/img/infographic.png" alt="Infographic of Yuzuru Hanyu" />
                                </a>
                            </Col>
                            <Col xs={12} md={12} lg={6}>
                                <a href="/img/11_11.png" data-attribute="SRL">
                                    <img src="/img/11_11.png" alt="Illustration of Girl Blowing a Dandelion" />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </SRLWrapper>
            </SimpleReactLightbox> */}
        </React.Fragment>
    );
}

export default Playground;