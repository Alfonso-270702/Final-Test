import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getEntriesAsync = createAsyncThunk(
  "entries/getEntriesAsync",
  async (setLoading, setError) => {
    try {
      const resp = await fetch("http://localhost:8000/entries");
      if (resp.ok) {
        const entries = await resp.json();
        setLoading(false);
        return { entries };
      }
    } catch (error) {
      setError(error);
    }
  }
);

export const entries = createSlice({
  name: "entries",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getEntriesAsync.fulfilled]: (state, action) => {
      const entries = action.payload.entries;

      // Sort the data that we get from API
      entries.sort((a, b) => a.title.localeCompare(b.title));

      // Filter the film base on release year
      const filtered = entries.filter((entry) => entry.releaseYear >= 2010);

      // Filter the film base on program type
      const movies = filtered.filter((entry) => entry.programType === "movie");
      const series = filtered.filter((entry) => entry.programType === "series");

      // Limit the film to 21
      const displayMov = movies.filter((movie, index) => index <= 20);
      const displaySer = series.filter((series, index) => index <= 20);

      return { displayMov, displaySer };
    },
  },
});

// export const {} = entries.actions;

export default entries.reducer;
