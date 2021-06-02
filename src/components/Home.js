import styles from './Home.module.css';
import ReactRotatingText from 'react-rotating-text';
import SocialList from './social/SocialList';
import { scroller } from 'react-scroll';

const rotatingTextData = [
  'Student software engineer',
  'UW CS student',
  'Rice lover',
  'Science nerd',
  'Part-time gamer',
  'Avid MCU fan',
  'Travel addict (on pause)',
];

const Home = () => {
  const chevronsClickHandler = () => {
    scroller.scrollTo('about', { duration: 1500, delay: 100, smooth: true, offset: -90 });
  };

  return (
    <div id="home" className={styles.wrapper}>
      <main>
        <div className={styles.intro}>
          <p>Hey there!</p>
          <h1>
            I'm <span>Albert.</span>
          </h1>
          <div className={styles['rotating-text-wrapper']}>
            <ReactRotatingText item items={rotatingTextData} />
          </div>
        </div>
        <div className={styles.buttons}>
          <button className="active">say hi!</button>
          <button>view resume</button>
        </div>
        <div className={styles.socials}>
          <SocialList />
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={chevronsClickHandler}>
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
