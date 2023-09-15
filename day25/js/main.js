var main = document.querySelector('.main');
var buttonParents = document.getElementById('button-parents');
var form = document.querySelector('#form');
var layout = document.querySelector('.background');
var signUpBtn = form.querySelector('#sign-up');
var registBtn = form.querySelector('#regist');
var signUpForm = form.querySelector('.sign-up-form');
var registerForm = form.querySelector('.register-form');
var inputText = form.querySelectorAll('input[type="text"]');
var inputEmail = form.querySelectorAll('input[type="email"]');
var inputPass = form.querySelectorAll('input[type="password"]');
var signUpSubmit = form.querySelector('#sign-up-submit');
var registSubmit = form.querySelector('#regist-submit');
var errorAccount = form.querySelector('.error-account');
var error = form.querySelector('.error');

buttonParents.onclick = () => {
    form.classList.remove('d-none');
    layout.classList.add('layout');
}

layout.onclick = () => {
    form.classList.add('d-none');
    layout.classList.remove('layout');
}

signUpBtn.onclick = () => {
    signUpForm.classList.remove('d-none');
    registerForm.classList.add('d-none');
    signUpBtn.style.color = '#000';
    signUpBtn.style.background = '#fff';
    registBtn.style.color = 'gray';
    registBtn.style.background = '#80808033';
}

registBtn.onclick = () => {
    registerForm.classList.remove('d-none');
    signUpForm.classList.add('d-none');
    signUpBtn.style.color = 'gray';
    signUpBtn.style.background = '#80808033';
    registBtn.style.color =  '#000';
    registBtn.style.background = '#fff';
}






