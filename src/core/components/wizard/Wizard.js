import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';

// action enumeration
const WizardAction = {
  prev: 1,
  next: 2,
  end: 3,
};

class Wizard extends Component {
  constructor(props) {
    super(props);
    const shippingInfo = this.props.wizardContext;
    // create deep copy of wizardContext passed from parent -> treat state as immutable
    this.state = {
      currentStep: 1,
      complete: false,
      wizardContext: {
        from: shippingInfo.from ? { ...shippingInfo.from } : undefined,
        to: shippingInfo.to ? { ...shippingInfo.to } : undefined,
        ...shippingInfo,
      },
    };
  }

  // type: refers to which button was clicked -- prev / next / confirm
  // payload: Object with relevant piece of info to update wizardContext
  onAction = (type, payload) => {
    let currentStep = this.state.currentStep;
    let complete = false;
    const wizardContext = { ...this.state.wizardContext };
    // when user selects 'confirm', store cost into state and set complete as true
    if (type === WizardAction.end) {
      wizardContext.cost = payload;
      complete = true;
    }
    else { // handles logic when user presses either 'prev' or 'next'
      // modify currentStep based on user selected option of 'next'/'prev'
      currentStep = (type === WizardAction.prev) ? currentStep - 1 : currentStep + 1;
      // update wizardContext and store in state when appropriate, before moving to 'next'/'prev' step
      if (payload) {
        if (payload.step === 1) wizardContext.from = { ...payload.value };
        if (payload.step === 2) wizardContext.to = { ...payload.value };
        if (payload.step === 3) wizardContext.weight = payload.value;
        if (payload.step === 4) wizardContext.shippingOption = payload.value;
      }
    }
    this.setState({ currentStep, wizardContext, complete });
  }

  render() {
    const Header = this.props.header;
    const { steps } = this.props;
    const { currentStep, wizardContext, complete } = this.state;
    if (complete) this.props.onComplete(wizardContext);
    return (
      <div className="wizard-container">
        <Header type="wizard" />
        <ProgressBar currentStep={currentStep} />
        {cloneElement(steps[currentStep - 1],
          {
            wizardContext,
            onAction: this.onAction,
          }
        )}
      </div>
    );
  }
};

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Wizard;
