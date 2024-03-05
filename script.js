const registration = document.getElementById('registrationForm');
const passwordInput = document.getElementById('password');
const confirmedPassword = document.getElementById('confirmPassword');
const messageContainer = document.getElementById('messageContainer')

registration.addEventListener('submit', function(e) {
    if(passwordInput.value !== confirmedPassword.value ) {
        e.preventDefault();
        showMessage('Passwords do not match. Please try again', 'red');
    }
});

function showMessage(message, color) {
    messageContainer.textContent = message;
    messageContainer.style.color = color;
}