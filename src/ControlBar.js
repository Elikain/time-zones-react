import React from 'react';
import TopButtons from './TopButtons';
import UTCSelector from './UTCSelector';

export default function ControlBar(props) {
	const { utcChange, textShadow, handleTextShadow } = props;
	
	return (
		<article>
			<TopButtons utcChange={utcChange} textShadow={textShadow} handleTextShadow={handleTextShadow} />
			<UTCSelector utcChange={utcChange} textShadow={textShadow} />
		</article>
	);
}