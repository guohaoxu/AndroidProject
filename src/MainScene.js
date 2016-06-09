'use strict';
import React, {Component} from 'react';
import {
	StyleSheet,
	ToolbarAndroid,
	View,
	Text,
	Alert,
	DrawerLayoutAndroid,
	ScrollView,
	TouchableOpacity,
	Image
} from 'react-native';
import MyTouchableOpacity2 from './MyTouchableOpacity2'

export default class MainScene extends Component {
	getInitialState() {
		return {}
	}
	componentDidMount() {
		//this.drawer.openDrawer();
	}
	showAbout() {
		let {navigator} = this.props;
		if (navigator) {
			navigator.push({
				name: 'Scene2',
				component: MyTouchableOpacity2
			})
		}
	}
	openDrawer() {
		this.drawer.openDrawer();
	}
	render() {
		var navigationView = (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<ScrollView>
					<Image resizeMode='cover' source= {{ uri: 'http://img.hb.aicdn.com/735afbfa2f6fee24d1a10e1a22b23c63f707ea82281c3-ajdFRe_fw658' }} style={{height:150}} />
					
					<TouchableOpacity style={styles.navViewItem} onPress={this.showAbout.bind(this)}>
					<Image source={require('./images/settings.png')} style={{width: 16, height: 16, marginRight: 8}} />
					<Text style={styles.white}>关于</Text>
					</TouchableOpacity>
					
				</ScrollView>
			</View>
		);
		return (
			<View style={styles.container}>
				<DrawerLayoutAndroid
					drawerBackgroundColor="rgba(0,0,0,0.5)"
					drawerWidth={250}
					drawerPosition={DrawerLayoutAndroid.positions.Left}
					ref={(drawer) => { this.drawer = drawer; }}
					renderNavigationView={() => navigationView} >
					<View>
						<ToolbarAndroid
							style={styles.toolbar}
							navIcon={require('./images/emoji_light.png')}
							title="全部"
							titleColor="#fff"
							onIconClicked={() => { this.openDrawer(); }}
						/>
					</View>
				</DrawerLayoutAndroid>
			</View>
		)
	}
}

/*

*/

const styles = StyleSheet.create({
	container: {
		paddingTop: 8,
		flex: 1,
		backgroundColor: '#fcc'
	},
	toolbar: {
		backgroundColor: '#222',
		height: 50,
		fontSize: 30
	},
	navViewItem: {
		backgroundColor: '#333',
		flexDirection: 'row',
		paddingLeft: 15,
		paddingTop: 10,
		paddingBottom: 10
	},
	white: {
		color: '#fff',
		fontSize: 14
	},
	txt: {
		backgroundColor: '#c33'
	}
});