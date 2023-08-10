import { useDispatch, useSelector } from 'react-redux';
import classes from './Catagories.module.css';
import Button from '../ui/Button';

function Catagories() {
  const { movies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();
  const setGenre = new Set();
  const genre = ['All'];

  movies.forEach((element) => {
    setGenre.add(element.genre);
  });
  setGenre.forEach((value) => genre.push(value));
  return (
    <>
      <h2 className={classes.header}>Catagories</h2>
      <div className={classes.container}>
        {genre.map((value) => (
          <Button key={`${value}`} cta={value} onClick={dispatch} />
        ))}
      </div>
    </>
  );
}

export default Catagories;
