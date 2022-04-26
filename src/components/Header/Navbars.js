import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export function Navbars() {
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="d-flex align-items-center justify-content-between position-fixed w-100 border-bottom"
      >
        <Container>
          <Navbar.Brand to="/" as={Link}>
            Demo Streaming
          </Navbar.Brand>
          <div className="d-flex justify-content-sm-end mt-sm-0 mt-2">
            <Navbar.Brand href="">Login</Navbar.Brand>
            <Button className="ms-4" variant="dark">
              Start Your Free Trial
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
