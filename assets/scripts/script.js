function menuShow() {
  let steps = document.querySelector(".steps");
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
    steps.style.display = "flex";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
    steps.style.display = "none";
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
  }, 4000);
}

carousel();

const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".step-form");
const slides = document.querySelectorAll(".slide-form");
let stepsNum = 0;
let controlSlide = 1;

function changeSlide(n) {
  let currentSlide = document.getElementById(`slide-form-${controlSlide}`);
  currentSlide.classList.remove("goforward", "goback");
  currentSlide.style.display = "none";

  if (n > 0) {
    controlSlide += n;
    let nextSlide = document.getElementById(`slide-form-${controlSlide}`);
    nextSlide.classList.add("goforward");
    nextSlide.style.display = "block";
    stepsNum++;
    updateProgress();
    updateButtons(nextSlide);
  } else {
    controlSlide += n;
    let nextSlide = document.getElementById(`slide-form-${controlSlide}`);
    nextSlide.classList.add("goback");
    nextSlide.style.display = "block";
    stepsNum--;
    updateProgress();
    updateButtons(nextSlide);
  }
}

function updateButtons(cs) {
  const backBtn = document.querySelector(".back-btn");
  const nextBtn = document.querySelector(".next-btn");
  const submitBtn = document.querySelector(".submit-btn");

  const firstSlide = document.getElementById("slide-form-1");
  const lastSlide = document.getElementById("slide-form-5");

  if (cs === lastSlide) {
    backBtn.style.display = "block";
    submitBtn.style.display = "block";
    nextBtn.style.display = "none";
  } else if (cs === firstSlide) {
    backBtn.style.display = "none";
    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
  } else {
    backBtn.style.display = "block";
    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
  }
}

function updateProgress() {
  formSteps.forEach((formStep, index) => {
    if (index < stepsNum + 1) {
      formStep.classList.add("active");
    } else {
      formStep.classList.remove("active");
    }
  });

  const progressActive = document.querySelectorAll(".step-form.active");
  progress.style.width =
    ((progressActive.length - 1) / (formSteps.length - 1)) * 100 + "%";
}

function dropMoreOptions() {
  let nivelIngles = document.getElementById("nivel-ingles");
  let radiosNivel = document.getElementsByName("nivel do ingles");
  let jaEstudou = document.getElementById("ja-estudou");

  if (jaEstudou.checked) {
    nivelIngles.style.display = "block";
  } else {
    radiosNivel.forEach((i) => (i.checked = false));
    nivelIngles.style.display = "none";
  }
}

var inputTel = document.getElementById("telefone");

inputTel.addEventListener("input", function () {
  let formattedTel = this.value.replace(/\D/g, "");
  formattedTel = formattedTel.replace(
    /(\d{2})(\d{1})(\d{1,4})(\d{1,4})/,
    "($1) $2 $3-$4"
  );
  this.value = formattedTel;
});
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
function dropdownAberto() {
  document.querySelector(".details").open = true;
}

// Tratamento de dados recebidos pelo Form

const formSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch("https://api.sheetmonkey.io/form/hGjrD1zacWrPAAu4LMLgei", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Sucess", result);
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

document.querySelector(".slide-form").addEventListener("submit", formSubmit);
