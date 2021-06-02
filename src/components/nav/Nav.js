import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import styles from './Nav.module.css';

const sectionList = ['home', 'about', 'skills', 'projects'];
const Nav = () => {
  return (
    <nav>
      <NavDesktop sectionList={sectionList} />
      <NavMobile sectionList={sectionList} />
    </nav>
  );
};
export default Nav;
