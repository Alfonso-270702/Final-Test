import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { Title } from "../../components/Header/Title";
import { Cards } from "../../components/Card/Cards";

import "./styles.css";

export function Movie({ loading, error }) {
  const movies = useSelector((state) => state.entries.displayMov);

  return (
    <>
      <Title title="Movie" />
      <Container className="movie">
        {error ? (
          <>Oh no, there was an error</>
        ) : loading ? (
          <>Loading...</>
        ) : movies ? (
          <>
            <div className="d-flex justify-content-between flex-wrap">
              {movies.map((movie) => (
                <Cards
                  source={movie.images["Poster Art"].url}
                  text={movie.title}
                />
              ))}
            </div>
          </>
        ) : null}
      </Container>
    </>
  );
}
