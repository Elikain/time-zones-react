import React, { Component } from 'react';

export default class TopButtons extends Component {
	state = {
		'daylightLabels': ['PDT', 'MDT', 'EDT', 'CEST'],
		'nonDaylightLabels': ['PST', 'MST', 'EST', 'CET'],
		'labels': ['PDT', 'MDT', 'EDT', 'CEST'],
		'daylightHours': [-7, -6, -4, 2],
		'nonDaylightHours': [-8, -7, -5, 1],
		'hours': [-7, -6, -4, 2],
		'seasonSummer': 'Summer\nTime',
		'seasonWinter': '',
	};

	handleSwitch = () => {
		if (this.state.labels[0] === 'PDT') {
			this.setState({
				'labels': this.state.nonDaylightLabels,
				'hours': this.state.nonDaylightHours,
				'seasonSummer': '',
				'seasonWinter': 'Winter\nTime',
			});

			this.props.handleTextShadow({textShadow: '-2px 2px 3px #5555ff'});
		} else if (this.state.labels[0] === 'PST') {
			this.setState({
				'labels': this.state.daylightLabels,
				'hours': this.state.daylightHours,
				'seasonSummer': 'Summer\nTime',
				'seasonWinter': '',
			});

			this.props.handleTextShadow({textShadow: '-2px 2px 3px #ff5555'});
		}
	}

	render() {
		const { utcChange, textShadow } = this.props;

		return (
			<div className="buttons_top">
				<div className="switch_seasons">
					<span className="span_summer" style={textShadow}>{this.state.seasonSummer}</span>
					<label className="switch">
						<input type="checkbox" onClick={this.handleSwitch} />
						<div className="switch_btn"></div>
					</label>
					<span className="span_winter" style={textShadow}>{this.state.seasonWinter}</span>
				</div>
				<div className="pre_timezones_btn">
					<button onClick={() => utcChange(this.state.hours[0])}>{this.state.labels[0]}</button>
					<button onClick={() => utcChange(this.state.hours[1])}>{this.state.labels[1]}</button>
					<button onClick={() => utcChange(this.state.hours[2])}>{this.state.labels[2]}</button>
					<button onClick={() => utcChange(this.state.hours[3])}>{this.state.labels[3]}</button>
				</div>
			</div>
		);
	}
}