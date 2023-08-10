import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  catagories: 'All',
  isLoading: false,
  status: 'idle',
  error: 'no',
};

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
  const res = await fetch('https://api.tvmaze.com/show');

  const data = await res.json();
  return data.slice(40, 200);
});

const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    updateCatagories(state, action) {
      state.catagories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'Loading...';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.map((movie) => ({
          runTime: movie.runtime,
          releaseDate: movie.premiered,
          title: movie.name,
          rating: movie.rating.average,
          imdbId: movie.externals.imdb,
          image: movie.image.medium,
          genre: movie.genres[movie.genres.length - 1] || 'genre',
          country: movie.network?.country.name || 'N/A',
          plot: movie.summary,
          imageBig: movie.image.original,
          language: movie.language,
        }));
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = 'something went wrong';
      });
  },
});

export const { updateCatagories } = moviesSlice.actions;
export default moviesSlice.reducer;
