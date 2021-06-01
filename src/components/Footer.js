import styles from './Footer.module.css';
import SocialList from './social/SocialList';

const Footer = () => {
  return (
    <footer>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill-rule="evenodd"
          d="M12,12.4142136 L6.70710678,17.7071068 L5.29289322,16.2928932 L12,9.58578644 L18.7071068,16.2928932 L17.2928932,17.7071068 L12,12.4142136 Z M6.70710678,12.7071068 L5.29289322,11.2928932 L12,4.58578644 L18.7071068,11.2928932 L17.2928932,12.7071068 L12,7.41421356 L6.70710678,12.7071068 Z"
        />
      </svg>
      <div className={styles.socials}>
        <SocialList />
      </div>
      <div className={styles.copyright}>© 2021 Albert Lay | All rights reserved.</div>
    </footer>
  );
};
export default Footer;
