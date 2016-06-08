/**
 * guohaoxu 2016-05-30
 */
'use strict';
import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Navigator,
	View
} from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import Movie from './Movie';
import AnimatedImage from './AnimatedImage';

export default class ReactNativeProject extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{name: 'My first Scene', index: 0, component: MyTouchableOpacity}}
				configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
				renderScene={(route, navigator) => {
					let Component = route.component;
					return <Component {...route.params} navigator={navigator} onForward={() => {
						var nextIndex = route.index + 1;
						navigator.push({
							name: 'Scene' + nextIndex,
							index: nextIndex
						})
					}} onBack={() => {
						if (route.index > 0) {
							navigator.pop();
						}
					}} />
				}}
			/>
		);
	}
}

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject)
