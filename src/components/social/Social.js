import styles from './Social.module.scss';

const Social = (props) => {
  return (
    <li>
      <a href={props.data.link} target="_blank" rel="noreferrer" className={styles.social}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" alt={props.data.name}>
          <path fillRule="evenodd" d={props.data.svgPath} />
        </svg>
        {props.data.name}
      </a>
    </li>
  );
};
export default Social;
