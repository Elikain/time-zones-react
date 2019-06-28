import React from 'react';

export default function TimerRight(props) {
	const date = new Date(props.date.getTime() + props.difference);
	const { utc, dayName, monthName } = props;

	return (
		<article>
			<UTCCaption utc={utc}/>
			<p>{date.toLocaleTimeString()}</p>
			<p>{dayName[date.getDay()]}, {date.getDate()} {monthName[date.getMonth()]} {date.getFullYear()}</p>
		</article>
	);
}

const UTCCaption = (props) => {
	if (props.utc >= 0) {
		return <h2>UTC+{props.utc}</h2>;
	}
	
	return <h2>UTC{props.utc}</h2>;
}