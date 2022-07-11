import { big_mobile_width, tablet_width } from './const.js'

function header() {
  const btn = document.querySelector('.page-header__menu-btn');
  const nav = document.querySelector('.main-nav__list');
  const contactsWrapper = document.querySelector('.page-header__contacts');

  btn.addEventListener('click', function () {
    if (document.documentElement.clientWidth <= big_mobile_width) {
      contactsWrapper.classList.toggle('close_menu')
    }
    nav.classList.toggle('close_menu')

  })

  if (document.documentElement.clientWidth <= tablet_width) {
    nav.classList.add('close_menu')
  }

  if (document.documentElement.clientWidth <= big_mobile_width) {
    contactsWrapper.classList.add('close_menu')
  }

  window.addEventListener("resize", function () {
    if (document.documentElement.clientWidth > tablet_width) {
      nav.classList.remove('close_menu')
    }
  })

}

header()
