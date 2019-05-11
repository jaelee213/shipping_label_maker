import React from 'react';
import PropTypes from 'prop-types';
import NaviOptions from '../../../core/components/NaviOptions';

// constant value of shipping rate
const SHIPPING_RATE = 0.40;

const Confirm = (props) => {
  const { wizardContext, onAction } = props;
  const handleOnClick = (option) => {
    onAction(option, calculateCost(weight, SHIPPING_RATE, shippingOption));
  };
  const { from, to, weight, shippingOption } = wizardContext;
  return(
    <div className="confirm-container">
      <h5>Confirm shipping label details:</h5>
      <div className="confirm-divider">
        <div className="confirm-section-top">
          <h6>From</h6>
          <p>Name: {from.name}</p>
          <p>Street: {from.street}</p>
          <p>City: {from.city}</p>
          <p>Zip: {from.zip}</p>
        </div>
        <div className="confirm-section-top">
          <h6>To</h6>
          <p>Name: {to.name}</p>
          <p>Street: {to.street}</p>
          <p>City: {to.city}</p>
          <p>Zip: {to.zip}</p>
        </div>
      </div>
      <div className="confirm-divider">
        <div className="confirm-section-bottom">
          <h6>Weight</h6>
          <p>{weight} lbs</p>
        </div>
        <div className="confirm-section-bottom">
          <h6>Shipping Option</h6>
          <p>{shippingOption === "1" ? "Ground" : "Priority"}</p>
        </div>
        <div className="confirm-section-bottom">
          <h6>Cost</h6>
          <p><b>${calculateCost(weight, SHIPPING_RATE, shippingOption)}</b></p>
        </div>
      </div>
      <NaviOptions currentStep={5} handleOnClick={handleOnClick} wizardContext={wizardContext} />
    </div>
  );
};

// helper function to calculate the shipping cost
const calculateCost = (weight, shippingRate, shippingOption) => {
  // round the resulting cost by the last two decimal places
  return (weight * shippingRate * (shippingOption === "1" ? 1 : 1.5)).toFixed(2);
};

Confirm.defaultProps = {
  wizardContext: {},
  onAction: () => {},
};

Confirm.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
}

export default Confirm;
