import React from 'react';
import { View, Dimensions, Text, Image } from 'react-native';

const { width } = Dimensions.get('window');

const ViewImageStyle = {
	flexDirection: 'row',
	width: width,
	height: '60%',
	justifyContent: 'center',
	alignItems: 'center',
	paddingHorizontal: 30,
	marginTop: 10
};

const ViewTextStyle = {
	flexDirection: 'row',
	width: width,
	height: 'auto',
	justifyContent: 'center',
	alignItems: 'center',
	paddingHorizontal: 30,
	marginTop: -10,
	marginBottom: 10,
};

const mainTextStyle = {
	color: '#9A9CA5',
	textAlign: 'center',
	fontSize: 14,
};

const boldTextStyle = {
	fontWeight: 'bold',
	textAlign: 'center',
	color: '#000',
	fontSize: 15,
};

const boldyTextStyle = {
	fontWeight: 'bold',
	textAlign: 'center',
	color: '#000',
	fontSize: 14,
};


export default class PodsBlock extends React.Component {
	render() {
		return (
			<View>
				<View style={ViewImageStyle}>
					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
						<Image style={{ width: 98, height: 176 }} source={require('../assets/icons/pods1.png')} />
					</View>
				</View>

				<View style={ViewTextStyle}>
					<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
						<Text style={mainTextStyle}>
							<Text style={boldTextStyle}>1. </Text>
							Откройте чехол, в котором находятся наушники <Text style={boldyTextStyle}>AirPods</Text>, и
							расположите его рядом с iPhone
						</Text>
					</View>
				</View>
			</View>
		);
	}
}
