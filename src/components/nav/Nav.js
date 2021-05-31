import styles from './Nav.module.css';
import logo from '../../assets/logo.svg';
import SocialList from '../social/SocialList';

const sectionList = ['home', 'about', 'skills', 'projects'];
const Nav = () => {
  const exitHandler = () => {
    const navMenu = document.querySelector(`.${styles.nav}`);
    navMenu.style.display = 'none';
  };
  return (
    <div class={styles.nav}>
      <img src={logo} alt="Logo for website"></img>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        transform="rotate(45)"
        id="exit"
        onClick={exitHandler}
      >
        <polygon
          fill-rule="evenodd"
          points="13 11 22 11 22 13 13 13 13 22 11 22 11 13 2 13 2 11 11 11 11 2 13 2"
        />
      </svg>
      <ul className={styles.options}>
        {sectionList.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
      <SocialList className={styles.social} />
    </div>
  );
};

export default Nav;
