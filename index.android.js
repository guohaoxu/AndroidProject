/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * <ListView dataSource={this.state.dataSource} renderRow={this.renderMovie} style={styles.listView} />
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
	ListView
} from 'react-native';

const API_KEY = '7waqfqbprs7pajbz28mqf6vz';
const API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
const PAGE_SIZE = 25;
const PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
const REQUEST_URL = API_URL + PARAMS;

class AndroidProject extends Component {
  constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
			loaded: false
		};
  }
	componentDidMount() {
		this.fetchData();
	}
	fetchData() {
		fetch(REQUEST_URL)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
					loaded: true
			})
			.done();
		})
	}
  render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}
		return (
			<Image source={require('./src/images/miao.jpg')} style={styles.thumbnail}>
				<Text>Hi, I'm a miao.</Text>
			</Image>

		)
  }
	renderLoadingView() {
		return (
			<View style={styles.container}>
				<Text>正在加载电影数据3...</Text>
			</View>
		)
	}
	renderMovie(movie) {
			return (
				<View style={styles.container}>
					<Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
					<View style={styles.rightContainer}>
						<Text style={styles.title}>{movie.title}</Text>
						<Text style={styles.year}>{movie.year}</Text>
					</View>
				</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
		padding: 10,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
  },
  thumbnail: {
		width: 53,
		height: 81,
		borderRadius: 10
  },
  rightContainer: {
		flex: 1,
  },
  title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center',
  },
  year: {
		textAlign: 'center',
  },
	listView: {
		paddingTop: 20,
		backgroundColor: '#f5fcff'
	}
});

AppRegistry.registerComponent('AndroidProject', () => AndroidProject);
