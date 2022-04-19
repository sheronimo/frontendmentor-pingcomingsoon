const email = document.querySelector('#email');
const form = document.querySelector('#subscribe-form');
const error = document.querySelector('#error');

form.addEventListener('submit', (e) => {
	let errorMessage = '';

	// regex for email format
	const pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

	if (email.value === '' || email.value == null) {
		errorMessage = 'Email address cannot be left blank.';
	} else if (!pattern.test(email.value)) {
		errorMessage = 'Please provide a valid email address.';
	}

	if (errorMessage.length > 0) {
		e.preventDefault();
		error.innerText = errorMessage;
		error.style.display = 'block';
		email.style.borderColor = 'hsl(354, 100%, 66%)';
	}
});
