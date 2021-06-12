import styles from './SkillCard.module.scss';
import Rotate from 'react-reveal/Rotate';

/**
 * Calculates the time elapsed since startDate (rounded).
 * @param {Date} startDate - Date start
 * @return {Object} Two properties.
 *   time: {Number} Time elapsed. In years if >= 1 year, months otherwise.
 *   unit: {String} Unit used.
 */
const timeElapsed = (startDate) => {
  const retval = {
    time: Math.round((Date.now() - startDate) / (30 * 3600 * 24 * 1000)),
    unit: 'months',
  };
  if (retval.time >= 24) {
    retval.time = retval.time / 12;
    retval.unit = 'years';
  } else if (retval.time >= 12) {
    retval.time = retval.time / 12;
    retval.unit = 'year';
  } else if (retval.time <= 1) {
    retval.unit = 'month';
  }
  return retval;
};

const SkillCard = (props) => {
  return (
    <Rotate top left>
      <li className={styles['skill-card']}>
        <div className={styles.wrapper}>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>{props.data.name}</title>
            <path d={props.data.svgPath} />
          </svg>
          <div className={styles.content}>
            <div className={styles.name}>{props.data.name}</div>
            <div className={styles.duration}>{`${timeElapsed(props.data.date).time} ${
              timeElapsed(props.data.date).unit
            }`}</div>
          </div>
        </div>
      </li>
    </Rotate>
  );
};
export default SkillCard;
