import styles from './NavModal.module.css';
import logo from '../../assets/logo.svg';
import SocialList from '../social/SocialList';
import { Link } from 'react-scroll';

const NavModal = (props) => {
  const exitHandler = () => {
    props.closeModalHandler();
  };
  return (
    <div className={`${styles.nav} ${props.active && styles.active}`}>
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
      <ul className={styles['nav-list']}>
        {props.sectionList.map((el) => (
          <li key={el}>
            <Link activeClass="current" to={el} spy={true} smooth={true} offset={-90}>
              {el}
            </Link>
          </li>
        ))}
      </ul>
      {props.active && <SocialList />}
    </div>
  );
};

export default NavModal;
