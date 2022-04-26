import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import facebookIcon from "../../assets/facebook-white.svg";
import twitterIcon from "../../assets/twitter-white.svg";
import instagramIcon from "../../assets/instagram-white.svg";
import appstore from "../../assets/app-store.svg";
import playstore from "../../assets/play-store.svg";
import windowsstore from "../../assets/windows-store.svg";

import "./styles.css";

export function Footers() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-5 footer">
        <Container>
          <Row className="flex-column d-flex justify-content-star w-100 m-0">
            <Navbar.Text>
              Home | Terms and Conditions | Privacy Policy | Collection
              Statement | Help | Managage Account
            </Navbar.Text>
            <Navbar.Text>
              Copyright 2016 DEMO Streaming. All Rights Reserved
            </Navbar.Text>
            <Row className="d-flex mt-3 align-items-center m-0 p-0">
              <Col>
                <img
                  className="icon-img me-3"
                  src={facebookIcon}
                  alt="facebook"
                />
                <img
                  className="icon-img me-3"
                  src={twitterIcon}
                  alt="twitter"
                />
                <img className="icon-img" src={instagramIcon} alt="instagram" />
              </Col>
              <Col className="d-flex justify-content-lg-end flex-wrap">
                <img
                  className="store-img me-2"
                  src={appstore}
                  alt="app store"
                />
                <img
                  className="store-img me-2 mt-sm-0 mt-2"
                  src={playstore}
                  alt="play store"
                />
                <img
                  className="microsoft-img mt-lg-0 mt-2"
                  src={windowsstore}
                  alt="windows store"
                />
              </Col>
            </Row>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
