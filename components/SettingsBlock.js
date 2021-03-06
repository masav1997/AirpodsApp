import React from 'react';
import { View, Dimensions, Text, TouchableOpacity, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const viewStyle = {
	paddingBottom: 15,
};

const viewStyle1 = {
	flexDirection: 'row',
	width: width,
	height: 'auto',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
	paddingHorizontal: 30,
};

const viewStyle2 = {
	flex: 1,
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
};

const titleStyle = {
	fontSize: 16,
	fontWeight: 'bold',
	letterSpacing: 0.2,
};

const lineStyle = {
	width: width,
	height: 1,
	backgroundColor: '#F1F1F1',
	marginTop: 10,
};

const viewStyle3 = {
	flexDirection: 'row',
	width: '100%',
	height: 'auto',
	justifyContent: 'center',
	alignItems: 'center',
	paddingHorizontal: 30,
	paddingTop: 10,
};

const touchStyle = {
	flex: 1,
	alignItems: 'flex-start',
	justifyContent: 'center',
};

const textStyle = {
	color: '#9A9CA5',
	fontSize: 14,
};

export default class SettingsBlock extends React.Component {
	state = { switchValue: false, switchValue1: false, switchValue2: false };

	toggleSwitch = (value) => {
		this.setState({ switchValue: value });
	};

	toggleSwitch1 = (value) => {
		this.setState({ switchValue1: value });
	};

	toggleSwitch2 = (value) => {
		this.setState({ switchValue2: value });
	};

	render() {
		return (
			<ScrollView>
				<View style={viewStyle}>
					<View style={viewStyle1}>
						<View style={viewStyle2}>
							<Text style={titleStyle}>НАСТРОЙКИ</Text>
						</View>
					</View>

					<View style={lineStyle} />

					<View style={viewStyle3}>
						<TouchableOpacity style={touchStyle}>
							<Text style={textStyle}>Заглушка сторонних звуков</Text>
						</TouchableOpacity>
						<View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
							<Switch
								onValueChange={this.toggleSwitch}
								value={this.state.switchValue}
								trackColor={{ false: '#e9e9e9', true: '#b4b4b4' }}
								thumbColor={this.state.switchValue ? '#303030' : '#c3c4c4'}
								ios_backgroundColor="#e9e9e9"
							/>
						</View>
					</View>

					<View style={viewStyle3}>
						<TouchableOpacity style={touchStyle}>
							<Text style={textStyle}>Управление жестами</Text>
						</TouchableOpacity>
						<View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
							<Switch
								onValueChange={this.toggleSwitch1}
								value={this.state.switchValue1}
								trackColor={{ false: '#e9e9e9', true: '#b4b4b4' }}
								thumbColor={this.state.switchValue1 ? '#303030' : '#c3c4c4'}
								ios_backgroundColor="#e9e9e9"
							/>
						</View>
					</View>

					<View style={viewStyle3}>
						<TouchableOpacity style={touchStyle}>
							<Text style={textStyle}>Деактивация наушников при снятии</Text>
						</TouchableOpacity>
						<View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
							<Switch
								onValueChange={this.toggleSwitch2}
								value={this.state.switchValue2}
								trackColor={{ false: '#e9e9e9', true: '#b4b4b4' }}
								thumbColor={this.state.switchValue2 ? '#303030' : '#c3c4c4'}
								ios_backgroundColor="#e9e9e9"
							/>
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
}
