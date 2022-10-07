import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "./Signup.css";
import botImg from '../assets/robot.avif';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  //  image upload states
  const [image, setImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 1 MB")
    }
    else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function uploadImage() {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'ml_default');
    try {
      setUploadingImage(true);
      let res = await fetch('https://api.cloudinary.com/v1_1/dc2curtvz/image/upload', {
        method: 'post',
        body: data
      })
      const urlData = await res.json();
      setUploadingImage(false);
      return urlData.url;
    } catch (error) {
      setUploadingImage(false);
      console.log(error);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    if (!image) return alert('please upload your profile picture');
    const url = await uploadImage(image);
    console.log(url);
    //signup the user
  }

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

  return (
    <Container>
      <div className="signup_bg row" style={{ display: 'flex', justifyContent: 'center', marginLeft: '-111px' }} >
        <Col md={7} className="d-flex flex-direction-column align-items-center justify-content-center" >

          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className='text-center'>Create Account</h1>
            <div className="signup-profile-pic_container">
              <img src={imagePreview || botImg} alt="#" className='signup-profile-pic' />
              <label htmlFor="image-upload" className='image-upload-label'>
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              <input type="file" id='image-upload' hidden accept="image/png, image/jpeg" onChange={validateImg} />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} value={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <div className='input-field'>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type={type} placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <span onClick={handleToggle}><Icon icon={icon} size={20}></Icon></span>
              </Form.Group>
            </div>
            <Button variant="primary" type="submit">
              {uploadingImage ? 'Signing you up...' : 'Signup'}
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
