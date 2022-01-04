import React from 'react';
import BlankLink from './utils/BlankLink';
import SocialLinks from './utils/SocialLinks';

function Home() {
  return (
    <section className="home">
      <p>Hi,</p>
      <h1>
        I&apos;m <span className="name">Albert</span>
      </h1>
      <div className="menu">
        <BlankLink href="" className="menu-links">
          about
        </BlankLink>
        <BlankLink href="" className="menu-links">
          experience
        </BlankLink>
        <BlankLink href="" className="menu-links">
          projects
        </BlankLink>
      </div>
      <div className="home-socials">
        <SocialLinks />
      </div>
      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path d="M0,320L26.7,282.7C53.3,245,107,171,160,144C213.3,117,267,139,320,176C373.3,213,427,267,480,277.3C533.3,288,587,256,640,224C693.3,192,747,160,800,176C853.3,192,907,256,960,288C1013.3,320,1067,320,1120,320C1173.3,320,1227,320,1280,298.7C1333.3,277,1387,235,1413,213.3L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z" />
        </svg>
      </div>
    </section>
  );
}

export default Home;
