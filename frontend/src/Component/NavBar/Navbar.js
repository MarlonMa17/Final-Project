import React, { useState, useEffect } from 'react';
import Navbutton from "./Navbutton"; 
import { Modal, Button, Form } from 'react-bootstrap';
import "./Navbar.css"; 

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPasword] = useState(''); 
  const [shouldLogin, setShouldLogin] = useState(false);
  const [shouldCreateAccount, setShouldCreateAccount] = useState(false); 



  // Check to see if the connection is established, run "docker-compose up --build"
  // and navigate to the local host environment. 


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
        .then((response) => {                       // Bad error check 4xx error
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Process response as JSON
        })
        .then((data) => {                         // Ok check 2XX 
          alert(JSON.stringify(data, null, 2));
          setShouldLogin(false);
        })
        .catch((error) => {
          console.error(error);
          setShouldLogin(false); // Reset flag after error handling
        });
    }
  }, [shouldLogin]);          // once a user clicks the locking infomation, the post request will be sent

  const handleLoginClick = () => {
    setShowLoginModal(false); // Close modal when login is clicked
    setShouldLogin(true); // This triggers the `useEffect`
  };

  const handleClick = (name) => {
    if (name === 'Login') {
      setShowLoginModal(true); 
    } else if(name ==="Create Account"){
      console.log("Here I am") 
      setShouldCreateAccount(true); 
    }
  };

  return (
    <div className="navbar-container">
  
      <Navbutton name="Login" onClick={() => handleClick('Login')} />
      <Navbutton name="Create Account" onClick={() => handleClick('Create Account')} />
      {/* Modal to prompt for username and password 
          The modal will only show once the users click create acount or login
    
      */}

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
                value={username} // use `value` to update state with the input
                onChange={(e) => setUsername(e.target.value)} // update the state when input changes
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password} // same as above
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
                value={username} // use `value` to update state with the input
                onChange={(e) => setUsername(e.target.value)} // update the state when input changes
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
                onChange={(e) => setConfirmPasword(e.target.value)} 
              />
            </Form.Group>
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLoginModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleLoginClick}>Create Account</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Navbar;