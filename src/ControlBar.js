import React from 'react';
import Buttons from './Buttons';
import UTCSelector from './UTCSelector';

export default function ControlBar(props) {
	const { utcChange } = props;
	
	return (
		<article>
			<Buttons utcChange={utcChange} />
			<UTCSelector utcChange={utcChange} />
		</article>
	);
}