import React from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const viewStyle = {
	flexDirection: 'row',
	width: width,
	height: 'auto',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
	paddingHorizontal: 30,
};
const viewStyle1 = {
	flex: 1,
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
};
const titleStyle = {
	fontSize: 16,
	fontWeight: 'bold',
};
const lineStyle = {
	width: width,
	height: 1,
	backgroundColor: '#F1F1F1',
	marginTop: 10,
};
const viewStyle2 = {
	flexDirection: 'row',
	width: '100%',
	height: 'auto',
	justifyContent: 'flex-start',
	alignItems: 'center',
	paddingHorizontal: 30,
	paddingTop: 10,
	marginBottom: 10,
};


export default class DeviceBlock extends React.Component {
	state = {
		device1: true,
		device2: false,
		device3: false,
	};

	render() {
		const { onPress1, onPress2, onPress3 } = this.props;

		return (
			<ScrollView style={{ paddingBottom: 15, paddingTop: 15 }}>
				<View style={viewStyle}>
					<View style={viewStyle1}>
						<Text style={titleStyle}>УСТРОЙСТВА</Text>
					</View>
				</View>

				<View style={lineStyle} />

				{/* <View style={viewStyle2}>
					<TouchableOpacity
						style={{ alignItems: 'flex-start', justifyContent: 'center' }}
						onPress={() => {
							this.setState({ device1: !this.state.device1 });
						}}
						onPressIn={onPress1}
					>
						<Text
							style={
								this.state.device1
									? { color: '#000', fontSize: 14, fontWeight: 'bold' }
									: { color: '#9A9CA5', fontSize: 14 }
							}
						>
							Airpods Pro
						</Text>
					</TouchableOpacity>
				</View>

				<View style={viewStyle2}>
					<TouchableOpacity
						style={{ alignItems: 'flex-start', justifyContent: 'center' }}
						onPress={() => {
							this.setState({ device2: !this.state.device2 });
						}}
						onPressIn={onPress2}
					>
						<Text
							style={
								this.state.device2
									? { color: '#000', fontSize: 14, fontWeight: 'bold' }
									: { color: '#9A9CA5', fontSize: 14 }
							}
						>
							Airpods Pro
						</Text>
					</TouchableOpacity>
				</View>

				<View style={viewStyle2}>
					<TouchableOpacity
						style={{ alignItems: 'flex-start', justifyContent: 'center' }}
						onPress={() => {
							this.setState({ device3: !this.state.device3 });
						}}
						onPressIn={onPress3}
					>
						<Text
							style={
								this.state.device3
									? { color: '#000', fontSize: 14, fontWeight: 'bold' }
									: { color: '#9A9CA5', fontSize: 14 }
							}
						>
							Airpods 2
						</Text>
					</TouchableOpacity>
				</View> */}
			</ScrollView>
		);
	}
}
