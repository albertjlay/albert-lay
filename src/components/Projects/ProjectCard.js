import styles from './ProjectCard.module.scss';
import Zoom from 'react-reveal/Zoom';

const ProjectCard = (props) => {
  return (
    <Zoom right>
      <li className={styles['project-card']}>
        <img src={props.data.media} alt={`screenshot of ${props.data.name}`} />
        <div className={styles.info}>
          <div className={styles.name}>{props.data.name}</div>

          <div className={styles.tools}>
            {props.data.tools.map((el) => {
              return <span key={el}>{el}</span>;
            })}
          </div>
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
    </Zoom>
  );
};
export default ProjectCard;
