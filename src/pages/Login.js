import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Login.css';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    }
    else {
      setIcon(eyeOff);
      setType('password');
    }
  }

  function handleLogin(e) {

    e.preventDefault();
  }



  return (
    <Container>
      <Row className="login_bg" style={{ display: 'flex', justifyContent: 'center', marginLeft: '-111px', marginRight: '-110px' }}>
        {/* <Col md={5} className="login_bg" /> */}
        <Col md={7} className="d-flex flex-direction-column align-items-center justify-content-center" >

          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              {/* <Form.Control type="email" placeholder="Enter email" /> */}
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              {/* <Form.Control type="password" placeholder="Password" /> */}
              <div className='input-field'>
                {/* <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required   /> */}
                <Form.Control type={type} placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                <span onClick={handleToggle}><Icon icon={icon} size={20}></Icon></span>

              </div>
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
