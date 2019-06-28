import React from 'react';

export default function TimerLeft(props) {
	const { date, dayName, monthName } = props;
	
	return (
		<article>
			<h2>Local Time</h2>
			<p>{date.toLocaleTimeString()}</p>
			<p>{dayName[date.getDay()]}, {date.getDate()} {monthName[date.getMonth()]} {date.getFullYear()}</p>
		</article>
	);
}