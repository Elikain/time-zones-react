import React from 'react';

export default function Header(props) {
	const { textShadow } = props;

	return (
		<header>
			<h1 style={textShadow}>Time-Zones-React</h1>
		</header>
	);
}