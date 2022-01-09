import covidwatchdog from '../../assets/images/covid-watchdog.webp';
import tictactoe from '../../assets/images/tic-tac-toe.webp';
import personalwebsite from '../../assets/images/personal-website.webp';
import pokedex from '../../assets/images/pokedex.webp';
import tracenext from '../../assets/images/tracenext.webp';
import statsmadeeasy from '../../assets/images/statsmadeeasy.webp';
import ngg from '../../assets/images/ngg.webp';
import styles from './ProjectList.module.scss';
import ProjectCard from './ProjectCard';

const projectData = [
  // {
  //   name: 'ChamberCrawler',
  //   description: (
  //     <p>
  //       Built for Hack The North 2021. An intuitive COVID-19 data visualizer which helps Canadians
  //       plan how to explore the Great North safely.
  //     </p>
  //   ),
  //   dateCreated: new Date(2021, 8),
  //   media: covidwatchdog,
  //   tools: ['React', 'Sass', 'Node.js'],
  //   remote: 'https://github.com/jaredjhe/Covid-Watchdog',
  // },
  {
    name: 'COVID Watchdog',
    description: (
      <p>
        Built for Hack The North 2021. An intuitive COVID-19 data visualizer which helps Canadians
        plan how to explore the Great North safely.
      </p>
    ),
    dateCreated: new Date(2021, 8),
    media: covidwatchdog,
    tools: ['React', 'Sass', 'Node.js'],
    remote: 'https://github.com/jaredjhe/Covid-Watchdog',
  },
  {
    name: 'Unbeatable Tic Tac Toe',
    description: (
      <p>
        Web-based tic-tac-toe equipped with three modes, including an unbeatable AI utilizing Newell
        and Simon's algorithm.
      </p>
    ),
    dateCreated: new Date(2021, 6),
    media: tictactoe,
    tools: ['TypeScript', 'Sass', 'Jest'],
    remote: 'https://github.com/albertjlay/tic-tac-toe',
    livesite: 'https://albertjlay.github.io/tic-tac-toe/',
  },
  {
    name: 'Personal Website',
    description: (
      <p>This website! Designed entirely from scratch with Figma and built using React.</p>
    ),
    dateCreated: new Date(2021, 5),
    media: personalwebsite,
    tools: ['React', 'Sass', 'Figma'],
    remote:
      'mailto:albertjlay@gmail.com?subject=Hey,%20Albert!&body=May%20I%20take%20a%20look%20at%20your%20private%20personal%20website%20repo?',
    livesite: 'https://www.albertjlay.com/',
  },
  {
    name: 'Pokedex',
    description: (
      <p>
        A web-based clone of the Pokedex from the popular Pokémon franchise! Utilizes data from{' '}
        <a href="https://pokeapi.co/">PokeAPI</a> and images from{' '}
        <a href="https://pokeres.bastionbot.org/">Pokeres Bastion</a>.
      </p>
    ),
    dateCreated: new Date(2021, 4),
    media: pokedex,
    tools: ['JavaScript', 'HTML5', 'CSS3'],
    remote: 'https://github.com/albertjlay/pokedex',
    livesite: 'https://albertjlay.github.io/pokedex/',
  },
  {
    name: 'TraceNext',
    description: (
      <p>
        Built for <a href="https://tohacks.ca/">ToHacks 2021</a>. A contact-tracing software that
        emails users if they have been in contact with a user who has tested positive. Utilizes the{' '}
        <a href="https://developers.google.com/maps">Google Maps</a> and{' '}
        <a href="https://www.emailjs.com/">EmailJS</a> API.
      </p>
    ),
    dateCreated: new Date(2021, 4),
    media: tracenext,
    tools: ['HTML5', 'CSS3', 'Flask'],
    remote: 'https://github.com/levinaind/TO-Hacks-2021',
    livesite: '',
  },
  {
    name: 'Stats Made Easy',
    description: (
      <p>
        Calculate probabilities modelled with a normal, binomial, or Poisson distribution using{' '}
        <a href="https://www.scipy.org/">SciPy</a>. Supports plotting of the normal distribution
        curve using <a href="https://matplotlib.org/">MatPlotLib</a>.
      </p>
    ),
    dateCreated: new Date(2020, 8),
    media: statsmadeeasy,
    tools: ['Python', 'Tkinter'],
    remote: 'https://github.com/albertjlay/statsmadeeasy',
    livesite: '',
  },
  {
    name: 'Number Guessing Game',
    description: (
      <p>
        A simple number guessing game with a custom-designed GUI. Supports three difficulty levels,
        a scoring system, and hints based on math concepts.
      </p>
    ),
    dateCreated: new Date(2020, 8),
    media: ngg,
    tools: ['Python', 'Tkinter'],
    remote: 'https://github.com/albertjlay/NGG',
    livesite: '',
  },
];

const ProjectList = () => {
  return (
    <section id="projects" className={styles['projects-section']}>
      <h2>What I've been up to</h2>
      <ul>
        {projectData.map((el) => (
          <ProjectCard data={el} key={el.name} />
        ))}
      </ul>
    </section>
  );
};
export default ProjectList;
