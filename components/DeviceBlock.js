import React from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

export default class DeviceBlock extends React.Component {
	render() {
		return (
			<ScrollView style={{ paddingBottom: 15, paddingTop: 15 }}>
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
					<View
						style={{
							flex: 1,
							alignItems: 'flex-start',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
						}}
					>
						<Text style={{ fontSize: 16, fontWeight: 'bold' }}>УСТРОЙСТВА</Text>
					</View>
				</View>

				<View style={{ width: width, height: 1, backgroundColor: '#F1F1F1', marginTop: 10 }} />

				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						height: 'auto',
						justifyContent: 'flex-start',
						alignItems: 'center',
						paddingHorizontal: 30,
						paddingTop: 10,
						marginBottom: 10,
					}}
				>
					<TouchableOpacity style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
						<Text style={{ color: '#000', fontSize: 14, fontWeight: 'bold' }}>Airpods Pro</Text>
					</TouchableOpacity>
				</View>

				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						height: 'auto',
						justifyContent: 'flex-start',
						alignItems: 'center',
						paddingHorizontal: 30,
						paddingTop: 10,
						marginBottom: 10,
					}}
				>
					<TouchableOpacity style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
						<Text style={{ color: '#9A9CA5', fontSize: 14 }}>Airpods Pro</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						height: 'auto',
						justifyContent: 'flex-start',
						alignItems: 'center',
						paddingHorizontal: 30,
						paddingTop: 10,
						marginBottom: 10,
					}}
				>
					<TouchableOpacity style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
						<Text style={{ color: '#9A9CA5', fontSize: 14 }}>Airpods Pro</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}
