import React from 'react';
import {Row, Col, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';
function Home() {
  return <Row className="home_bg">
    <Col md={6} className="d-flex flex-direction-column justify-content-center" style={{marginTop:'80px', marginLeft:'50px'}}>
        <div>
          <h1>Share some words with your friends</h1>
          <p>Chat App let's connect to the world</p>
          <LinkContainer to="/chat">
            <Button variant="success">Get Started <i className="fas fa-comments home-message-icon"></i></Button>
          </LinkContainer>
        </div>
    </Col>
    {/* <Col md={6} className="home_bg">
    </Col> */}
  </Row>
}

export default Home;
