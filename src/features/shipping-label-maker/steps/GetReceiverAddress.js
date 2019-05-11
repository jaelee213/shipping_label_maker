import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NaviOptions from '../../../core/components/NaviOptions';

class GetReceiverAddress extends Component {
  constructor(props) {
    super(props);
    const { to } = this.props.wizardContext;
    this.state = {
      to: to ? { ...to } : undefined,
    }
  }

  handleOnClick = (option) => {
    this.props.onAction(option, { step: 2, value: this.state.to })
  }

  handleOnChange = (field, value) => {
    const to = { ...this.state.to };
    to[field] = value;
    this.setState({ to });
  }

  render() {
    const { wizardContext } = this.props;
    const { to } = this.state;
    return(
      <div className="address-container">
        <h5>Enter the <i>receiver's</i> address:</h5>
        <input
          className="input-field"
          onChange={(e) => this.handleOnChange("name", e.target.value)}
          placeholder="Name"
          value={to && to.name ? to.name : ''}
        />
        <input
          className="input-field"
          onChange={(e) => this.handleOnChange("street", e.target.value)}
          placeholder="Street"
          value={to && to.street ? to.street : ''}
        />
        <input
          className="input-field"
          onChange={(e) => this.handleOnChange("city", e.target.value)}
          placeholder="City"
          value={to && to.city ? to.city : ''}
        />
        <input
          className="input-field"
          onChange={(e) => this.handleOnChange("state", e.target.value)}
          placeholder="State"
          value={to && to.state ? to.state : ''}
        />
        <input
          className="input-field"
          onChange={(e) => this.handleOnChange("zip", e.target.value)}
          placeholder="Zip"
          value={to && to.zip ? to.zip : ''}
        />
        <NaviOptions currentStep={2} handleOnClick={this.handleOnClick} wizardContext={wizardContext} />
      </div>
    );
  }
}

GetReceiverAddress.defaultProps = {
  wizardContext: {},
  onAction: () => {},
};

GetReceiverAddress.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default GetReceiverAddress;
