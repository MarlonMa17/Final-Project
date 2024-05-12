import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(true);

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };


  return (
    <div>

      <Modal >
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
          <Button variant="secondary" >Cancel</Button>
          <Button variant="primary">Login</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbar;
