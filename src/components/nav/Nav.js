import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <NavDesktop />
      <NavMobile />
    </nav>
  );
};
export default Nav;
