import polaroid from '../assets/images/polaroid.webp';
import styles from './About.module.scss';
import Fade from 'react-reveal/Fade';
import getWindowDimensions from '../utils/windowDimensions';
import { useState } from 'react';

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
          <img src={polaroid} alt="Albert Lay"></img>
        </Fade>
        <Fade {...scrollAnimationText}>
          <div>
            <h3>Hiya!</h3>

            <p>
              The name’s Albert. I’m a second-year CS student at the University of Waterloo. I’m
              interested in all things in software, but currently I’m focusing on front-end
              development.
            </p>
            <p>
              I also love playing video games (anyone up for a match of Smash?) and taking pictures
              of my daily life!
            </p>
            <p>
              <b>Currently looking for opportunities in Winter 2022! </b>
              Available for various kinds of software roles, remote or in-person in Canada.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};
export default About;
