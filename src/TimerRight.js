import React from 'react';

export default function TimerRight(props) {
	const date = new Date(props.date.getTime() + props.difference);
	const { utc, dayName, monthName, textShadow } = props;

	return (
		<article>
			<UTCCaption utc={utc} textShadow={textShadow} />
			<p style={textShadow}>{date.toLocaleTimeString()}</p>
			<p style={textShadow}>{dayName[date.getDay()]}, {date.getDate()} {monthName[date.getMonth()]} {date.getFullYear()}</p>
		</article>
	);
}

const UTCCaption = (props) => {
	if (props.utc >= 0) {
		return <h2 style={props.textShadow}>UTC+{props.utc}</h2>;
	}
	
	return <h2 style={props.textShadow}>UTC{props.utc}</h2>;
}