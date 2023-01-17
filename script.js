const btnLogin = document.getElementById('btn-login');
const btnSubmit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const contador = document.getElementById('counter');
const textarea = document.getElementById('textarea');

btnLogin.addEventListener('click', () => {
  const email = document.getElementById('email');
  const senha = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  if (agreement.checked) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', false);
  }
});

textarea.addEventListener('keyup', () => {
  contador.innerHTML = +(500 - textarea.value.length);
});
