import React from 'react';
import { View, Dimensions, Text, Image, Slider } from 'react-native';

const { width } = Dimensions.get('window');

export default class PodsBlock extends React.Component {
	render() {
		return (
			<View>
				<View
					style={{
						flexDirection: 'row',
						width: width,
						height: 'auto',
						justifyContent: 'center',
						alignItems: 'center',
						paddingHorizontal: 30,
					}}
				>
					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
						<Image
							style={{ width: 98, height: 176 }}
							source={require('../assets/icons/pods1.png')}
						></Image>
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						width: width,
						height: 'auto',
						justifyContent: 'center',
						alignItems: 'center',
						paddingHorizontal: 30,
					}}
				>
					<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}></View>
					<View style={{ alignItems: 'center', justifyContent: 'center', flex: 3 }}>
						<Text style={{ color: '#9A9CA5', textAlign: 'center', fontSize: 14 }}>
							<Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#000', fontSize: 15 }}>
								1.{' '}
							</Text>
							Откройте чехол, в котором находятся наушники{' '}
							<Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#000', fontSize: 14 }}>
								AirPods
							</Text>
							, и расположите его рядом с iPhone
						</Text>
					</View>
					<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}></View>
				</View>
			</View>
		);
	}
}
