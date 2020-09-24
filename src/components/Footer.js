import React from "react";
// import React from 'react-bootstrap/Container';
import { Row, Col, Container,  } from "react-bootstrap";

function Footer(){

    return(
    <footer className="mt-5">
        <Container fluid={true}>
            <Row className="border-top justify-content-between p-3">
                <Col className="p-0" md={3} sm={12} >
                    Robert Kaylor
                </Col>
                <Col className="p-0 d-flex justify-content-end" md={3}>
                More Content
                </Col>
            </Row>
        </Container>
    </footer>
    );
}
export default Footer;