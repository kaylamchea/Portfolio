import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './DigitalMedia.css'

function DigitalMedia() {
    const options = {
        settings: {
            disablePanzoom: true
        }
    };

    return (
        <React.Fragment>
            <h1 id="digital-media">Digital Media</h1>
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

export default DigitalMedia;