/**
 * guohaoxu 2016-05-30
 */
'use strict';
import React, {Component} from 'react';
import {
	View,
	Navigator
} from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';

export default class MyNavigator extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{name: 'My first Scene', index: 0, component: MyTouchableOpacity}}
				configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
				renderScene={(route, navigator) => {
					<MyTouchableOpacity
						title={route.title}
						navigator={navigator}
						name={route.name}
						onForward={() => {
							var nextIndex = route.index + 1;
							navigator.push({
								name: 'Scene ' + nextIndex,
								index: nextIndex
							});
						}}
						onBack={() => {
							if (route.index > 0) navigator.pop()
						}}
					/>
				}} />
		);
	}
}