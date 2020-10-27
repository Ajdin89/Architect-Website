// TOGGLE HAMBURGER MENU
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

const mobileMenu = () => {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// FORM VALIDATION
const form = document.querySelector('#form');
const submit = document.querySelector('#btn_submit');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	return checkInputs();
})

function checkInputs() {
	const nameValue = name.value.trim()
	const emailValue = email.value.trim();
	const passValue = password.value.trim();
	const passCheckValue = passwordCheck.value.trim();

	if (nameValue === '') {
		setError(name, 'Name is required')
	} else {
		setValid(name)
	}
	
	if (emailValue === '') {
		setError(email, 'Email is required!')
	} else if (!isEmail(emailValue)) {
		setError(email, 'Not valid email!')
	} else {
		setValid(email)
	}

	if (passValue === '') {
		setError(password, 'Password is required!')
	} else if (passValue.length < 6) {
		setError(password, 'Password must be longer than 6 characters!')
	} else {
		setValid(password)
	}

	if (passCheckValue === '') {
		setError(passwordCheck, 'Please re-type your password!')
	} else if (passCheckValue.length < 6) {
		setError(passwordCheck, 'Password must be longer than 6 characters.')
	} else if (passCheckValue !== passValue) {
		setError(passwordCheck, 'Input does not match!')
	} else {
		setValid(passwordCheck)
	}
}

/* Check Error */
function setError(input, msg) {
	let inputControl = input.parentElement;
	let smallText = inputControl.querySelector('small');
	inputControl.className = 'input_group error';
	smallText.innerText = msg;
}

/* Check Valid */
function setValid(input) {
	let inputControl = input.parentElement;
	inputControl.className = 'input_group valid';
}

/* Check Email */
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}