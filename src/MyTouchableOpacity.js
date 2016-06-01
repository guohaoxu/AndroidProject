/**
 * guohaoxu 2016-05-30
 */
'use strict';
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';

export default class MyTouchableOpacity extends Component {
	constructor(props) {
		super(props);
		this.state = {status: props.text};
	}
	customPressHandler = () => {
		alert('你按下了' + this.state.status + '按钮');
	};
	render() {
		const { text } = this.props;
		return (
			<TouchableOpacity style={styles.touchable} onPress={this.customPressHandler}>
				<Text style={styles.touchTxt}>{text}</Text>
			</TouchableOpacity>
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