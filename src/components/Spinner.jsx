import React from 'react';
import spinner from './spinner.gif';

const Spinner = (props) => {
	const width = props.width || '10px';
	return <img src={spinner} alt={spinner} width={width} />;
};

export default Spinner;
