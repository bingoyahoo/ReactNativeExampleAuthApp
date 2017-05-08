import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}> { props.headerTitle }</ Text>
		</View>
	);
};

const styles = {
	textStyle: {
		fontSize: 20,
		fontWeight: 'bold'

	},
	viewStyle: {
		backgroundColor: '#f8bc48',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { height: 2, width: 0 },
		shadowOpacity: 0.2
	}
};

export { Header };
