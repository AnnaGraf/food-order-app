import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.mainImage}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;
