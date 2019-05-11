import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NaviOptions from '../../../core/components/NaviOptions';

// shipping option enumeration
const ShippingOption = {
  ground: "1",
  priority: "2",
}

class GetShippingOption extends Component {
  constructor(props) {
    super(props);
    const { shippingOption } = this.props.wizardContext;
    this.state = {
      shippingOption: shippingOption ? shippingOption : ShippingOption.ground,
    }
  }

  handleOnClick = (option) =>{
    this.props.onAction(option, { step: 4, value: this.state.shippingOption })
  }

  handleOnChange = (shippingOption) => {
    this.setState({ shippingOption });
  }

  render() {
    const { wizardContext } = this.props;
    const { shippingOption } = this.state;
    return(
      <div className="shipping-container">
          <h5>Select a <i>shipping option</i>:</h5>
          <p>Choose an option:</p>
          <select id="shipping-option" onChange={(e) => this.handleOnChange(e.target.value)} value={shippingOption}>
            <option value={ShippingOption.ground}>Ground</option>
            <option value={ShippingOption.priority}>Priority</option>
          </select>
          <NaviOptions currentStep={4} handleOnClick={this.handleOnClick} wizardContext={wizardContext} />
      </div>
    );
  }
};

GetShippingOption.defaultProps = {
  wizardContext: {},
  onAction: () => {},
};

GetShippingOption.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default GetShippingOption;
