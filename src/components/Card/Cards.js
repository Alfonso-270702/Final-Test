import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./styles.css";

export function Cards({ source, text, onClick = () => {}, cardClick = false }) {
  return (
    <Col lg={1} className=" me-3 mb-2 p-0 card-container">
      <Image
        src={source}
        className={`card-img ${cardClick ? "card-click" : null}`}
        onClick={onClick}
      />
      <div>{text}</div>
    </Col>
  );
}
