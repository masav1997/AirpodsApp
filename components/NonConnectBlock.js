import React from 'react';
import { View, Dimensions, Text, Image, Slider, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class NonConnectBlock extends React.Component {
	render() {
		return (
			<View
				style={{
					flexDirection: 'row',
					width: width,
					height: 'auto',
					justifyContent: 'center',
					alignItems: 'center',
					paddingHorizontal: 30,
				}}
			>
				<ImageBackground
					style={{ alignItems: 'center', justifyContent: 'center', width: 300, height: 300 }}
					source={require('../assets/icons/ellipse.png')}
				>
					<Text style={{fontSize:12, fontWeight: 'bold'}}>НЕ ПОДКЛЮЧЕНО</Text>
				</ImageBackground>
			</View>
		);
	}
}
