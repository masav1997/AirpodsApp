import React from 'react';
import { View, Dimensions, SafeAreaView, Text, ImageBackground, Image, TouchableOpacity, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../components/Header';
import ConnectBlock from '../components/ConnectBlock';
import PodsBlock from '../components/PodsBlock';
import SettingsBlock from '../components/SettingsBlock';

const { width } = Dimensions.get('window');

export default class MainPage extends React.Component {
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
							img={require('../assets/icons/done.png')}
							imgStyle={{ width: 17, height: 11 }}
						/>
						<ScrollView>
							<PodsBlock />
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
								>
									<Image
										source={require('../assets/icons/plus.png')}
										style={{ width: 87, height: 87, alignItems: 'flex-start', right: 30 }}
									/>
								</TouchableOpacity>
							</View>
							<SettingsBlock />
						</ScrollView>
					</SafeAreaView>
				</ImageBackground>
			</View>
		);
	}
}
