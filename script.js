// *******************  CAROUSEL ****************

let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-slide";
}

// ********************* ANIMATION-FADE ************************
const animateArea = document.querySelectorAll(".animate-area");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("custom-fade");
      observer.unobserve(entry.target);
    }
  });
});

animateArea.forEach((item) => {
  observer.observe(item);
});

// **************** MENU ********************

const sideBar = document.querySelector("#side-bar");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
document.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
  }
});

if (menu) {
  menu.addEventListener("click", () => {
    sideBar.classList.add("show");
    menu.style.display = "none";
    close.style.display = "block";
  });
}

if (close) {
  close.addEventListener("click", () => {
    sideBar.classList.remove("show");
    menu.style.display = "block";
    close.style.display = "none";
  });
}

// ABOUT-SECTION

const arrayOfPhotosAbout = [
  "./images/about-imgs/1.png",
  "./images/about-imgs/2.png",
  "./images/about-imgs/3.png",
  "./images/about-imgs/4.png",
  "./images/about-imgs/5.png",
  "./images/about-imgs/6.png",
  "./images/about-imgs/7.png",
  "./images/about-imgs/1.png",
];

const arrayOfNumber = ["01", "02", "03", "04", "05", "06", "07"];

let current = 0;
const mainPhoto = document.querySelector(".main-photo");
const parallax = document.querySelector(".parallax");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const number = document.querySelector(".history-number");

function updateButtons() {
  btnNext.disabled = current === arrayOfPhotosAbout.length - 2;
  btnPrev.disabled = current === 0;
}

function changeImage(direction) {
  if (direction === "previous") {
    current--;
  } else {
    current++;
  }

  mainPhoto.src = arrayOfPhotosAbout[current];
  parallax.src = arrayOfPhotosAbout[current + 1];
  number.textContent = arrayOfNumber[current];

  updateButtons();
}

function toggleText(textId) {
  const hiddenText = document.querySelector(`#${textId} .hidden-text`);
  const readMoreBtn = document.querySelector(`#${textId} + .read-more-btn`);
  const ellipsis = document.querySelector(`#${textId} .ellipsis`);

  const isHidden =
    hiddenText.style.display === "none" || !hiddenText.style.display;

  hiddenText.style.display = isHidden ? "inline" : "none";
  ellipsis.style.display = isHidden ? "none" : "inline";
  readMoreBtn.textContent = isHidden ? "Read Less" : "Read More";
}

updateButtons();

// SETTING-SECTION
function scrollElement(e) {
  sideBar.classList.remove("show");
  menu.style.display = "block";
  let element = document.getElementById(`${e}`);
  element.scrollIntoView({ block: "start", behavior: "smooth" });
}

const arrayOfImages = [
  { title: "mountains", src: "./images/setting-imgs/Mountains.png" },
  { title: "wineyard", src: "./images/setting-imgs/Vineyard.png" },
  { title: "sports", src: "./images/setting-imgs/Sports.png" },
  { title: "spa", src: "./images/setting-imgs/SPA1.png" },
];

const settingTitle = document.querySelector(".setting-title");
const btnNextSetting = document.querySelector(".btn-next-setting");
const btnPrevSetting = document.querySelector(".btn-prev-setting");
const centerPhoto = document.querySelector(".center-photo");
const leftPhoto = document.querySelector(".left-photo");
const topPhoto = document.querySelector(".top-photo");
const rightPhoto = document.querySelector(".right-photo");
btnPrevSetting.disabled = true;

let settingPhoto = 0;

function getImageIndex(index, arrayLength) {
  return (index + arrayLength) % arrayLength;
}

function changeImageSetting(val) {
  settingPhoto = val === "previous" ? settingPhoto - 1 : settingPhoto + 1;
  const arrayLength = arrayOfImages.length;

  centerPhoto.src = arrayOfImages[getImageIndex(settingPhoto, arrayLength)].src;
  leftPhoto.src =
    arrayOfImages[getImageIndex(settingPhoto - 1, arrayLength)].src;
  topPhoto.src =
    arrayOfImages[getImageIndex(settingPhoto - 2, arrayLength)].src;
  rightPhoto.src =
    arrayOfImages[getImageIndex(settingPhoto + 1, arrayLength)].src;

  settingTitle.textContent = arrayOfImages[settingPhoto].title;

  btnNextSetting.disabled = settingPhoto === arrayLength - 1;
  btnPrevSetting.disabled = settingPhoto === 0;
}

// ******* SECTION - VILLA ***************

