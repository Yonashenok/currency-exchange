import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import classes from './Movie.module.css';
import RightArrow from '../assets/icon/RightArrow';

function Movie({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbId}`}>
      <div className={classes.container}>
        <div className={classes.icon}>
          <RightArrow />
        </div>
        <img className={classes.img} src={movie.image} alt={movie.title} />
        <div className={classes.info}>
          <p className={classes.title}>{movie.title}</p>
          <p className={classes.year}>
            {`${movie.releaseDate} - ${movie.runTime}min`}
          </p>
          <p className={classes.rating}>{`Rating / ${movie.rating}`}</p>
          <button className={classes.movieBtn} type="button">
            {movie.genre}
          </button>
        </div>
      </div>
    </Link>
  );
}

Movie.defaultProps = {
  movie: {
    imdbId: '',
    image: '',
    title: '',
    releaseDate: '',
    genre: '',
    id: '',
    rating: 5,
    runTime: 60,
  },
};

Movie.propTypes = {
  movie: propTypes.shape({
    imdbId: propTypes.string,
    image: propTypes.string,
    title: propTypes.string,
    releaseDate: propTypes.string,
    genre: propTypes.string,
    id: propTypes.string,
    rating: propTypes.number,
    runTime: propTypes.number,
  }),
};

export default Movie;
