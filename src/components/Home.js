import styles from './Home.module.css';
import SocialList from './social/SocialList';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <main>
        <div className={styles.intro}>
          <p>Hey there!</p>
          <h1>
            I'm <span>Albert.</span>
          </h1>
          <div className={styles['rolling-text']}>Student software developer</div>
        </div>
        <div className={styles.buttons}>
          <button className="active">say hi!</button>
          <button>view resume</button>
        </div>
        <div className={styles.socials}>
          <SocialList />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M17.2928932,10.2928932 L18.7071068,11.7071068 L12,18.4142136 L5.29289322,11.7071068 L6.70710678,10.2928932 L12,15.5857864 L17.2928932,10.2928932 Z M12,10.5857864 L17.2928932,5.29289322 L18.7071068,6.70710678 L12,13.4142136 L5.29289322,6.70710678 L6.70710678,5.29289322 L12,10.5857864 Z"
          />
        </svg>
      </main>
    </div>
  );
};
export default Home;
