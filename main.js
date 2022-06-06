const signUpButton = document.querySelector('#signUp');
const signInButton = document.querySelector('#signIn');
const container = document.querySelector('#container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right_panel_active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right_panel_active");
});