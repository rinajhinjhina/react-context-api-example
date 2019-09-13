export default (formData) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (formData.username === 'Rohan' && formData.password === 'rohan123' ? true : false) {
				return resolve({
					username: formData.username,
					loggedInAt: Date.now() / 1000
				});
			}
		}, 1000);
	});
};
