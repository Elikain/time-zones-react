import React, { Component } from 'react';
import TimerLeft from './TimerLeft';
import TimerRight from './TimerRight';
import ControlBar from './ControlBar';

export default class Content extends Component {
	state = {
		date: new Date(),
		offset: new Date().getTimezoneOffset() * 60000,
		ms: 3600000,
		utc: 0,
		dayName: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		monthName: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
	};

	componentDidMount() {
		this.timerID = setInterval(this.dateNow, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	dateNow = () => {
		this.setState({ date: new Date() });
	}

	utcChange = (value) => {
		this.setState({ utc: value });
	}

	render() {
		const difference = this.state.offset + this.state.utc * this.state.ms;
		const { date, utc, dayName, monthName } = this.state;
		const { textShadow, handleTextShadow } = this.props;

		return (
			<section>
				<TimerLeft date={date} dayName={dayName} monthName={monthName} textShadow={textShadow} />
				<ControlBar utcChange={this.utcChange} textShadow={textShadow} handleTextShadow={handleTextShadow} />
				<TimerRight date={date} utc={utc} difference={difference} dayName={dayName} monthName={monthName} textShadow={textShadow} />
			</section>
		);
	}
}