import React, { Component } from 'react';

export default class UTCSelector extends Component {
	state = {
		value: 0,
		isOnClickDisable: false,
	};

	plusOnce = () => {
		let value = this.state.value;
		value++;

		if (value > 14 || this.state.isOnClickDisable) return;

		this.setState({ value: value });
	}

	plusMultiple = () => {
		let value = this.state.value;
		
		this.setState({ isOnClickDisable: false });

		clearInterval(this.interval);
		this.interval = setInterval(() => {
			value++;
			
			if (value > 14) {
				clearInterval(this.interval);
				return;
			}

			this.setState({ value: value, isOnClickDisable: true });
		}, 250);
	}

	minusOnce = () => {
		let value = this.state.value;
		value--;

		if (value < -12 || this.state.isOnClickDisable) return;

		this.setState({ value: value });
	}

	minusMultiple = () => {
		let value = this.state.value;

		this.setState({ isOnClickDisable: false });
		
		clearInterval(this.interval);
		this.interval = setInterval(() => {
			value--;
			
			if (value < -12) {
				clearInterval(this.interval);
				return;
			}

			this.setState({ value: value, isOnClickDisable: true });
		}, 250);
	}

	stopInterval = () => {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div>
				<h3>UTC</h3>
				<div id="utc_nav">
					<div>
						<button
							onClick={this.plusOnce}
							onMouseDown={this.plusMultiple}
							onMouseUp={this.stopInterval}
							onMouseOut={this.stopInterval}
							onTouchStart={this.plusMultiple}
							onTouchEnd={this.stopInterval}
						>+</button>
						<input type="number" id="utc_scale" value={this.state.value} readOnly />
						<button
							onClick={this.minusOnce}
							onMouseDown={this.minusMultiple}
							onMouseUp={this.stopInterval}
							onMouseOut={this.stopInterval}
							onTouchStart={this.minusMultiple}
							onTouchEnd={this.stopInterval}
						>-</button>
					</div>
					<div>
						<button onClick={() => this.props.utcChange(this.state.value)}>Set</button>
						<button onClick={() => this.setState({ value: 0 })}>Reset</button>
					</div>
				</div>
			</div>
		);
	}
}