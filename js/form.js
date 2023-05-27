const form = document.querySelector('form');

const emailInput = document.querySelector('input[type="email"]');

const errorMessage = document.createElement('p');
errorMessage.classList.add('error-message');

form.addEventListener('submit', function(event) {

    if(emailInput.Value != emailInput.value.toLowerCase()) {

    errorMessage.textContent = 'Email must be in lowercase';    
    form.appendChild(errorMessage);

    event.preventDefault();
    }
});