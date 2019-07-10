import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default class App extends Component {
	state = {
		textShadow: {textShadow: '-2px 2px 3px #ff5555'},
	};

	handleTextShadow = (value) => {
		this.setState({ textShadow: value });
	}

	render() {
	const { textShadow } = this.state;

		return (
			<div className="container">
				<Header textShadow={textShadow} />
				<Content handleTextShadow={this.handleTextShadow} textShadow={textShadow} />
				<Footer />
			</div>
		);
	}
	
}