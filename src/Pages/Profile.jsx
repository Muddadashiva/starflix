import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "../Styles/Profile.css";
import Footer from "../Components/Footer";

const Profile = () => {
    return (
        <>

            <div className="  text-light  py-5 " style={{backgroundColor: '#020d18'}}>
                <Container>
                    <Row className="justify-content-center " >
                        {/* Sidebar */}
                        <Col md={3} className="mb-4" style={{ marginTop: '-180px' }}>
                            <Card className=" text-center profile-sidebar border-blue" style={{backgroundColor: '#020d18'}}>
                                <Card.Body>
                                    {/* Avatar */}
                                    <img
                                        src="images/user-img.png"
                                        alt="Avatar"
                                        className="rounded-circle mb-3"
                                        width="120"
                                        height="120"
                                 />
                                    {/* Change Avatar */}
                                    <Button variant="info" className=" fw-bold" >
                                        CHANGE AVATAR
                                    </Button >
                                    <div className="text-start">
                                        <Nav className="flex-column">
                                            <Nav.Link className="text-secondary small">Account Details</Nav.Link>
                                            <Nav.Link className="fw-bold text-warning mb-2">PROFILE</Nav.Link>
                                            <Nav.Link  href="#"className="fw-bold mb-2 text-white">CHANGE PASSWORD</Nav.Link>
                                            <Nav.Link href="/" className="fw-bold text-white">LOG OUT</Nav.Link>
                                        </Nav>
                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>

                        {/* Profile Form */}
                        <Col md={8} >
                            <div className="w-100 ">
                                <Card className=" border-blue p-4 profile-card text-white" style={{    backgroundColor:' #0b1a2a'}}>
                                    <Card.Body>
                                        <h4 className="fw-bold mb-4 text-white">01. PROFILE DETAILS</h4>
                                        <Form>
                                            <Row className="mb-3 " >
                                                <Col md={6} >
                                                    <Form.Group >
                                                        <Form.Label>Username</Form.Label>
                                                        <Form.Control type="text" defaultValue="DIGITIT" readOnly  />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Email Address</Form.Label>
                                                        <Form.Control type="email" defaultValue="test@digitit.com" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control type="text" defaultValue="DIGIT" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control type="text" defaultValue="IT" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Country</Form.Label>
                                                        <Form.Control type="text" className="text-white" defaultValue="Telangana" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>State</Form.Label>
                                                        <Form.Control type="text" defaultValue="Hyderabad" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Button variant="info" className="fw-bold px-4 mt-3">
                                                SAVE
                                            </Button>
                                        </Form>

                                        <hr className="my-5 border-light" />

                                        <h4 className="fw-bold mb-4">02. CHANGE PASSWORD</h4>
                                        <Form  style={{width:"100%", minWidth:"50%"}}>
                                            {/* Old Password */}
                                            <Row className="mb-3 bg-drak">
                                                <Col md={12}>
                                                    <Form.Group>
                                                        <Form.Label>Old Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Enter old password" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            {/* New Password */}
                                            <Row className="mb-3 ">
                                                <Col md={12}>
                                                    <Form.Group>
                                                        <Form.Label>New Password</Form.Label>
                                                        <Form.Control type="password"  placeholder="Enter new password"  />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            {/* Confirm New Password */}
                                            <Row className="mb-3">
                                                <Col md={12}>
                                                    <Form.Group>
                                                        <Form.Label>Confirm New Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Confirm new password" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            {/* Button */}
                                            <Button variant="info" className="fw-bold px-4 mt-3">
                                                CHANGE
                                            </Button>
                                        </Form>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>


                </Container>


            </div>
            <Footer />
        </>
    )
}

export default Profile
