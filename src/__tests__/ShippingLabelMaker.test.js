import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShippingLabelMaker from '../features/shipping-label-maker/ShippingLabelMaker';
import ShippingLabel from '../features/shipping-label-maker/ShippingLabel';

// newer Enzyme versions require an adapter to a particular version of React
Enzyme.configure({ adapter: new Adapter() });

describe('ShippingLabelMaker component tests', () => {
	let wrapper;
	const props = {
		shippingInfo: {
			from: {
				name: 'name',
				street: 'street',
				city: 'city',
				state: 'state',
				zip: 'zip',
			},
			to: {
				name: 'name',
				street: 'street',
				city: 'city',
				state: 'state',
				zip: 'zip',
			},
			weight: 22,
			shippingOption: "2",
		}
	};

	describe('ShippingLabelMaker should print shipping label when onComplete is called', () => {
		it('should print shipping label when onComplete is called', () => {
			wrapper = shallow(<ShippingLabelMaker {...props} />);
			wrapper.instance().onComplete(props.shippingInfo);
			expect(wrapper.find(ShippingLabel).length).toEqual(1);
		});
	});
});
