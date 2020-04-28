import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
	state = {
		isAbout: false,
	};
	render() {
		const { onPress, img, imgStyle, onPressAbout, onPressBuy } = this.props;

		const headerStyle = {
			flexDirection: 'row',
			width: '100%',
			height: 'auto',
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 30,
			paddingTop: 20,
			paddingBottom: 10,
		};
		const leftStyle = {
			flex: 1,
			alignItems: 'flex-start',
			justifyContent: 'center',
		};
		const leftButton = {
			backgroundColor: '#000',
			width: 36,
			height: 36,
			borderRadius: 36,
			alignItems: 'center',
			justifyContent: 'center',
		};
		const centerStyle = {
			flex: 1,
			justifyContent: 'center',
		};
		const centerButton = {
			backgroundColor: '#F1F1F1',
			borderColor: 'rgba(198, 196, 196, 0.36)',
			borderWidth: 1,
			width: 68,
			height: 68,
			borderRadius: 36,
			alignItems: 'center',
			justifyContent: 'center',
		};
		const rightStyle = {
			flex: 1,
			alignItems: 'flex-end',
			justifyContent: 'center',
		};
		const rightButton = {
			width: 70,
			height: 70,
			alignItems: 'center',
			justifyContent: 'center',
			top: 5,
			left: 20,
		};

		return (
			<View style={headerStyle}>
				<TouchableOpacity style={leftStyle} onPress={onPressBuy}>
					<View style={leftButton}>
						<Image source={require('../assets/icons/buy.png')} style={{ width: 16, height: 16 }} />
					</View>
				</TouchableOpacity>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<TouchableOpacity style={centerStyle} onPress={onPress}>
						<View style={centerButton}>
							<Image source={img} style={imgStyle} />
						</View>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={rightStyle}
					onPress={onPressAbout}
					onPressIn={() => {
						this.setState({ isAbout: !this.state.isAbout });
					}}
				>
					{this.state.isAbout ? <Image source={require('../assets/icons/helpActive.png')} style={rightButton}/> : <Image source={require('../assets/icons/info.png')} style={rightButton}/>}
				</TouchableOpacity>
			</View>
		);
	}
}
