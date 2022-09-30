import React from 'react';
import { Col, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "./Signup.css";
import botImg from '../assets/robot.avif';

function validateImg(){

}

function Signup() {
  return (
    <Container>
      <div className="signup_bg row" style={{display:'flex', justifyContent:'center', marginLeft:'-111px'}} >
        <Col md={7} className="d-flex flex-direction-column align-items-center justify-content-center" >

          <Form style={{ width: "80%", maxWidth: 500 }}>
            <h1 className='text-center'>Create Account</h1>
            <div className="signup-profile-pic_container">
              <img src={botImg} alt="#" className='signup-profile-pic' />
              <label htmlFor="image-upload" className='image-upload-label'>
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              <input type="file" id='image-upload' hidden accept="image/png, image/jpeg" onChange={validateImg} />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
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
              Create Account
            </Button>
            <div className='py-4'>
              <p className="text-center">
                Already have an account ? <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        {/* <Col md={5} className="signup_bg" /> */}

      </div>
    </Container>
  );
}

export default Signup;
