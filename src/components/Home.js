import styles from './Home.module.css';
import ReactRotatingText from 'react-rotating-text';
import SocialList from './social/SocialList';
import { scroller } from 'react-scroll';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import getWindowDimensions from '../utils/windowDimensions';

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
  const [windowDimensions] = useState(getWindowDimensions());
  const isMobileView = windowDimensions.width < 800;
  const scrollAnimation = {
    bottom: isMobileView && 'bottom',
    left: !isMobileView && 'left',
  };

  const chevronsClickHandler = () => {
    scroller.scrollTo('about', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: isMobileView ? -90 : 0,
    });
  };

  return (
    <div id="home" className={styles.wrapper}>
      <main>
        <Fade {...scrollAnimation} cascade>
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
            <a
              className="active button-style"
              href="mailto:alay@uwaterloo.ca?subject=Hey, Albert!"
              target="_blank"
              rel="noreferrer"
            >
              say hi!
            </a>
            <a className="button-style" href="resume.pdf">
              view resume
            </a>
          </div>
        </Fade>

        <Fade bottom>
          <div className={styles.socials}>
            <SocialList />
          </div>
          <div className={styles.chevrons}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={chevronsClickHandler}
            >
              <path
                fill-rule="evenodd"
                d="M17.2928932,10.2928932 L18.7071068,11.7071068 L12,18.4142136 L5.29289322,11.7071068 L6.70710678,10.2928932 L12,15.5857864 L17.2928932,10.2928932 Z M12,10.5857864 L17.2928932,5.29289322 L18.7071068,6.70710678 L12,13.4142136 L5.29289322,6.70710678 L6.70710678,5.29289322 L12,10.5857864 Z"
              />
            </svg>
          </div>
        </Fade>
      </main>
    </div>
  );
};
export default Home;
