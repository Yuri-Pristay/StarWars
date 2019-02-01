import React, { Component } from 'react';
import axios from 'axios';
import SideBar from './sideBar.jsx';
import styles from './Styles/sideBar.module.css';

class movieDetails extends Component {
	state = {
		data: null,
		loading: true
	};
	componentDidMount() {
		let url = 'https://swapi.co/api/films';
		axios.get(url).then(
			response => {
				this.setState(prevState => {
					return {
						data: response.data.results,
						loading: false
					};
				});
			},
			err => {
				console.log('rejected');
			}
		);
	}
	render() {
		const { data, loading } = this.state;
		if (loading) return <h1>Loading...</h1>;
		let id = Number(this.props.match.params.id);
		let optimization = data.filter(item => {
			return item.episode_id == id;
		})[0];
		return (
			<div>
				<SideBar loading={loading} data={data} />
				<h1>
					STAR WARS
				</h1>
				<div
					className={styles.titles}
					// marginLeft : '200px',
					// width: '500px'
				>
					<div className={styles.titlecontent}>
						<p>Episode: {optimization.episode_id}</p>
						<p>Title: {optimization.title}</p>
						<p>Opening crawl: {optimization.opening_crawl}</p>
						<p>Director: {optimization.director}</p>
						<p>Producers: {optimization.producer}</p>
						<p>Release date: {optimization.release_date}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default movieDetails;
