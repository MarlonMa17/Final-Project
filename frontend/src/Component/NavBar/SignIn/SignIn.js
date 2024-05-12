import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SignIn = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleShowModal = () => {
    setShowLoginModal(true);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShowModal}>
        Sign In
      </Button>

      <Modal show={showLoginModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleCloseModal}>Login</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignIn;
