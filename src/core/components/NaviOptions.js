import React from 'react';
import PropTypes from 'prop-types';

const NaviOptions = ({ currentStep, handleOnClick }) => {
  return (
    <div className="navi-container">
      {currentStep > 1 && currentStep <= 5
        ? <button className="prev-button" onClick={() => handleOnClick(1)}>Prev</button>
        : null
      }
      {currentStep >= 1 && currentStep < 5
        ? <button className="next-button" onClick={() => handleOnClick(2)}>Next</button>
        : null
      }
      {currentStep === 5
        ? <button className="confirm-button" onClick={() => handleOnClick(3)}>Confirm</button>
        : null
      }
    </div>
  );
};

NaviOptions.propTypes = {
  currentStep: PropTypes.number.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default NaviOptions;
