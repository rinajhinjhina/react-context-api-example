import React, { useState, Fragment } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import isLoggedIn from '../auth';

const LoginForm = () => {
	const [ loading, setLoading ] = useState(false);
	const [ formData, setFormData ] = useState({
		username: '',
		password: ''
	});

	function onChange(event) {
		const { name, value } = event.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	}

	function attemptLogin(event) {
		event.preventDefault();
		setLoading(true);
		setLoading(false);
	}

	return (
		<Fragment>
			<Link to="/">Back to home</Link>
			<form onSubmit={attemptLogin}>
				<input
					type="text"
					name="username"
					value={formData.username}
					onChange={onChange}
					placeholder="Username"
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={formData.password}
					onChange={onChange}
				/>
				<button type="submit" disabled={loading}>
					{!!loading && <Spinner width="15px" />}
					<span>{!!loading ? 'Please wait' : 'Log In'}</span>
				</button>
			</form>
		</Fragment>
	);
};

export default LoginForm;
