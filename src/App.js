import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Spinner, Button, CardSection } from './components/common';
import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } from './Constants';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };
	
	componentWillMount() {
		const config = {
			apiKey,
			authDomain,
			databaseURL,
			projectId,
			storageBucket, 
			messagingSenderId
		};
		firebase.initializeApp(config);

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size='large' />;
		}
	}

	render() {
		return (
			<View>
				<Header headerTitle="Authentication" />
					{this.renderContent()}
			</View>
		);
	}
}

export default App;
