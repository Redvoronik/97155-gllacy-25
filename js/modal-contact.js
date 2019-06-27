  var link = document.querySelector(".button-contact");
  var popup = document.querySelector(".modal-contact");
  var overlay = document.querySelector(".full-overlay");
  var close = popup.querySelector(".modal-close");
  var yourname = popup.querySelector("[name=contact-name]");
  var email = popup.querySelector("[name=contact-email]");
  var message = popup.querySelector("[name=contact-message]");
  var form = popup.querySelector("form");
  var isStorageSupport = true;
  var storageName = "";
  var storageEmail = "";

  try {
    storageName = localStorage.getItem("yourname");
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("full-overlay-show");
    if (storageName) {
      yourname.value = storageName;
      email.focus();
    } else {
      yourname.focus();
    }
    if (storageEmail) {
      email.value = storageEmail;
      message.focus();
    } else {
      yourname.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("full-overlay-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!yourname.value || !email.value || !message.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("yourname", yourname.value);
        localStorage.setItem("email", email.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("full-overlay-show");
      }
    }
  });
