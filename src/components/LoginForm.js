import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Card, CardSection, Button } from './common';

class LoginForm extends Component {
	state = { email: '', password: '' };

	render() {
		return (
			<Card>
				<CardSection>
					<TextInput
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
						style={{ height: 20, width: 100 }}
					/>
				</CardSection>
				
				<CardSection>
					<TextInput
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
						style={{ height: 20, width: 100 }}
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
