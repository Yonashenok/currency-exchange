import propTypes from 'prop-types';
import { updateCatagories } from '../redux/movie/movieSlice';
import classes from './Button.module.css';

function Button({ cta, onClick }) {
  if (!cta) return <></>;
  return (
    <>
      <button
        className={classes.btn}
        onClick={() => onClick(updateCatagories(cta))}
        type="button"
      >
        {cta}
      </button>
    </>
  );
}

Button.defaultProps = {
  cta: '',
  onClick: () => {},
};

Button.propTypes = {
  cta: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
