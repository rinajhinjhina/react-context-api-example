import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Hello = () => {
	return (
		<Fragment>
			<Header>Well hello there, stranger</Header>
			<p>
				Click <Link to="/login">here</Link> to login
			</p>
		</Fragment>
	);
};

export default Hello;
