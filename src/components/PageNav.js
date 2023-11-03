import { Link } from 'react-router-dom';
import GearTooth from '../assets/icon/GearTooth';
import popcorn from '../assets/img/popcorn.png';
import Mic from '../assets/icon/Mic';
import classes from './PageNav.module.css';

function PageNav() {
  return (
    <header className={classes.pageContainer}>
      <h2 className={classes.logo}>
        <img src={popcorn} alt="pop" />
        <Link to="/">PopCornflix</Link>
      </h2>
      <div className={classes.icon}>
        <Mic />
        <GearTooth />
      </div>
    </header>
  );
}

export default PageNav;
