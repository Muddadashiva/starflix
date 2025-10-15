import React, { useState } from 'react';
import '../Styles/Landing.css';
import '../Styles/Common.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Landing(props) {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (replace with API call in real project)
    if (username === 'system' && password === '12345') {
      setError('');
      handleClose();
      // Redirect to dashboard or any page
      navigate('/Home', { state: { user: username } });
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div
      className="langing-page w-100 vh-100 d-flex flex-column text-center justify-content-center align-items-center"
      style={{ backgroundImage: "url('images/login-bg.png')" }}
    >
      <img className="mb-5" src="images/logo1.png" alt="starfilx logo" width="220px" />
      <div>
        <h2 className="text-white fw-medium">Unlimited streaming of</h2>
        <h1 className="text-info fs-56 lh-lg fw-bold">movies, series, and more.</h1>
        <h4 className="text-white  ">All your favorites in one place. Start watching now.</h4>
      </div>
      <Button className="bg-blue border-0 px-5 mt-5 rounded-pill" variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="h-50 p-4">
          <Form onSubmit={handleSubmit}>
            <h1 className="text-center p-4">Login</h1>

            {error && <p className="text-danger text-center">{error}</p>}

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter UserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button className="w-100 p-2 bg-blue" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Landing;
