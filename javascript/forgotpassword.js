document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.querySelector(".container button");
    const emailInput = document.querySelector(".container input[type='email']");
    const backToLoginLink = document.querySelector(".back-to-login a");

    resetButton.addEventListener("click", function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {
            alert("Please enter your email address.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert(`A reset link has been sent to ${email}.`);
            emailInput.value = "";
        }
    });
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    backToLoginLink.addEventListener("click", function() {
        alert("Redirecting to login page...");
    });
});



