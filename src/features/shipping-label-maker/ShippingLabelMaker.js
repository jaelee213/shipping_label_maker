import React, { Component } from 'react';
import Wizard from '../../core/components/wizard/Wizard';
import ShippingLabel from './ShippingLabel';
import Header from '../../core/components/Header';
import GetSenderAddress from './steps/GetSenderAddress';
import GetReceiverAddress from './steps/GetReceiverAddress';
import GetWeight from './steps/GetWeight';
import GetShippingOption from './steps/GetShippingOption';
import Confirm from './steps/Confirm';
import '../../styles.css';

class ShippingLabelMaker extends Component {
  constructor(props) {
    super(props);
    const { shippingInfo } = this.props;
    this.state = {
      labelComplete: false,
      shippingInfo: shippingInfo ? shippingInfo : {},
    }
    // array of components containing all steps
    this.steps = [
      <GetSenderAddress />,
      <GetReceiverAddress />,
      <GetWeight />,
      <GetShippingOption />,
      <Confirm />,
    ]
  }

  onComplete = (wizardContext) => {
    // create deep copy of wizardContext --> treat state as immutable
    const shippingInfo = {
      from: { ...wizardContext.from },
      to: { ...wizardContext.to },
      ...wizardContext,
    };
    this.setState({
      labelComplete: true,
      shippingInfo,
    });
  }

  handleOnClick = () => {
    this.setState({ labelComplete: false });
  }

  render() {
    // destructure properties from 'this' and 'this.state'
    const { steps, onComplete } = this;
    const { shippingInfo, labelComplete } = this.state;
    return(
      <div className="main-container">
        {
          labelComplete
          ? (<ShippingLabel header={Header} shippingInfo={shippingInfo} handleOnClick={this.handleOnClick} />)
          : (<Wizard header={Header} steps={steps} wizardContext={shippingInfo} onComplete={onComplete} />)
        }
      </div>
    );
  }
}

export default ShippingLabelMaker;