const centuries = [
  {
    images: [
      "./images/villa/19th-wood.jpg",
      "./images/villa/19th-wood-3.jpg",
      "./images/villa/19th-wood-2.jpg",
    ],
    description: "Experience the synthesis of old-world charm and the future.",
  },
  {
    images: [
      "./images/villa/20th-brick-1.jpg",
      "./images/villa/20th-brick-3.jpg",
      "./images/villa/20th-brick-2.jpg",
    ],
    description:
      "Capture the senses of diversity with postmodernism approach to design.",
  },
  {
    images: [
      "./images/villa/21st-stone-1.jpg",
      "./images/villa/21th-stone-2.png",
      "./images/villa/21th-stone-3.png",
    ],
    description:
      "Live the contemporary lifestyle in harmony with new techniques.",
  },
];

const centuryNumber = document.querySelector(".century-number");
const villaDesc = document.querySelector(".villa-description");
const centuryButtons = document.querySelectorAll(".century-btn");
const villa1 = document.querySelector(".villa-1-photo");
const villa2 = document.querySelector(".villa-2-photo");
const villa4 = document.querySelector(".villa-4-photo");

function changeCentury(index) {
  villa1.src = centuries[index].images[0];
  villa2.src = centuries[index].images[1];
  villa4.src = centuries[index].images[2];
  centuryNumber.textContent = index + 19;
  villaDesc.textContent = centuries[index].description;

  centuryButtons.forEach((btn, i) => {
    btn.style.color = i === index ? "#386741" : "#393939";
  });
}

// Initial setup
changeCentury(0);
centuryButtons.forEach((btn) => {
  const index = parseInt(btn.getAttribute("data-index"));
  btn.addEventListener("click", () => changeCentury(index));
});

// *********** SECTION-SERVICE **************

const serviceLists = [
  {
    numbers: ["01", "04", "07", "10", "13"],
    titles: [
      "Event Planning",
      "Equipment Rental",
      "Entertainment",
      "Helipad",
      "Top chefs for pop-up dinner",
    ],
    details: [
      "Private arrangement of your event with all details taken into consideration.",
      "Bikes, tennis and basketball accessories.",
      "Tsinandali Festival, Jazz & Wine Festival. Priority ticketing and special discounts.",
      "Owners can benefit from the flight service at an extra cost.",
      "Bringing a truly gastronomic experience to one’s doorstep.",
    ],
  },
  {
    numbers: ["02", "05", "08", "11", "14"],
    titles: [
      "Spa & Gym",
      "Kid's Zone Entertainment",
      "Farm-to-table food scene",
      "Heliskiing",
      "Property Maintenance",
    ],
    details: [
      "Special owner's 10% discount on the neighbouring Radisson Collection's services.",
      "Open to hotel guests and villa owners.",
      "Georgia is famous for its fresh and organic produce; therefore, concierges can arrange morning delivery with a basket full of local produce.",
      "Package offered at a special price.",
      "In case anything goes wrong, we have 24/7 technical support available.",
    ],
  },
  {
    numbers: ["03", "06", "09", "12", "15"],
    titles: [
      "Best Rates",
      "Maintanance",
      "Housekeeping",
      "Food & Beverage",
      "Laundry & Dry Cleaning",
    ],
    details: [
      "For the hotel rooms in Radisson Collection Tsinandali, Radisson Blu Batumi, and Radisson Blu Tbilisi.",
      "Of the green species and access, including lawn mowing, pruning, weeding, green waste management, along with maintaining the pool and waste.",
      "Home personally verified by the staff to be in pristine condition.",
      "Ordering special meals from the restaurants at the Radisson Collection Hotel.",
      "Our staff will arrange the procedure according to your desires.",
    ],
  },
];

const serviceNumberEls = [
  document.querySelector(".number-1"),
  document.querySelector(".number-2"),
  document.querySelector(".number-3"),
];

const serviceTitleEls = [
  document.querySelector(".title-1"),
  document.querySelector(".title-2"),
  document.querySelector(".title-3"),
];

const serviceDetailsEls = [
  document.querySelector(".details-1"),
  document.querySelector(".details-2"),
  document.querySelector(".details-3"),
];

const listEls = [
  document.querySelector(".list-hover-1"),
  document.querySelector(".list-hover-2"),
  document.querySelector(".list-hover-3"),
];

const serviceBtnNext = document.querySelector(".service-next");
const serviceBtnPrevious = document.querySelector(".service-previous");

let currentIndex = 0;
serviceBtnPrevious.disabled = true;

function updateServiceList() {
  serviceLists.forEach((list, i) => {
    serviceNumberEls[i].textContent = list.numbers[currentIndex];
    serviceTitleEls[i].textContent = list.titles[currentIndex];
    serviceDetailsEls[i].textContent = list.details[currentIndex];
  });

  serviceBtnNext.disabled = currentIndex === serviceLists[0].numbers.length - 1;
  serviceBtnPrevious.disabled = currentIndex === 0;
}

