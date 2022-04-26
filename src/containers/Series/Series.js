import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { Title } from "../../components/Header/Title";
import { Cards } from "../../components/Card/Cards";

import "./styles.css";

export function Series({ loading, error }) {
  const series = useSelector((state) => state.entries.displaySer);

  return (
    <>
      <Title title="Series" />
      <Container className="series">
        {error ? (
          <>Oh no, there was an error</>
        ) : loading ? (
          <>Loading...</>
        ) : series ? (
          <>
            <div className="d-flex justify-content-between flex-wrap">
              {series.map((film) => (
                <Cards
                  source={film.images["Poster Art"].url}
                  text={film.title}
                />
              ))}
            </div>
          </>
        ) : null}
      </Container>
    </>
  );
}
