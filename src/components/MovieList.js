import { useSelector } from 'react-redux';
import classes from './MovieList.module.css';
import Movie from './Movie';

function MovieList() {
  const { movies, catagories } = useSelector((state) => state.movies);

  const filteredMovies = catagories === 'All'
    ? movies
    : movies.filter((movie) => movie.genre === catagories);
  return (
    <>
      <h2 className={classes.header}>{`${catagories} TV Shows`}</h2>
      <ul className={classes.listContainer}>
        {filteredMovies?.map((movie) => (
          <Movie key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </>
  );
}

export default MovieList;
