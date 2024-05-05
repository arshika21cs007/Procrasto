document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add sign-up logic here
  });
  
  document.getElementById('continueButton').addEventListener('click', function() {
    document.querySelector('.welcome-container').style.display = 'none';
    document.querySelector('.form-container').style.display = 'flex';
  });
  document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add sign-up logic here if needed
    // Redirect to the tasks page
    window.location.href = 'tasks.html';
  });
