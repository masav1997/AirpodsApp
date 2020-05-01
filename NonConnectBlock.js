import React from 'react';
import { View, Dimensions, Text, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');

const viewStyle = {
	flexDirection: 'row',
	width: width,
	height: '70%',
	justifyContent: 'center',
	alignItems: 'center',
	paddingHorizontal: 30,
};

const bgStyle = {
	alignItems: 'center',
	justifyContent: 'center',
	width: 250,
	height: 250,
};

const titleStyle = {
	fontSize: 12,
	fontWeight: 'bold',
};


export default class NonConnectBlock extends React.Component {
	render() {
		return (
			<View style={viewStyle}>
				<ImageBackground style={bgStyle} source={require('../assets/icons/ellipse.png')}>
					<Text style={titleStyle}>НЕ ПОДКЛЮЧЕНО</Text>
				</ImageBackground>
			</View>
		);
	}
}
