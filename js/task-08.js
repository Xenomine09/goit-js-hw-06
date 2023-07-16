const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Все поля должны быть заполнены');
    return; 
  }
    
  const formData = {
    email: emailInput.value,
    password: passwordInput.value
  };
  console.log(formData);
  loginForm.reset();
});