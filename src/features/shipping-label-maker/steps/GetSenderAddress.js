import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NaviOptions from '../../../core/components/NaviOptions';

class GetSenderAddress extends Component {
  constructor(props) {
    super(props);
    const { from } = this.props.wizardContext;
    this.state = {
      from: from ? { ...from } : undefined,
    }
  }

  handleOnClick = (option) => {
    this.props.onAction(option, { step: 1, value: this.state.from })
  }

  handleOnChange = (field, value) => {
    const from = { ...this.state.from };
    from[field] = value;
    this.setState({ from });
  }

  render() {
    const { wizardContext } = this.props;
    const { from } = this.state;
    return(
      <div className="address-container">
        <h5>Enter the <i>sender's</i> address:</h5>
        <input
          className="input-field"
          onChange={(e) => this.handleOnChange("name", e.target.value)}
          placeholder="Name"
          value={from && from.name ? from.name : ''}
        />
        <input
          className="input-field"
          onChange={(e) => this.handleOnChange("street", e.target.value)}
          placeholder="Street"
          value={from && from.street ? from.street : ''}
        />
        <input
          className="input-field"
          onChange={(e) => this.handleOnChange("city", e.target.value)}
          placeholder="City"
          value={from && from.city ? from.city : ''}
        />
        <input
          className="input-field"
          onChange={(e) => this.handleOnChange("state", e.target.value)}
          placeholder="State"
          value={from && from.state ? from.state : ''}
        />
        <input
          className="input-field"
          onChange={(e) => this.handleOnChange("zip", e.target.value)}
          placeholder="Zip"
          value={from && from.zip ? from.zip : ''}
        />
        <NaviOptions currentStep={1} handleOnClick={this.handleOnClick} wizardContext={wizardContext} />
      </div>
    );
  }
};

// provide default props to bypass proptype errors
// --> cloneElement creates a copy of component that gets created first
// --> therefore, for the first component it will see that props' values are undefined
GetSenderAddress.defaultProps = {
  wizardContext: {},
  onAction: () => {},
};

GetSenderAddress.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default GetSenderAddress;
