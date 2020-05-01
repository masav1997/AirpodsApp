import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

import MainPage from './screens/MainPage';

const Stack = createStackNavigator();

const images = [
	require('./assets/icons/bg.png'),
	require('./assets/icons/bg1.png'),
	require('./assets/icons/bg2.png'),
	require('./assets/icons/buy.png'),
	require('./assets/icons/case.png'),
	require('./assets/icons/charge.png'),
	require('./assets/icons/circle.png'),
	require('./assets/icons/close.png'),
	require('./assets/icons/done.png'),
	require('./assets/icons/ellipse.png'),
	require('./assets/icons/help.png'),
	require('./assets/icons/helpActive.png'),
	require('./assets/icons/info.png'),
	require('./assets/icons/plus.png'),
	require('./assets/icons/plusActive.png'),
	require('./assets/icons/pods.png'),
	require('./assets/icons/pods1.png'),
	require('./assets/icons/title.png'),
];

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};

	handleResourcesAsync = async () => {
		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});

		return Promise.all(cacheImages);
	};

	render() {
		if (!this.state.isLoadingComplete) {
			return (
				<AppLoading
					startAsync={this.handleResourcesAsync}
					onError={(error) => console.warn(error)}
					onFinish={() => this.setState({ isLoadingComplete: true })}
				/>
			);
		}
		return (
			<NavigationContainer>
				<StatusBar barStyle="dark-content" backgroundColor="#f1f1f1" networkActivityIndicatorVisible={true}/>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="MainPage" component={MainPage} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
