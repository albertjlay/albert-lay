import styles from './Nav.module.css';
import logo from '../../assets/logo.svg';
import SocialList from '../social/SocialList';

const sectionList = ['home', 'about', 'skills', 'projects'];
const Nav = () => {
  return (
    <div class={styles.nav}>
      <img src={logo} alt="Logo for website"></img>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <polygon
          fill-rule="evenodd"
          points="13 11 22 11 22 13 13 13 13 22 11 22 11 13 2 13 2 11 11 11 11 2 13 2"
        />
      </svg>
      <ul>
        {sectionList.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
      <SocialList />
    </div>
  );
};

export default Nav;
