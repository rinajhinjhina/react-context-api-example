import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import authContext from '../store';

const Hello = () => {
	const [ { isLoggedIn, username }, dispatch ] = useContext(authContext);
	const logOut = () => {
		dispatch({
			type: 'LOGOUT'
		});
	};
	return (
		<Fragment>
			<Header>{`Well hello there, ${isLoggedIn ? username : 'stranger'}`}</Header>
			{isLoggedIn ? (
				<p>
					Click <Link to="/" onClick={logOut}>here</Link> to logout
				</p>
			) : (
				<p>
					Click <Link to="/login">here</Link> to login
				</p>
			)}
		</Fragment>
	);
};

export default Hello;
