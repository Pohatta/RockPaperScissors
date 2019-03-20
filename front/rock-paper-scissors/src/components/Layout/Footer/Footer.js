import React, {Fragment} from 'react';

import {Container, Row, Col} from 'reactstrap';


const footer = ( props ) => (
    <Fragment>
        <Container className="py-3 mt-3">
            <Row>
                <Col md="4">
                    <span>
                        &copy; P.Ohatta
                    </span>
                </Col>
                <Col md="4">
                    <span>
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                {/* <a href="/"><i className="fab fa-twitter"></i></a> */}
                            </li>
                        </ul>
                    </span>
                </Col>
                <Col md="4">
                    <span>
                        <ul className="list-inline quicklinks">
                            <li className="list-inline-item">
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/">Terms of Use</a>
                            </li>
                        </ul>
                    </span>
                </Col>
            </Row>
        </Container>
    </Fragment>
);

export default footer;