function changeServiceList(direction) {
  if (direction === "previous") {
    currentIndex--;
  } else {
    currentIndex++;
  }

  updateServiceList();
}

listEls.forEach((listEl, i) => {
  listEl.addEventListener("mouseover", () => {
    serviceNumberEls[i].style.opacity = 1;
  });
  listEl.addEventListener("mouseout", () => {
    serviceNumberEls[i].style.opacity = 0.5;
  });
});

serviceBtnNext.addEventListener("click", () => {
  changeServiceList("next");
});
serviceBtnPrevious.addEventListener("click", () => {
  changeServiceList("previous");
});

// SECTION-WINEMAKING

const wineDots = [
  document.querySelector(".wine-1"),
  document.querySelector(".wine-2"),
  document.querySelector(".wine-3"),
];
const winemakingPhoto = document.querySelector(".winemaking-photo");
const winemakingPhotosArray = [
  "./images/winemaking/winameking-1-.jpg",
  "./images/winemaking/winemaking-2.jpg",
  "./images/winemaking/winemaking-3.jpg",
];

function setActiveDot(index) {
  wineDots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("wine-dot-active");
    } else {
      dot.classList.remove("wine-dot-active");
    }
  });
}

function changeWinemakingCover(index) {
  setActiveDot(index);
  winemakingPhoto.src = winemakingPhotosArray[index];
}

wineDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    changeWinemakingCover(index);
  });
});

// Set the initial active dot
setActiveDot(0);

// FOOTER
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// **************** VALIDATION **********************
const isEnglishWord = /^[A-Za-z]+$/;
const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isPhoneNumber = /^\+?\d+$/;
const isNotEmpty = /\S+/;

const fNameInput = document.querySelector(".fName");
const lNameInput = document.querySelector(".lName");
const emailInput = document.querySelector(".email");
const phoneInput = document.querySelector(".phone");
const textareaInput = document.querySelector(".textarea");
const errorMsg = document.querySelector(".error");

const sendButton = document.querySelector(".send");

function isValid(input, regex) {
  return regex.test(input.value) && input.value.trim() !== "";
}

function handleErrorMessage(showError) {
  if (showError) {
    errorMsg.textContent = "Please fill up all fields with English letters.";
    errorMsg.style.color = "#ff4234";
  } else {
    errorMsg.textContent = "";
  }
}

function myFunction(e) {
  e.preventDefault();

  const validations = [
    isValid(e.target.firstName, isEnglishWord),
    isValid(e.target.lastName, isEnglishWord),
    isValid(e.target.eMail, isEmail),
    isValid(e.target.phoneNumber, isPhoneNumber),
    isValid(e.target.comment, isEnglishWord),
  ];

  const allValid = validations.every((valid) => valid);

  handleErrorMessage(!allValid);

  if (allValid) {
    sendButton.style.display = "block";

    // POST REQUEST HERE >

    console.log(
      e.target.firstName.value,
      e.target.lastName.value,
      e.target.eMail.value,
      e.target.phoneNumber.value,
      e.target.comment.value
    );

    e.target.firstName.value = "";
    e.target.lastName.value = "";
    e.target.eMail.value = "";
    e.target.phoneNumber.value = "";
    e.target.comment.value = "";
  }
}

// ****** RESPONSIVE *******

const foo1 = [
  "./images/villa/19th-wood.jpg",
  "./images/villa/19th-wood-3.jpg",
  "./images/villa/19th-wood-2.jpg",
];

const photoEls = [
  document.querySelector("#villa-1"),
  document.querySelector("#villa-2"),
  document.querySelector("#villa-3"),
];
const century = document.querySelector("#century");
const villaDescMobile = document.querySelector("#villa-desc-mobile");

const foo2 = [
  {
    century: "19",
    text: "Experience the synthesis of old-world charm and the future.",
  },
  {
    century: "20",
    text: "Capture the senses of diversity with postmodernism approach to design.",
  },
  {
    century: "21",
    text: "Live the contemporary lifestyle in harmony with new techniques.",
  },
];

let photoIndex = 0;

function updateImagesAndText() {
  photoEls.forEach((photo, index) => {
    photo.src = foo1[(photoIndex + index) % foo1.length];
  });

  century.textContent = foo2[photoIndex].century;
  villaDescMobile.textContent = foo2[photoIndex].text;
}

function changeImageScale(val) {
  if (val === "next") {
    photoIndex = (photoIndex + 1) % foo1.length;
  } else if (val === "previous") {
    photoIndex = (photoIndex - 1 + foo1.length) % foo1.length;
  }

  updateImagesAndText();
}

updateImagesAndText();
