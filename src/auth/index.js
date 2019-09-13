export default (formData) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (formData.username === 'Rohan' && formData.password === 'rohan123' ? true : false) {
				resolve({
					isLoggedIn: true,
					username: formData.username,
					loggedInAt: Date.now() / 1000
				});
			} else {
				reject({
					isLoggedIn: false,
					loginFailedAt: Date.now() / 1000
				});
			}
		}, 1000);
	});
};
