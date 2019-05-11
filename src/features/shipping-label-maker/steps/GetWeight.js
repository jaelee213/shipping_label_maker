import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NaviOptions from '../../../core/components/NaviOptions';

class GetWeight extends Component {
  constructor(props) {
    super(props);
    const { weight } = this.props.wizardContext;
    this.state = {
      weight: weight ? weight : "0",
    }
  }

  handleOnClick = (option) => {
    this.props.onAction(option, { step: 3, value: this.state.weight })
  }

  handleOnChange = (weight) => {
    this.setState({ weight });
  }

  render() {
    const { wizardContext } = this.props;
    const { weight } = this.state;
    return (
      <div className="weight-container">
        <h5>Enter the <i>weight</i> of the package:</h5>
        <div className="weight-section">
          <input
            className="weight-field"
            onChange={(e) => this.handleOnChange(e.target.value)}
            placeholder="Weight"
            value={weight}
          />
          <p>&nbsp;&nbsp;lbs</p>
        </div>
        <NaviOptions currentStep={3} handleOnClick={this.handleOnClick} wizardContext={wizardContext} />
      </div>
    );
  }
};

GetWeight.defaultProps = {
  wizardContext: {},
  onAction: () => {},
};

GetWeight.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default GetWeight;
