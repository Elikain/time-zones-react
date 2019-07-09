import React from 'react';
import TopButtons from './TopButtons';
import UTCSelector from './UTCSelector';

export default function ControlBar(props) {
	const { utcChange } = props;
	
	return (
		<article>
			<TopButtons utcChange={utcChange} />
			<UTCSelector utcChange={utcChange} />
		</article>
	);
}