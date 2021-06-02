import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import styles from './Nav.module.css';

const sectionList = ['home', 'about', 'skills', 'projects'];
const Nav = () => {
  return (
    <nav>
      <div className={styles['desktop-wrapper']}>
        <NavDesktop sectionList={sectionList} />
      </div>
      <div className={styles['mobile-wrapper']}>
        <NavMobile sectionList={sectionList} />
      </div>
    </nav>
  );
};
export default Nav;
