import React from 'react';

export default function TimerLeft(props) {
	const { date, dayName, monthName, textShadow } = props;
	
	return (
		<article>
			<h2 style={textShadow}>Local Time</h2>
			<p style={textShadow}>{date.toLocaleTimeString()}</p>
			<p style={textShadow}>{dayName[date.getDay()]}, {date.getDate()} {monthName[date.getMonth()]} {date.getFullYear()}</p>
		</article>
	);
}