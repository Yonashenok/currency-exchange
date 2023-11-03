import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import classes from './MovieDetails.module.css';
import LeftArrow from '../assets/icon/LeftArrow';

function MovieDetails() {
  const { movies } = useSelector((state) => state.movies);
  const { movieId } = useParams();
  const selected = movies.find((movie) => movie.imdbId === movieId);
  const moviePlot = selected.plot
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '')
    .replace(/<b>/g, '')
    .replace(/<\/b>/g, '')
    .replace(/<\/i>/g, '')
    .replace(/<i>/g, '');

  return (
    <div className={classes.container}>
      <img
        className={`${classes.img} ${classes.hidden}`}
        src={selected.imageBig}
        alt={selected.title}
      />
      <div className={classes.bg} />
      <Link className={classes.Arrow} to="/">
        <button className={classes.arrowBtn} type="button">
          <LeftArrow />
          Back
        </button>
      </Link>
      <div className={classes.info}>
        <img src={selected.image} alt={selected.title} />
        <div>
          <h2 className={classes.infoHead}>{selected.title}</h2>
          <p className={classes.text}>
            {moviePlot.length > 1000
              ? moviePlot.slice(0, moviePlot.length / 2)
              : moviePlot}
          </p>
          <p className={classes.text}>{`Release: ${selected.releaseDate}`}</p>
          <p className={classes.text}>{`IMDB: ${selected.rating}`}</p>
          <p className={classes.text}>{`Duration: ${selected.runTime} min`}</p>
          <p className={classes.text}>{`Country: ${selected.country}`}</p>
          <p className={classes.text}>{`Language: ${selected.language}`}</p>
          <button className={classes.infoBtn} type="button">
            {selected.genre}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
