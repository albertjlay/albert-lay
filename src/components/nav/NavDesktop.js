import styles from './NavDesktop.module.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-scroll';

const NavDesktop = (props) => {
  return (
    <div className={styles['nav-desktop']}>
      <img src={logo} alt="Logo for website"></img>
      <ul className={styles['nav-list']}>
        {props.sectionList.map((el) => (
          <li key={el}>
            <Link to={el} smooth={true}>
              {el}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavDesktop;
