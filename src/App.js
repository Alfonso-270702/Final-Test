import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getEntriesAsync } from "./redux/movieSlice";

import { Home } from "./containers/Home/Home";
import { Movie } from "./containers/Movie/Movie";
import { Series } from "./containers/Series/Series";
import { Layout } from "./Layout/Layout";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntriesAsync(setLoading, setError));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout Children={Home} loading={loading} error={error} />}
        />
        <Route
          path="/movie"
          element={<Layout Children={Movie} loading={loading} error={error} />}
        />
        <Route
          path="/series"
          element={<Layout Children={Series} loading={loading} error={error} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
