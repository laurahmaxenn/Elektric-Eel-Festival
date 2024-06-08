document.addEventListener("DOMContentLoaded", function () {
  //   alert("Window ready");
  var menu = document.getElementById("menu");
  var popup = document.getElementById("popup");
  var closePopup = document.getElementById("close-popup");

  setTimeout(() => {
    toggleHiddenElement(popup);
  }, 3000);

  menu.addEventListener("click", function (event) {
    console.log("menu opened...");
  });

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
