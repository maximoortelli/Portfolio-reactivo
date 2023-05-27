document.addEventListener("DOMContentLoaded", function() {

    var form = document.querySelector("form");

    var emailInput = form.querySelector('input[type="email"]');

    var submitButton = form.querySelector("button[type='submit']");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      if (emailInput.value.toLowerCase() !== emailInput.value) {

        var errorMessage = document.createElement("div");
        errorMessage.classList.add("error-message");

        var errorMessageContent = document.createElement("div");
        errorMessageContent.classList.add("error-message-content");

        var errorMessageText = document.createElement("span");
        errorMessageText.classList.add("error-message-text");
        errorMessageText.textContent = "Please enter the email in lowercase.";

        var errorMessageClose = document.createElement("span");
        errorMessageClose.classList.add("error-message-close");
        errorMessageClose.textContent = "X";

        errorMessageClose.addEventListener("click", function() {
          errorMessage.remove();
        });

        errorMessageContent.appendChild(errorMessageText);
        errorMessageContent.appendChild(errorMessageClose);
        errorMessage.appendChild(errorMessageContent);
        form.appendChild(errorMessage);
      } else {
        form.submit();
      }
    });
  });