import polaroid from '../assets/images/polaroid.webp';
import styles from './About.module.scss';
import Fade from 'react-reveal/Fade';
import getWindowDimensions from '../utils/windowDimensions';
import { useState } from 'react';
import LanguageList from '../utils/LanguageList';

const About = () => {
  const [windowDimensions] = useState(getWindowDimensions());
  const isMobileView = windowDimensions.width < 900;
  const scrollAnimationPicture = {
    bottom: isMobileView && 'bottom',
    left: !isMobileView && 'left',
  };
  const scrollAnimationText = {
    bottom: isMobileView && 'bottom',
    right: !isMobileView && 'right',
  };
  return (
    <section id="about" className={styles.about}>
      <h2>A bit about me</h2>

      <div className={styles.content}>
        <Fade {...scrollAnimationPicture}>
          <img src={polaroid} alt="Albert Lay's profile"></img>
        </Fade>
        <Fade {...scrollAnimationText}>
          <div className={styles.rightContent}>
            <h3>Hiya!</h3>
            <p>
              The name&apos;s Albert. I&apos;m a second-year CS student at the University of
              Waterloo. I&apos;ve just started my software development journey, so I&apos;m looking
              to explore a bunch of areas, such as web development, DevOps, and cybersecurity.
              Currently, I am focusing on backend web development.
            </p>
            <p>
              I also love traveling, reading books, and playing video games (anyone up for a match
              of Smash?).
            </p>
            <p>
              <b>Currently looking for opportunities in Winter 2023! </b>
              Available for various kinds of software roles, remote or in-person in Canada.
            </p>
            <LanguageList
              langs={['react', 'typescript', 'csharp', 'cplusplus', 'sass', 'dotnet']}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};
export default About;
