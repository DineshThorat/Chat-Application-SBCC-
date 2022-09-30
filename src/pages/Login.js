import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <Container>
      <Row className="login_bg" style={{display:'flex', justifyContent:'center', marginLeft:'-111px', marginRight:'-110px'}}>
        {/* <Col md={5} className="login_bg" /> */}
        <Col md={7} className="d-flex flex-direction-column align-items-center justify-content-center" >

          <Form style={{ width: "80%", maxWidth: 500 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login 
            </Button>
            <div className='py-4'>
              <p className="text-center">
                Don't have an account ? <Link to="/Signup">Signup</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
