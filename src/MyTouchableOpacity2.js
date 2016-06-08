/**
 * guohaoxu 2016-05-30
 */
'use strict';
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import Movie from './Movie';

export default class MyTouchableOpacity2 extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	_PressHandler() {
		let {navigator} = this.props;
		if (navigator) {
			navigator.push({
				name: 'movie',
				component: Movie
			})
		}
	}
	_PressBackHandler() {
		let {navigator} = this.props;
		if (navigator) {
			navigator.pop();
		}
	}
	render() {
		return (
			<View>
			<TouchableOpacity style={styles.touchable} onPress={this._PressHandler.bind(this)}>
				<Text style={styles.touchTxt}>点我看电影</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.touchable} onPress={this._PressBackHandler.bind(this)}>
				<Text style={styles.touchTxt}>点我返回</Text>
			</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	touchable: {
		width: 150,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#c33',
		justifyContent: 'center',
		overflow: 'hidden',
		marginTop: 30
	},
	touchTxt: {
		textAlign: 'center',
		color: '#fff'
	}
});