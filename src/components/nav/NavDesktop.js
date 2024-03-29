import styles from './NavDesktop.module.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const NavDesktop = (props) => {
  return (
    <div className={styles['nav-desktop']}>
      <img src={logo} alt="Logo for website"></img>
      <ul className={styles['nav-list']}>
        {props.sectionList.map((el) => (
          <li key={el} className={styles['nav-options']}>
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
