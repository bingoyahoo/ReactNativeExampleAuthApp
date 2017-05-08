import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Header, Button, Card, CardSection } from './components/common';
import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } from './Constants';

class App extends Component {
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
	}

	render() {
		return (
			<View>
				<Header headerTitle="Authentication" />
			</View>
		);
	}
}

export default App;
