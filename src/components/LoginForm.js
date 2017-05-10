import React, { Component } from 'react';
import { Card, CardSection, Button, UserInput } from './common';

class LoginForm extends Component {
	state = { email: '', password: '' };

	render() {
		return (
			<Card>
				<CardSection>
					<UserInput
						label="Email"
						placeholder="user@gmail.com"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				
				<CardSection>
					<UserInput
						label="Password"
						placeholder="password"
						secureTextEntry
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				

				<CardSection>
					<Button>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
