import React from "react";
import { Navbars } from "../components/Header/Navbars";
import { Footers } from "../components/Footer/Footers";

import Container from "react-bootstrap/Container";
import "./styles.css";

export function Layout({ Children, loading = false, error = "" }) {
  return (
    <div className="d-flex flex-column" style={{ height: window.innerHeight }}>
      <Navbars />
      <Container fluid className="bg-white p-0 layout">
        <Children loading={loading} error={error} />
      </Container>
      <Footers />
    </div>
  );
}
