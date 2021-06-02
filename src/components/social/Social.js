const Social = (props) => {
  return (
    <li>
      <a href={props.data.link} target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" alt={props.data.name}>
          <path fill-rule="evenodd" d={props.data.svgPath} />
        </svg>
      </a>
    </li>
  );
};
export default Social;
