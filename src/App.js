import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } from './Constants';
import LoginForm from './components/LoginForm';

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
				<LoginForm />
			</View>
		);
	}
}

export default App;
