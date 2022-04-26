import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { Cards } from "../../components/Card/Cards";
import { Title } from "../../components/Header/Title";
import placeholder from "../../assets/placeholder.png";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export function Home({ loading, error }) {
  let navigate = useNavigate();
  const entries = useSelector((state) => state.entries);

  return (
    <>
      <Title />
      <Container className="home">
        {error ? (
          <>Oh no, there was an error</>
        ) : loading ? (
          <>Loading...</>
        ) : entries ? (
          <div className="d-flex">
            <Cards
              source={placeholder}
              text="Popular Series"
              onClick={() => navigate("/series")}
              cardClick
            />
            <Cards
              source={placeholder}
              text="Popular Movies"
              onClick={() => navigate("/movie")}
              cardClick
            />
          </div>
        ) : null}
      </Container>
    </>
  );
}
