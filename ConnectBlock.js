import React from 'react';
import { View, Dimensions, Text, Image, Slider } from 'react-native';

const { width } = Dimensions.get('window');

const viewStyle = {
	flexDirection: 'row',
	width: width,
	height: '60%',
	justifyContent: 'center',
	alignItems: 'center',
	paddingHorizontal: 30,
	marginTop:10
};

const viewStyle1 = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	alignSelf: 'flex-start',
	top: '10%',
};

const textStyle = {
	fontWeight: 'bold',
	fontSize: 9,
	textAlign: 'center',
};

const batteryStyle = {
	width: 32,
	height: 10,
	borderRadius: 2,
	borderColor: '#000',
	borderWidth: 0.5,
	alignItems: 'flex-start',
	justifyContent: 'center',
	padding: 1,
};

const batteryStyle1 = {
	width: '95%',
	height: 6,
	backgroundColor: '#000',
};

const viewStyle2 = {
	flex: 3,
	alignItems: 'center',
	justifyContent: 'center',
};

const viewStyle3 = {
	flexDirection: 'row',
	width: width,
	height: 'auto',
	justifyContent: 'center',
	alignItems: 'center',
	paddingHorizontal: 30,
	marginTop: -20,
};

const viewStyle4 = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	alignSelf: 'center',
};

const viewStyle5 = {
	flexDirection: 'row',
	width: width,
	height: 'auto',
	justifyContent: 'center',
	alignItems: 'center',
	paddingHorizontal: 30,
	marginTop: 5,
};

const viewStyle6 = {
	flexDirection: 'row',
	width: width,
	height: 'auto',
	justifyContent: 'center',
	alignItems: 'center',
	paddingHorizontal: 30,
	marginTop: 10,
};

const viewStyle7 = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	alignSelf: 'center',
	marginBottom: 10,
};


export default class ConnectBlock extends React.Component {
	render() {
		return (
			<View>
				<View style={viewStyle}>
					<View style={viewStyle1}>
						<Text style={textStyle}>95%</Text>
						<View style={batteryStyle}>
							<View style={batteryStyle1} />
						</View>
					</View>

					<View style={viewStyle2}>
						<Image style={{ width: 191, height: 177 }} source={require('../assets/icons/pods.png')}></Image>
					</View>

					<View style={viewStyle1}>
						<Text style={textStyle}>96%</Text>
						<View style={batteryStyle}>
							<View style={batteryStyle1} />
						</View>
					</View>
				</View>

				<View style={viewStyle3}>
					<View style={viewStyle4}>
						<Image source={require('../assets/icons/charge.png')} style={{ width: 6.46, height: 10.47 }} />
					</View>
				</View>

				<View style={viewStyle5}>
					<View style={viewStyle4}>
						<View style={batteryStyle}>
							<View style={batteryStyle1} />
						</View>
					</View>
				</View>

				<View style={viewStyle5}>
					<View style={viewStyle4}>
						<Image source={require('../assets/icons/case.png')} style={{ width: 10, height: 10 }} />
					</View>
				</View>

				<View style={viewStyle6}>
					<View style={viewStyle7}>
						<Slider
							style={{ width: 170, height: 20 }}
							minimumValue={0}
							maximumValue={100}
							minimumTrackTintColor="#000000"
							maximumTrackTintColor="rgba(198, 196, 196, 0.35)"
							thumbTintColor="#fff"
							value={40}
						/>
					</View>
				</View>
			</View>
		);
	}
}
