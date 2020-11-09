import React, { useState, useEffect } from 'react';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './FunPage.css';

function FunPage() {
    const options = {
        settings: {
            disablePanzoom: true
        }
      };

    return (
        <React.Fragment>
            <div className="fun-desc">
                <h1>What I do for fun~</h1>
                <p>In addition to my professional design work, I love to exercise my creativity through other things. Here is a collection of my side projects and artworks!</p>

            </div>
            <SimpleReactLightbox>
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
            </SimpleReactLightbox>
        </React.Fragment>
    );
}

export default FunPage;