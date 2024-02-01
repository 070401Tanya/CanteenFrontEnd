import React, { useState } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const validateForm = () => {
    let isValid = true;

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login successful');
      window.location.href = './CustomerDashboard'; 
    }
  };

  return (
    <div className="centered-box">
      <Card className="cardstyle" style={{ width: '40rem' }}>
        <Card.Body>
          <div className='cust'>
            <Form onSubmit={handleSubmit}>
              <Form.Label className='consumer'>Login Form</Form.Label>
              <br />
              <br />
              <br />
              <Row>
                <Form.Group as={Col} controlId="email">
                  <Form.Label>Email Id</Form.Label>
                  <br/>
                  <Form.Control
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br/>
                  <span className="error-message">{emailError}</span>
                </Form.Group>
                <br/>
                <Form.Group as={Col} controlId="password">
                  <Form.Label>Password</Form.Label>
                  <br/>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br/>
                  <span className="error-message">{passwordError}</span>
                </Form.Group>
              </Row>
              <br /><br />
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
