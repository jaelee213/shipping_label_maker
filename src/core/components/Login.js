import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: undefined,
				password: undefined,
			}
		}
	}

	handleOnChange = (type, value) => {
		const user = { ...this.state.user };
		user[type] = value;
		this.setState({ user });
	}

	render() {
		const { name, password } = this.state.user;
		return (
			<div className="login-container">
				<div className="login-section">
					<h5>Sign In</h5>
					{this.props.attempt > 0 ? <p>Incorrect username or password. Try again.</p> : <p>&nbsp;</p>}
					<input
						className="login-field"
						onChange={(e) => this.handleOnChange("name", e.target.value)}
						placeholder="Username"
						value={name ? name : ''}
					/>
					<input
						className="login-field"
						onChange={(e) => this.handleOnChange("password", e.target.value)}
						placeholder="Password"
						type="password"
						value={password ? password : ''}
					/>				
					<button className="login-button" onClick={() => this.props.handleSubmit(this.state.user)}>Login</button>		
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	attempt: PropTypes.number.isRequired,
}

export default Login;
