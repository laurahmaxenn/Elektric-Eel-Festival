document.addEventListener("DOMContentLoaded", function () {
  var popup = document.getElementById("popup");
  var closePopup = document.getElementById("close-popup");

  setTimeout(() => {
    toggleHiddenElement(popup);
  }, 3000);

  closePopup.addEventListener("click", function (event) {
    toggleHiddenElement(popup);
  });
});

function toggleHiddenElement(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

function openBurgerMenu() {
  console.log("openBurgerMenu")
  var menu = document.getElementById('burger-menu');
  menu.classList.remove('hidden');
}

function closeBurgerMenu() {
  console.log("closeBurgerMenu")
  var menu = document.getElementById('burger-menu');
  menu.classList.add('hidden');
}


