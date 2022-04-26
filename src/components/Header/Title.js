import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export function Title({ title = "Titles" }) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="d-flex align-items-center justify-content-between position-fixed w-100 border-bottom"
    >
      <Container>
        <Navbar.Brand as={"h4"}>Popular {title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
