import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const { currentStep } = props;
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div id="filler" style={{ width: `${currentStep * 20}%`}}>{currentStep * 20}%</div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
}

export default ProgressBar;
