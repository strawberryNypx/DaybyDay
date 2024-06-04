function menuShow() {
  let steps = document.querySelector(".steps");
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".menu-icon").src = "assets/img/menu_white_36dp.svg";
    steps.style.display = "flex";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".menu-icon").src =
      "assets/img/close_white_36dp.svg";
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

function feedbackCarousel() {
  let count = 0;
  const feedbacks = document.querySelectorAll(".fb-box");
  const intervalTime = 4000;
  let intervalId;

  function showFeedback(index) {
    feedbacks.forEach((box) => (box.style.display = "none"));
    feedbacks[index].style.display = "flex";
  }

  function showNextFeedback() {
    count = (count + 1) % feedbacks.length;
    showFeedback(count);
  }

  function showPreviousFeedback() {
    count = (count - 1 + feedbacks.length) % feedbacks.length;
    showFeedback(count);
  }

  const startInterval = () =>
    (intervalId = setInterval(showNextFeedback, intervalTime));

  const stopInterval = () => clearInterval(intervalId);

  startInterval();

  document.querySelector(".next-fb").addEventListener("click", () => {
    showNextFeedback();
    stopInterval();
    startInterval();
  });

  document.querySelector(".prev-fb ").addEventListener("click", () => {
    showPreviousFeedback();
    stopInterval();
    startInterval();
  });

  showFeedback(count);
}

document.addEventListener("DOMContentLoaded", feedbackCarousel);

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

//dropdonw do Sobre no menu
function dropdownAberto() {
  document.querySelector(".details").open = true;
}
//fechar automaticamente o FAQ

const perguntas = document.querySelectorAll(".openable");

perguntas.forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) openFAQElement(detail);
  });
});

function openFAQElement(target) {
  perguntas.forEach((detail) => {
    if (detail !== target) {
      detail.open = false;
    }
  });
}

// Tratamento de dados recebidos pelo Form
document.addEventListener("DOMContentLoaded", () => {
  const formSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    showThankYouPopup();

    fetch(form.action, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        console.log("response", response);
        if (!response.ok) {
          const text = await response.text();
          throw new Error(
            `HTTP error! status: ${response.status}, response: ${text}`
          );
        }

        return response.json();
      })
      .catch((error) => {
        console.error("Error", error);
      });

      form.reset();
  };

  const showThankYouPopup = () => {
    const popup = document.getElementById("thank-you-popup");
    console.log("Popup element: ", popup);
    if (popup) {
      popup.classList.remove("hidden");
    } else {
      console.error("Popup not found");
    }
  };

  const closePopup = () => {
    const popup = document.getElementById("thank-you-popup");
    if (popup) {
      popup.classList.add("hidden");
    } else {
      console.error("Popup not found.");
    }
  };

  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("popup")) {
      event.target.style.display = "none";
    }
  });

  const form = document.getElementById("join-form");
  const closePopupButton = document.getElementById("close-popup");

  if (form) {
    form.addEventListener("submit", formSubmit);
  } else {
    console.error("Form not found.");
  }

  if (closePopupButton) {
    closePopupButton.addEventListener("click", closePopup);

  } else {
    console.error("Close popup button not found.");
  }
});
