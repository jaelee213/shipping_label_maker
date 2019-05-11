import React from 'react';
import PropTypes from 'prop-types';

const ShippingLabel = (props) => {
  const { from, to, weight, shippingOption, cost } = props.shippingInfo;
  const Header = props.header;
  return (
    <div className="label-container">
      <Header />
      <div className="label-section">
        <div className="label-divider">
          <div className="label-property">
            <p>From:</p>
          </div>
          <div className="label-value">
            <p>{from.name}</p>
            <p>{from.street} {from.city}, {from.state} {from.zip}</p>
          </div>
        </div>
        <div className="label-divider">
          <div className="label-property">
              <p><b>To:</b></p>
            </div>
            <div className="label-value">
              <p><b>{to.name}</b></p>
              <p><b>{to.street} {to.city}, {to.state} {to.zip}</b></p>
          </div>
        </div>
        <div className="label-divider-bottom">
          <div className="label-property-left">
            <p><b>{shippingOption === "1" ? "GROUND" : "PRIORITY"}</b></p>
          </div>
          <div className="label-property-mid">
            <p><b>Weight: {weight} lbs</b></p>
          </div>
          <div className="label-property-right">
            <p><b>Cost: ${cost}</b></p>
          </div>
        </div>
      </div>
      <button className="edit-button" onClick={props.handleOnClick}>Edit Label</button>
    </div>
  );
};

ShippingLabel.propTypes = {
  header: PropTypes.func.isRequired,
  shippingInfo: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default ShippingLabel;
