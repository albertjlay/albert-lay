import React from 'react';
import SectionHeading from './utils/SectionHeading';
import profile from '../assets/profile.webp';
import LanguageList from './utils/LanguageList';

function About() {
  return (
    <section className="about">
      <SectionHeading>get to know me!</SectionHeading>
      <div className="about-content">
        <img src={profile} alt="Albert Lay's profile." className="about-content-left" />
        <div className="about-content-right">
          <p>
            The name&apos;s Albert. I&apos;m a second-year CS student at the University of Waterloo.
            I&apos;ve just started my software development journey, so I&apos;m looking to explore a
            bunch of areas, such as web development, DevOps, and cybersecurity. Currently, I am
            focusing on backend web development.
          </p>
          <p>
            I also love traveling, reading books, and playing video games (anyone up for a match of
            Smash?).
          </p>
          <p>
            <b>Currently looking for opportunities in Spring 2022! </b>
            Available for various kinds of software roles, remote or in-person in Canada.
          </p>
          <LanguageList
            hex="E7E6DD"
            langs={['react', 'typescript', 'cplusplus', 'sass', 'figma']}
          />
        </div>
      </div>
    </section>
  );
}
export default About;
