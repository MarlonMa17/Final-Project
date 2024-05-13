import React, { useState, useEffect } from 'react';
import Navbutton from "./Navbutton"; 
import { Modal, Button, Form } from 'react-bootstrap';
import "./Navbar.css"; 

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [shouldLogin, setShouldLogin] = useState(false);
  const [shouldCreateAccount, setShouldCreateAccount] = useState(false); 

  const [loginUserName, setLoginUserName] = useState('Login'); 
  const [createAccount, setCreateAccount] = useState('Create Account')

  // Effect to handle login request
  useEffect(() => {
    if (shouldLogin) {
      const loginData = {
        username: username,
        password: password,
      };
      fetch('http://localhost:80', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          alert(JSON.stringify(data, null, 2)["message"]); // Display the message in an alert

          // Set the login user name based on the received data
          setLoginUserName(data.username);
          setCreateAccount(''); 
          setShouldLogin(false);
        })
        .catch((error) => {
          console.error(error);
          setShouldLogin(false);
        });
    }
  }, [shouldLogin]);          

  // Handler for login button click
  const handleLoginClick = () => {
    setShowLoginModal(false);
    setShouldLogin(true);
  };

  // Handler for button clicks
  const handleClick = (name) => {
    if (name === 'Login') {
      setShowLoginModal(true); 
    } else if(name ==="Create Account"){
      setShouldCreateAccount(true); 
    }
  };

  return (
    <div className="navbar-container">
      {/* Button to trigger login modal */}
      <Navbutton name={loginUserName} onClick={() => handleClick('Login')} />
      <Navbutton name= {createAccount} onClick={() => handleClick('Create Account')} />

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLoginModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleLoginClick}>Login</Button>
        </Modal.Footer>
      </Modal>

      {/* Create Account Modal */}
      <Modal show={shouldCreateAccount} onHide={() => setShouldCreateAccount(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() =>setConfirmPassword(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleLoginClick}>Create Account</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbar;
