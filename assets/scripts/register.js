(function () {
    
    // Get the registration <form> element from the DOM.
    let form = document.getElementById("registration-form");
    let submitButton = form.querySelector("button");
    // Get the <input> elements from the DOM.
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirm-password");

    let checkPasswords = function() {
        let passwordsMatch = passwordInput.value === confirmPasswordInput.value;
        if (passwordsMatch) {
            // Clear any previous error message.
            confirmPasswordInput.setCustomValidity("");
        } else {
            // Setting this error message will prevent the form from being submitted.
            confirmPasswordInput.setCustomValidity("Las contraseñas no coinciden.");
        }
    };

    let addPasswordInputEventListeners = function() {
        passwordInput.addEventListener("input", checkPasswords, false);
        confirmPasswordInput.addEventListener("input", checkPasswords, false);
    };

    let formSubmissionAttempted = function() {
        form.classList.add("submission-attempted");
    };

    let addSubmitClickEventListener = function() {
        submitButton.addEventListener("click", formSubmissionAttempted, false);
    };

    addPasswordInputEventListeners();
    addSubmitClickEventListener();

}());
