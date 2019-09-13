import React, { useReducer } from 'react';
import './App.css';
import Landing from './components/Router';
import { Provider } from './store';
import { authReducer, initialAuthState } from './reducers/authReducer';

function App() {
	const useAuthState = useReducer(authReducer, initialAuthState);
	return (
		<Provider value={useAuthState}>
			<Landing />
		</Provider>
	);
}

export default App;
