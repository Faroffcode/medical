document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const appointmentForm = document.getElementById('appointment-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add login functionality here
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add signup functionality here
        });
    }

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add appointment booking functionality here
        });
    }

    // Function to fetch and display pathology labs
    function fetchPathologyLabs() {
        // Fetch logic here
    }

    // Function to fetch and display medical shops
    function fetchMedicalShops() {
        // Fetch logic here
    }

    // Function to fetch and display doctors
    function fetchDoctors() {
        // Fetch logic here
    }

    // Call functions to populate data on page load
    fetchPathologyLabs();
    fetchMedicalShops();
    fetchDoctors();
});