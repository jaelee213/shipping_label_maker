import React from 'react';
import ShippingLabelMaker from './features/shipping-label-maker/ShippingLabelMaker';
import Authorization from './core/components/Authorization';

// hard-coded authorized users
const authorizedUsers = { username: 'Publicis', password: 'Sapient' };

const App = () => {
	const AuthorizedComponent = Authorization(ShippingLabelMaker, authorizedUsers);
	return (
		<AuthorizedComponent />
	);
};

export default App;
