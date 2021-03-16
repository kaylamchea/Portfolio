import React from 'react';

import '../App.css';
import Footer from '../components/Footer';
import ExtraProject from '../components/ExtraProject';

function Playground() {
    return (
        <React.Fragment>
            <div className="playground-desc">
                <h1>Additional Work</h1>
                <p>Here is a collection of other projects I have worked on!</p>
            </div>
            <div className="extra-cases">
                {/* <ExtraProject name="My Portfolio" category="Front-End Development, UX/UI Design" time=" | Winter 2020" desc="Designing and building my portfolio from scratch." img="/img/portfolio.png" url={process.env.PUBLIC_URL + '/work'}></ExtraProject> */}
                <ExtraProject name="Digital Media" category="Infographic, Illustration" desc="A collection of graphic design works." img="/img/art.png" url={process.env.PUBLIC_URL + '/playground/digital-media'}></ExtraProject>
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
            <Footer />
        </React.Fragment>
    );
}

export default Playground;