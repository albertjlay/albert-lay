import React from 'react';
import PropTypes from 'prop-types';

function BlankLink(props) {
  const { children, href, className } = props;
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

BlankLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};
BlankLink.defaultProps = {
  className: '',
};

export default BlankLink;
