// Buttons
const headerButton = document.querySelector(".header__button");
const openContactButton = document.querySelectorAll(".button__contact-open")
const burgerButton = document.querySelector(".header__burger")

// Popup
const popupContact = document.querySelector(".popup__contact")
const menu = document.querySelector(".menu__right")
const popups = document.querySelectorAll(".popup")
const menus = document.querySelectorAll(".menu")

// Функции
function handleOpenPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', handleKeyEscape);
}

function handleClosePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', handleKeyEscape);
}

function handleKeyEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    handleClosePopup(openedPopup);
  }
}

// закрывает любой попап
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      handleClosePopup(popup);
    };
    if (evt.target.classList.contains("popup__close")) {
      handleClosePopup(popup);
    };
  });
});

menus.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      handleClosePopup(popup);
    };
    if (evt.target.classList.contains("popup__close")) {
      handleClosePopup(popup);
    };
    if (evt.target.classList.contains("header__link")) {
      handleClosePopup(popup);
    };
    if (window.outerWidth > 600) {
      handleClosePopup(popup);
    };
  });
});

burgerButton.addEventListener("click", function () {
  handleOpenPopup(menu)
})

openContactButton.forEach(element =>
  element.addEventListener("click", function () {
    handleOpenPopup(popupContact);
  }));

// allButtons.addEventListener("click", function() {
//     handleOpenPopup(popupContact)
// });


// Вызов в onlick. Переход в url с параметром target="_blank"
function blankUrl(url) {
  window.open(url, '_blank');
}

const elements = document.querySelectorAll('.offer__title span');

function redraw() {
  for (let i = 0; i < elements.length; ++i) {
    // массив с текстами, не ограниченный границами государств и законами материи
    let arr = ['фронтендером', 'веб разработчиком'];
    // получение случайного значения из безграничного массива
    let rand = Math.floor(Math.random() * arr.length);
    elements[i].textContent = arr[rand];
    elements[i].classList.remove('hide');
  };

  setTimeout(redraw, 3000);
}
redraw();
