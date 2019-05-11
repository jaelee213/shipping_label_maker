import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wizard from '../core/components/wizard/Wizard';
import Header from '../core/components/Header';
import GetSenderAddress from '../features/shipping-label-maker/steps/GetSenderAddress';
import GetReceiverAddress from '../features/shipping-label-maker/steps/GetReceiverAddress';
import GetWeight from '../features/shipping-label-maker/steps/GetWeight';
import GetShippingOption from '../features/shipping-label-maker/steps/GetShippingOption';
import Confirm from '../features/shipping-label-maker/steps/Confirm';

// newer Enzyme versions require an adapter to a particular version of React
Enzyme.configure({ adapter: new Adapter() });

describe('Wizard component tests', () => {
  let wrapper;
  const props = {
    header: Header,
    steps: [
      <GetSenderAddress />,
      <GetReceiverAddress />,
      <GetWeight />,
      <GetShippingOption />,
      <Confirm />,
    ],
    wizardContext: {},
    onComplete: (wizardContext) => wizardContext,
  };

  describe('Wizard should move backwards and forwards based on actions sent by steps', () => {
    beforeEach(() => {       
      wrapper = shallow(<Wizard {...props} />);
    });
    it('currentStep should update respective to next and prev selected', () => {
      expect(wrapper.state('currentStep')).toEqual(1);
      wrapper.instance().onAction(2);
      expect(wrapper.state('currentStep')).toEqual(2);
      wrapper.instance().onAction(1);
      expect(wrapper.state('currentStep')).toEqual(1);
    });

    it('should render GetReceiverAddress component when currentStep is 2', () => {
      expect(wrapper.find(GetSenderAddress).length).toEqual(1);
      wrapper.instance().onAction(2);
      expect(wrapper.find(GetReceiverAddress).length).toEqual(1);
    });

    it('should render GetWeight component when proceeding to next step from step 2', () => {
      expect(wrapper.find(GetSenderAddress).length).toEqual(1);
      wrapper.instance().onAction(2);
      wrapper.instance().onAction(2);
      expect(wrapper.find(GetWeight).length).toEqual(1);    
    });

    it('should be able to proceed from step 1 to step 5', () => {
      expect(wrapper.find(GetSenderAddress).length).toEqual(1);
      wrapper.instance().onAction(2);
      expect(wrapper.find(GetReceiverAddress).length).toEqual(1);
      wrapper.instance().onAction(2);
      expect(wrapper.find(GetWeight).length).toEqual(1);
      wrapper.instance().onAction(2);
      expect(wrapper.find(GetShippingOption).length).toEqual(1); 
      wrapper.instance().onAction(2);
      expect(wrapper.find(Confirm).length).toEqual(1);
    });

    it('should be able to proceed from step 5 to step 1', () => {
      expect(wrapper.find(GetSenderAddress).length).toEqual(1);
      wrapper.instance().onAction(2);
      wrapper.instance().onAction(2);
      wrapper.instance().onAction(2);
      wrapper.instance().onAction(2);
      expect(wrapper.find(Confirm).length).toEqual(1);
      wrapper.instance().onAction(1);
      expect(wrapper.find(GetShippingOption).length).toEqual(1); 
      wrapper.instance().onAction(1);
      expect(wrapper.find(GetWeight).length).toEqual(1);
      wrapper.instance().onAction(1);
      expect(wrapper.find(GetReceiverAddress).length).toEqual(1);
      wrapper.instance().onAction(1);
      expect(wrapper.find(GetSenderAddress).length).toEqual(1);
    });
  });

  describe('Wizard calls onComplete of parent when step send the end action', () => {
    it('should call onComplete of parent when step send the end action', () => {
      props.onComplete = jest.fn();
      wrapper = shallow(<Wizard {...props} />);
      wrapper.instance().onAction(3);
      expect(props.onComplete).toHaveBeenCalledTimes(1);
    });
  });
});
