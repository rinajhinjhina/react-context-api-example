export default (formData) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (formData.username === 'Rohan' && formData.password === 'rohan123' ? true : false) {
				resolve(formData.username);
			} else {
				reject('Username and password is incorrect');
			}
		}, 1000);
	});
};
