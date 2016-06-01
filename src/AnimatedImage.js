/**
 * guohaoxu 2016-05-30
 */
'use strict';
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	LayoutAnimation,
	TouchableOpacity
} from 'react-native';

export default class AnimatedImage extends Component {
	componentWillMount() {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
		this.setState({w: 100, h: 100});
	}
	getInitialState() {
		return {
			w: 100,
			h: 100
		}
	}
	_onPress() {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
		this.setState({w: this.state.w + 15, h: this.state.h + 15});
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={{width: this.state.w, height: this.state.h, backgroundColor: '#3f3'}} />
				<TouchableOpacity onPress={this._onPress}>
					<View>
						<Text>Press me</Text>
					</View>
				</TouchableOpacity>
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
	}
});
