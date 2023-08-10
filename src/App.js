import React, { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import './App.css';
import { fetchMovies } from './redux/movie/movieSlice';
import MovieDetails from './components/MovieDetails';
import PageNav from './components/PageNav';

function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <>
      <PageNav />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<div>page not found it goes here</div>} />
      </Route>
    </Routes>
  );
}

export default App;
