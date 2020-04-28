import React from 'react';
import {
	View,
	Dimensions,
	Text,
	Image,
	Slider,
} from 'react-native';

const { width } = Dimensions.get('window');

export default class ConnectBlock extends React.Component {
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
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							alignSelf: 'flex-start',
							top: '10%',
						}}
					>
						<Text style={{ fontWeight: 'bold', fontSize: 9, textAlign: 'center'}}>95%</Text>
						<View
							style={{
								width: 32,
								height: 10,
								borderRadius: 2,
								borderColor: '#000',
								borderWidth: 0.5,
								alignItems: 'flex-start',
								justifyContent: 'center',
								padding: 1,
							}}
						>
							<View
								style={{
									width: '95%',
									height: 6,
									backgroundColor: '#000',
								}}
							/>
						</View>
					</View>
					<View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
						<Image style={{ width: 241, height: 227 }} source={require('../assets/icons/pods.png')}></Image>
					</View>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							alignSelf: 'flex-start',
							top: '10%',
						}}
					>
						<Text style={{ fontWeight: 'bold', fontSize: 9, textAlign: 'center'}}>96%</Text>
						<View
							style={{
								width: 32,
								height: 10,
								borderRadius: 2,
								borderColor: '#000',
								borderWidth: 0.5,
								alignItems: 'flex-start',
								justifyContent: 'center',
								padding: 1,
							}}
						>
							<View
								style={{
									width: '96%',
									height: 6,
									backgroundColor: '#000',
								}}
							/>
						</View>
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
						marginTop: -20,
					}}
				>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							alignSelf: 'center',
						}}
					>
						<Image source={require('../assets/icons/charge.png')} style={{ width: 6.46, height: 10.47 }} />
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
						marginTop: 5,
					}}
				>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							alignSelf: 'center',
						}}
					>
						<View
							style={{
								width: 32,
								height: 10,
								borderRadius: 2,
								borderColor: '#000',
								borderWidth: 0.5,
								alignItems: 'flex-start',
								justifyContent: 'center',
								padding: 1,
							}}
						>
							<View
								style={{
									width: '95%',
									height: 6,
									backgroundColor: '#000',
								}}
							/>
						</View>
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
						marginTop: 5,
					}}
				>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							alignSelf: 'center',
						}}
					>
						<Image source={require('../assets/icons/case.png')} style={{ width: 10, height: 10 }} />
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
						marginTop: 10,
					}}
				>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							alignSelf: 'center',
							marginBottom: 10,
						}}
					>
						<Slider
							style={{ width: 170, height: 20 }}
							minimumValue={0}
							maximumValue={100}
							minimumTrackTintColor="#000000"
							maximumTrackTintColor="rgba(198, 196, 196, 0.35)"
							thumbTintColor="#fff"
							value={40}
						/>
					</View>
				</View>
			</View>
		);
	}
}
