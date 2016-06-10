'use strict';
import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Navigator,
	View,
	StatusBar,
	ToolbarAndroid,
	Text
} from 'react-native';
import MainScene from './MainScene';

export default class ReactNativeProject extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{name: 'My first Scene', index: 0, component: MainScene}}
				configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
				renderScene={(route, navigator) => {
				let Component = route.component;
				return <Component {...route.params} navigator={navigator} />
			}} />
		);
	}
}

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject)
