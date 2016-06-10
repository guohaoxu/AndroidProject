'use strict';
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
	WebView,
	ProgressBarAndroid,
	ScrollView,
	Alert
} from 'react-native';
var htmlHead = '<!doctype html>'
		+	'<head>'
		+		'<meta charset="utf-8">'
		+		'<meta name="viewport" content="width=device-width, initial-scale=1">'
		+		'<link rel="stylesheet" href="https://o4j806krb.qnssl.com/public/stylesheets/index.min.492651d4.min.css">'
		+	'</head>'
		+	'<body>';

var htmlFooter = '</body></html>';

export default class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			loadedData: null,
			id: null
		};
	}
	componentDidMount() {
		this.setState({
			id: this.props.id
		});
		this.fetchData('https://cnodejs.org/api/v1/topic/' + this.props.id);
	}
	fetchData(request_url) {
		fetch(request_url)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					loaded: true,
					loadedData: responseData.data
				});
			});
	}
	_PressBackHandler() {
		let {navigator} = this.props;
		if (navigator) {
			navigator.pop();
		}
	}
	render() {
		if (!this.state.loaded) {
			return(
				<View style={styles.container}>
					<View style={styles.topbar}>
						<TouchableOpacity onPress={this._PressBackHandler.bind(this)} style={styles.topbarTouch}>
							<Image source={require('./images/back.png')} style={{width: 20, height: 20}} />
						</TouchableOpacity>
						<Text style={{fontSize: 14, color: '#eee'}}>稍等...</Text>
						<TouchableOpacity style={styles.topbarTouch}></TouchableOpacity>
					</View>
					<ProgressBarAndroid styleAttr="Inverse" color="#999" style={{marginTop: 10}} />
				</View>
				
			);
		}
		return (
			<View style={styles.container}>
				<View style={styles.topbar}>
					<TouchableOpacity onPress={this._PressBackHandler.bind(this)} style={styles.topbarTouch}>
						<Image source={require('./images/back.png')} style={{width: 20, height: 20}} />
					</TouchableOpacity>
					<Text style={{fontSize: 14, color: '#eee'}}>{this.state.loadedData.title}</Text>
					<TouchableOpacity style={styles.topbarTouch}></TouchableOpacity>
				</View>
					
				<View>
					<Text>{this.state.loadedData.title}</Text>
					<Image source={{uri: this.state.loadedData.author.avatar_url}} style={{width: 40, height: 40, borderRadius: 4}} />
					<Text>{this.state.loadedData.author.loginname}</Text>
					
				</View>
					<WebView source={{html: (htmlHead + this.state.loadedData.content + htmlFooter), baseUrl: 'https:'}} style={{width: 400, backgroundColor: '#fff'}} />
			</View>
		)
	}
}

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
		
	}
});