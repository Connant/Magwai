
//  Открытие и закрытие формы

function popup() {
  const btn = document.querySelectorAll('.popup-button');
  const popup = document.querySelector('.popup');
  const btnClose = document.querySelector('.form__close');
  const popupBg = document.querySelector('.popup__background');

  btn.forEach(e => {
    e.addEventListener('click', function () {
      popup.classList.toggle('popup--active')
      if (!document.body.classList.contains('overflow')) {
        document.body.classList.toggle('overflow');
      } else {
        document.body.classList.remove('overflow');
      }
    })
  })
  function colse() {
    popup.classList.remove('popup--active')
    if (!document.body.classList.contains('overflow')) {
      document.body.classList.toggle('overflow');
    } else {
      document.body.classList.remove('overflow');
    }
  }
  btnClose.addEventListener('click', colse)
  popupBg.addEventListener('click', colse)
}

popup()


// Валидация формы
// https://realadmin.ru/coding/valid-field-js.html

const form = document.querySelector('.popup__form')
const formInputs = document.querySelectorAll('.popup__input')
const inputEmail = document.querySelector('.form__email')
const inputPhone = document.querySelector('.form__tel')


function validateEmail(email) {
  const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  return re.test(String(email).toLowerCase());
}


function validatePhone(phone) {
  const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/
  return re.test(String(phone));
}


form.onsubmit = function () {

  let emailValue = inputEmail.value
  let phoneValue = inputPhone.value
  let emptyInputs = Array.from(formInputs).filter(input => input.value === '')

  if(emptyInputs.length !== 0) {
    alert('Пожалуйста, заполните все поля')
    return false;
  }

  if(!validateEmail(emailValue)) {
    alert('Пожалуйста, введите корректный email-адрес');
    return false;
  }

  if (!validatePhone(phoneValue)) {
    alert('Пожалуйста, введите корректный номер телефона');
    inputPhone.classList.add('error');
    return false;
  }

  alert('Форма отправлена')
}
