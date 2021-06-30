const openPopup = document.querySelector(".popup-link");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close-popup");
const modal = document.querySelector(".popup__body");
const popupForm = popup.querySelector(".modal-form");
const loginName = popup.querySelector(".user-name");
const loginEmail = popup.querySelector(".user-email");


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

openPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");

  if (storage) {
    loginName.value = storage;
    loginEmail.focus();
  } else {
    loginName.focus();
  }
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

popupForm.addEventListener("submit", function (evt) {
  if (!loginName.value || !loginEmail.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", loginName.value);
    }
  }
});

window.onclick = function (event) {
  if (event.target == modal) {
    popup.classList.remove("popup-show");
  }
};

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});

