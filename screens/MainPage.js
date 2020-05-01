import React from 'react';
import { View, Dimensions, SafeAreaView, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../components/Header';
import ConnectBlock from '../components/ConnectBlock';
import PodsBlock from '../components/PodsBlock';
import SettingsBlock from '../components/SettingsBlock';
import DeviceBlock from '../components/DeviceBlock';
import NonConnectBlock from '../components/NonConnectBlock';

const { width, height } = Dimensions.get('window');

export default class MainPage extends React.Component {
	state = {
		isAbout: false,
		isPlus: false,
		isNon: false,
	};
	render() {
		return (
			<SafeAreaView>
				<View
					style={{
						flexDirection: 'column',
						backgroundColor: '#FFFF',
						height: '100%',
						width: width,
						alignItems: 'center',
					}}
				>
					<Header
						img={
							this.state.isAbout ? (
								<View style={{ flex: 1, alignItems: 'center' }}>
									<TouchableOpacity
										style={{ flex: 1, justifyContent: 'center' }}
										onPress={() => this.setState({ isAbout: !this.state.isAbout })}
									>
										<View
											style={{
												backgroundColor: '#F1F1F1',
												borderColor: 'rgba(198, 196, 196, 0.36)',
												borderWidth: 1,
												width: 68,
												height: 68,
												borderRadius: 36,
												alignItems: 'center',
												justifyContent: 'center',
											}}
										>
											<Image
												source={require('../assets/icons/close.png')}
												style={{ width: 14, height: 14 }}
											/>
										</View>
									</TouchableOpacity>
								</View>
							) : null
						}
						onPressAbout={() => {
							this.setState({ isAbout: !this.state.isAbout });
						}}
						onPressBuy={() => {
							this.setState({ isNon: !this.state.isNon });
						}}
					/>
					<ImageBackground
						source={require('../assets/icons/bg.png')}
						resizeMode={'cover'}
						style={{
							height: height / 1.8,
							width: width,
							alignItems: 'center',
						}}
					>
						{this.state.isAbout ? <PodsBlock /> : this.state.isNon ? <ConnectBlock /> : <NonConnectBlock />}

						<View
							style={{
								flexDirection: 'row',
								width: width,
								height: '10%',
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
					</ImageBackground>

					{this.state.isPlus ? (
						<DeviceBlock
							onPress1={() => {
								this.setState({ isNon: !this.state.isNon });
							}}
							onPress2={() => {
								this.setState({ isNon: !this.state.isNon });
							}}
							onPress3={() => {
								this.setState({ isNon: !this.state.isNon });
							}}
						/>
					) : (
						<SettingsBlock />
					)}
				</View>
			</SafeAreaView>
		);
	}
}
