import React from 'react';
import PropTypes from 'prop-types';

function SectionHeading(props) {
  const { children } = props;
  return (
    <div className="section-heading">
      <div className="section-circle" />
      <h2>{children}</h2>
    </div>
  );
}

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeading;
