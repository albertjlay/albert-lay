import polaroid from '../assets/images/polaroid.png';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <h2>A bit about me</h2>
      <div className={styles.content}>
        <img src={polaroid}></img>
        <div>
          <h3>Hiya!</h3>
          <p>The name’s Albert. I’m a second-year CS student at the University of Waterloo.</p>
          <p>
            I’m interested in a lot of things in software development, but currently I’m focusing on
            front-end development.
          </p>
          <p>
            I also love playing video games (anyone up for a match of Smash?) and taking pictures of
            my daily life!
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
