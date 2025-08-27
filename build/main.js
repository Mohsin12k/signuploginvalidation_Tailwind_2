// footer

const datetime = document.querySelector('.footer_date');
const date = new Date();
const newYear = date.toLocaleDateString('en-US', {
    weekday: "long",
    day: "numeric",
    year: "numeric"
});
datetime.textContent = newYear;

// header and main

const closeBtn = document.querySelector('.closeBtn');
const signupBtn = closeBtn.querySelector('i');
const shuffleText = document.querySelector('.shuffleText');
const goToLogin = document.querySelector('.goToLogin');
const goToSignUp = document.querySelector('.goToSignUp');
const loginSection = document.querySelector('.loginSection');
const signUpSection = document.querySelector('.signUpSection');
const showHideLoginSign = document.querySelector('.showHideLoginSign');
const headerSignup = document.querySelector('.headerSignup');

closeBtn.addEventListener('click', ()=>{
  if(signupBtn.classList.contains('fa-solid')){

    signupBtn.classList.remove('fa-solid');
    closeBtn.classList.remove('after:close');
    closeBtn.classList.remove('before:close');
    shuffleText.textContent = 'Close';
    headerSignup.textContent = 'SignUp';
    showHideLoginSign.classList.remove('transHide');
    showHideLoginSign.classList.add('transShow');

    signUpSection.classList.add('show');
    signUpSection.classList.remove('hide');
    loginSection.classList.add('hide');
    clear();

  } else {
        signupBtn.classList.add('fa-solid');
        closeBtn.classList.add('after:close');
        closeBtn.classList.add('before:close');
        shuffleText.textContent = 'SignUp';
        showHideLoginSign.classList.add('transHide');
        showHideLoginSign.classList.remove('transShow');
  }
});

goToLogin.addEventListener('click', ()=>{
    signUpSection.classList.add('hide');
    signUpSection.classList.remove('show');

    loginSection.classList.remove('hide');
    loginSection.classList.add('show');

    headerSignup.textContent = 'Login';
});

goToSignUp.addEventListener('click', ()=>{
    loginSection.classList.remove('show');
    loginSection.classList.add('hide');

    signUpSection.classList.add('show');
    signUpSection.classList.remove('hide');

    headerSignup.textContent = 'Signup';
});

// form logic

const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('rep-password');
const emailLoginInput = document.getElementById('email_lg');
const passwordLoginInput = document.getElementById('password_lg');
const signUpButton = document.querySelector('.signupButton');
const loginButton = document.querySelector('.loginButton');


signUpButton.addEventListener('click', (e)=>{
  
  let errors = [];

    errors = signupFunction(usernameInput.value, emailInput.value, passwordInput.value, repeatPasswordInput.
    value);

  if(errors.length > 0) {
    e.preventDefault();
    alert(errors.join('. '));
  }
});

loginButton.addEventListener('click', (e)=>{
  
  let errors = [];

    errors = loginFunction(emailLoginInput.value, passwordLoginInput.value);
   
  if(errors.length > 0) {
    e.preventDefault();
    alert(errors.join('. '));
  }
});


const signupFunction = (username, email, password, repeatPassword) => {
  let errors = [];

  if(username === '' || username === null){
    errors.push('Username Required?')
    usernameInput.parentElement.classList.add('incorrect');
  }
  if(email === '' || email === null){
    errors.push('Email is Required?')
    emailInput.parentElement.classList.add('incorrect');
  }
  if(password === '' || password === null){
    errors.push('Password is Required?')
    passwordInput.parentElement.classList.add('incorrect');
  }
  if(password.length < 8){
    errors.push('Enter 8 Characters Password');
    passwordInput.parentElement.classList.add('incorrect');
  }
  if(repeatPassword === '' || repeatPassword === null) {
    errors.push('repeat password is required');
    repeatPasswordInput.parentElement.classList.add('incorrect');
  }
  if(repeatPassword !== password) {
    errors.push('Password Does not Match');
    repeatPasswordInput.parentElement.classList.add('incorrect');
    passwordInput.parentElement.classList.add('incorrect');
  }

  return errors;
}

const allInput = [usernameInput, emailInput, passwordInput, repeatPasswordInput,emailLoginInput, passwordLoginInput].filter(input => input != null);

allInput.forEach(input =>{
  input.addEventListener('input', ()=>{
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect');
    }
  });

input.addEventListener('keydown', (e)=>{

  if(e.key === 'Enter'){

    e.preventDefault();

    if(signUpSection.contains(input)){
      const errors = signupFunction(usernameInput.value, emailInput.value, passwordInput.value, repeatPasswordInput.value);
      if(errors.length > 0) alert(errors.join('. '));
    }
     else {
      const errors = loginFunction(emailLoginInput.value, passwordLoginInput.value);
      if(errors.length > 0) alert(errors.join('. '));
     }
  }

});

});


const loginFunction = (email, password) => {
  let errors = [];

  if(email === '' || email === null){
    errors.push('Email is Required?')
    emailLoginInput.parentElement.classList.add('incorrect');
  }
  if(password === '' || password === null){
    errors.push('Password is Required?')
    passwordLoginInput.parentElement.classList.add('incorrect');
  }

  return errors;
};

const clear = () =>{
  usernameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  repeatPasswordInput.value = '';
  emailLoginInput.value = '';
  passwordLoginInput.value = '';
}