import React from 'react';

export default function Buttons(props) {
	return (
		<div className="buttons_top">
			<button onClick={() => props.utcChange(-7)}>PDT</button>
			<button onClick={() => props.utcChange(-6)}>MDT</button>
			<button onClick={() => props.utcChange(-4)}>EDT</button>
			<button onClick={() => props.utcChange(2)}>CEST</button>
		</div>
	);
}