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
	Image,
	ListView,
	ProgressBarAndroid
} from 'react-native';
import Detail from './Detail';

var activeArr = ["所有主题", "精华", "分享", "问答", "招聘"];
export default class MainScene extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
			loaded: false,
			active: 0
		};
	}
	componentDidMount() {
		this.fetchData('https://cnodejs.org/api/v1/topics');
	}
	fetchData(request_url) {
		fetch(request_url)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData.data),
					loaded: true
				});
			});
	}
	showDetail(id) {
		let {navigator} = this.props;
		if (navigator) {
			navigator.push({
				name: 'Detail',
				component: Detail,
				params: {
					id: id
				}
			})
		}
	}
	openDrawer() {
		this.drawer.openDrawer();
	}
	closeDrawer() {
		this.drawer.closeDrawer();
	}
	renderTopics(topics, sectionID, rowID) {
		return (
			<TouchableOpacity style={styles.topics}>
				<View style={styles.topicsTitle}>
					<Image source={{uri: topics.author.avatar_url}} style={{width: 40, height: 40, borderRadius: 4}} />
					<Text style={{fontSize: 16, color: '#333', marginTop: 8, marginLeft: 5}}>{topics.title}</Text>
				</View>
			</TouchableOpacity>
		);
	}
	render() {
		var navigationView = (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<ScrollView>
					<Image resizeMode='cover' source= {require('./images/food.jpg')} style={{width:250, height: 150}}>
						<View style={styles.navViewTx}>
							<Image source={require('./images/miao.jpg')} style={{width: 80, height: 80, borderRadius: 40}} />
						</View>
					</Image>
					
					<TouchableOpacity style={styles.navViewItem} onPress={() => { this.closeDrawer(); this.fetchData('https://cnodejs.org/api/v1/topics'); this.setState({active: 0}); }}>
						<Image source={require('./images/list.png')} style={styles.navViewItemIcon} />
						<Text style={styles.navViewItemTxt}>全部</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.navViewItem} onPress={() => { this.closeDrawer(); this.fetchData('https://cnodejs.org/api/v1/topics?tab=good'); this.setState({active: 1}); }}>
						<Image source={require('./images/message.png')} style={styles.navViewItemIcon} />
						<Text style={styles.navViewItemTxt}>精华</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.navViewItem} onPress={() => { this.closeDrawer(); this.fetchData('https://cnodejs.org/api/v1/topics?tab=share'); this.setState({active: 2}); }}>
						<Image source={require('./images/message.png')} style={styles.navViewItemIcon} />
						<Text style={styles.navViewItemTxt}>分享</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.navViewItem} onPress={() => { this.closeDrawer(); this.fetchData('https://cnodejs.org/api/v1/topics?tab=ask'); this.setState({active: 3}); }}>
						<Image source={require('./images/message.png')} style={styles.navViewItemIcon} />
						<Text style={styles.navViewItemTxt}>问答</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.navViewItem} onPress={() => { this.closeDrawer(); this.fetchData('https://cnodejs.org/api/v1/topics?tab=job'); this.setState({active: 4}); }}>
						<Image source={require('./images/message.png')} style={styles.navViewItemIcon} />
						<Text style={styles.navViewItemTxt}>招聘</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
		if (!this.state.loaded) {
			return(
				<View style={styles.container}>
					<DrawerLayoutAndroid
						drawerBackgroundColor="rgba(0,0,0,0.5)"
						drawerWidth={250}
						drawerPosition={DrawerLayoutAndroid.positions.Left}
						ref={(drawer) => { this.drawer = drawer; }}
						renderNavigationView={() => navigationView} >
						<View style={styles.topbar}>
							<TouchableOpacity onPress={this.openDrawer.bind(this)} style={styles.topbarTouch}>
								<Image source={require('./images/list_white.png')} style={{width: 20, height: 20}} />
							</TouchableOpacity>
							<Text style={{fontSize: 14, color: '#eee'}}>{activeArr[this.state.active]}</Text>
							<TouchableOpacity style={styles.topbarTouch}></TouchableOpacity>
						</View>
						<ScrollView>
							<ProgressBarAndroid styleAttr="Inverse" color="#999" style={{marginTop: 10}} />
						</ScrollView>
					</DrawerLayoutAndroid>
				</View>
			);
		}
		return (
			<View style={styles.container}>
				<DrawerLayoutAndroid
					drawerBackgroundColor="rgba(0,0,0,0.5)"
					drawerWidth={250}
					drawerPosition={DrawerLayoutAndroid.positions.Left}
					ref={(drawer) => { this.drawer = drawer; }}
					renderNavigationView={() => navigationView} >
					<View style={styles.topbar}>
						<TouchableOpacity onPress={this.openDrawer.bind(this)} style={styles.topbarTouch}>
							<Image source={require('./images/list_white.png')} style={{width: 20, height: 20}} />
						</TouchableOpacity>
						<Text style={{fontSize: 14, color: '#eee'}}>{activeArr[this.state.active]}</Text>
						<TouchableOpacity style={styles.topbarTouch} onPress={() => {this.showDetail('57563b08c1326f410e9147f5');}}><Text style={{color: '#fff'}}>abc</Text></TouchableOpacity>
					</View>

					<ScrollView>
						<ListView dataSource={this.state.dataSource} renderRow={this.renderTopics} />
					</ScrollView>
						
				</DrawerLayoutAndroid>
			</View>
		);
	}
}

/*
eb4f38
*/

const styles = StyleSheet.create({
	container: {
		paddingTop: 8,
		flex: 1,
		backgroundColor: '#fff'
	},
	white: {
		color: '#fff',
		fontSize: 14
	},
	font14: {
		fontSize: 14
	},
	topbar: {
		height: 44,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#222'
	},
	topbarTouch: {
		width: 44,
		height: 44,
		justifyContent: 'center',
		alignItems: 'center'
		
	},
	navViewItem: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		paddingLeft: 15,
		paddingTop: 10,
		paddingBottom: 10
	},
	navViewItemActive: {
		backgroundColor: '#eee'
	},
	navViewItemIcon: {
		width: 20,
		height: 20
	},
	activeAll: {
		color: '#eb4f38'
	},
	navViewTx: {
		paddingTop: 25,
		paddingLeft: 25
	},
	topics: {	
		paddingTop: 5,
		paddingRight: 5,
		paddingBottom: 5,
		paddingLeft: 5,
		backgroundColor: '#eee',
		marginBottom: 1
	},
	topicsTitle: {
		flex: 1,
		flexDirection: 'row'
	}
});