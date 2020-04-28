import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import MainPage from './screens/MainPage'
import NonConnection from './screens/NonConnection';


const Stack = createStackNavigator();

const images = [
];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  handleResourcesAsync = async () => {
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render(){
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }
  return (
      <NavigationContainer>
        <StatusBar barStyle="dark" backgroundColor="#9A9CA5" />
        
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="NonConnection" component={NonConnection} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
}
