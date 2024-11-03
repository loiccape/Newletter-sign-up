const form = document.getElementById("emailForm");
const errorMessage = document.getElementById("errorMessage")
const onFormSubmit = function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email')
    if (!emailInput.value || !emailInput.checkValidity()) {
        
        errorMessage.textContent = "Please enter a valid email address";
        errorMessage.style.display = 'block';
        emailInput.style.backgroundColor= "rgba(255, 97, 85, 0.5)";
        emailInput.style.border ="1px solid rgba(255, 97, 85)"
        emailInput
    } else {
        window.location.href = "./thanks.html"
    }
};

form.addEventListener("submit", onFormSubmit);
