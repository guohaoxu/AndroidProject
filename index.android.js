/**
 * guohaoxu 2016-05-30
 */
'use strict';
import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import MyTouchableOpacity from './src/MyTouchableOpacity';
import Movie from './src/Movie';

class AndroidProject extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					Welcome to React Native, show cases!
				</Text>
				<Text style={styles.desc}>
					This is a TouchableOpacity case.
				</Text>
				<MyTouchableOpacity text="确定" />
				<MyTouchableOpacity text="取消" />
				</* <Movie /> */>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
		padding: 20
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#c33'
	},
	desc: {
		fontSize: 14,
		color: '#999',
		textAlign: 'center',
		marginTop: 10
	},
});

AppRegistry.registerComponent('AndroidProject', () => AndroidProject)