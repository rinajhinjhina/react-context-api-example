import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import authContext from '../store';

const Hello = () => {
	const auth = useContext(authContext);
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
