import styles from './ProjectCard.module.scss';
import Fade from 'react-reveal/Fade';

const ProjectCard = (props) => {
  return (
    <Fade>
      <li className={styles['project-card']}>
        <img src={props.data.media} alt={`screenshot of ${props.data.name}`} />
        <div className={styles.info}>
          <div className={styles.name}>{props.data.name}</div>

          <div className={styles.tools}>
            {props.data.tools.map((el) => {
              return <span key={el}>{el}</span>;
            })}
          </div>
          <p>{props.data.description}</p>
          <div className={styles.links}>
            <a className="button-style" href={props.data.remote} target="_blank" rel="noreferrer">
              Github
            </a>
            {props.data.livesite && (
              <a
                className="button-style"
                href={props.data.livesite}
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            )}
          </div>
        </div>
      </li>
    </Fade>
  );
};
export default ProjectCard;
