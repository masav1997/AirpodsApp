import React from 'react';
import { View, Dimensions, SafeAreaView, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../components/Header';
import ConnectBlock from '../components/ConnectBlock';
import PodsBlock from '../components/PodsBlock';
import SettingsBlock from '../components/SettingsBlock';
import DeviceBlock from '../components/DeviceBlock';

const { width } = Dimensions.get('window');

export default class MainPage extends React.Component {
	state = {
		isAbout: false,
		isPlus: false,
	};
	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#F1F1F1' }}>
				<ImageBackground
					source={require('../assets/icons/bg.png')}
					resizeMode={'cover'}
					style={{
						height: '100%',
						width: width,
						alignItems: 'center',
					}}
				>
					<SafeAreaView>
						<Header
							onPress={() => {
								this.props.navigation.navigate('NonConnection');
							}}
							img={
								this.state.isAbout
									? require('../assets/icons/close.png')
									: require('../assets/icons/done.png')
							}
							imgStyle={this.state.isAbout ? { width: 14, height: 14 } : { width: 17, height: 11 }}
							onPressAbout={() => {
								this.setState({ isAbout: !this.state.isAbout });
							}}
						/>
						<ScrollView>
							{this.state.isAbout ? <PodsBlock /> : <ConnectBlock />}
							<View
								style={{
									flexDirection: 'row',
									width: width,
									height: 'auto',
									justifyContent: 'center',
									alignItems: 'center',
									paddingHorizontal: 30,
									marginTop: 5,
								}}
							>
								<TouchableOpacity
									style={{
										flex: 1,
										alignItems: 'flex-start',
										justifyContent: 'flex-start',
										alignItems: 'flex-start',
									}}
									onPress={() => {
										this.setState({ isPlus: !this.state.isPlus });
									}}
								>
									{this.state.isPlus ? (
										<Image
											source={require('../assets/icons/plusActive.png')}
											style={{ width: 87, height: 87, alignItems: 'flex-start', right: 30 }}
										/>
									) : (
										<Image
											source={require('../assets/icons/plus.png')}
											style={{ width: 87, height: 87, alignItems: 'flex-start', right: 30 }}
										/>
									)}
								</TouchableOpacity>
							</View>
							{this.state.isPlus ? <DeviceBlock /> : <SettingsBlock />}
						</ScrollView>
					</SafeAreaView>
				</ImageBackground>
			</View>
		);
	}
}
