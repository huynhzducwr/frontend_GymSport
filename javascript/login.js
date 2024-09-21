document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const formSlider = document.querySelector(".form-slider");

    loginBtn.addEventListener("click", function() {
        // Switch to Login
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
    

        // Update button styles
        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
    });

    signupBtn.addEventListener("click", function() {
        // Switch to Sign Up
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
        

        // Update button styles
        signupBtn.classList.add("active");
        loginBtn.classList.remove("active");
    });
});
