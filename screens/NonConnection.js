import React from 'react';
import { View, Dimensions, SafeAreaView, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../components/Header';
import NonConnectBlock from '../components/NonConnectBlock';
import SettingsBlock from '../components/SettingsBlock';
import DeviceBlock from '../components/DeviceBlock';
import PodsBlock from '../components/PodsBlock';

const { width } = Dimensions.get('window');

export default class NonConnection extends React.Component {
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
								this.props.navigation.navigate('MainPage');
							}}
							img={require('../assets/icons/close.png')}
							imgStyle={{ width: 14, height: 14 }}
							onPressAbout={() => {
								this.setState({ isAbout: !this.state.isAbout });
							}}
						/>
						<ScrollView>
						{this.state.isAbout ? <PodsBlock /> : <NonConnectBlock />}
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
