function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
  }
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    menuShow();
  });
});

function carousel() {
  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 3) {
      counter = 1;
    }
  }, 7000);
}

carousel();

//dropdonw do Sobre no menu
function menuDropdown() {
  const dropContent = document.querySelector(".drop-content");
  if (dropContent.classList.contains("open")) {
    dropContent.classList.remove("open");
    document.querySelector(".drop-icon").src = "assets/img/down-arrow.png";
  } else {
    dropContent.classList.add("open");
    document.querySelector(".drop-icon").src = "assets/img/up-arrow.png";
  }
}

//dropdown das perguntas
