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
let next = current + 1;
const previousButton = document.querySelector(".previous");
const mainPhoto = document.querySelector(".main-photo");
const parallax = document.querySelector(".parallax");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const number = document.querySelector(".history-number");

btnPrev.disabled = true;

function changeImage(val) {
  if (val === "previous") {
    current--;
    next--;
    mainPhoto.src = arrayOfPhotosAbout[current];
    parallax.src = arrayOfPhotosAbout[next];
  } else {
    current++;
    next++;

    mainPhoto.src = arrayOfPhotosAbout[current];
    parallax.src = arrayOfPhotosAbout[next];
  }

  number.textContent = arrayOfNumber[current];

  if (next === arrayOfPhotosAbout.length - 1) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }

  if (current === 0) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
  }
}

function toggleText(textId) {
  const hiddenText = document.querySelector("#" + textId + " .hidden-text");
  const readMoreBtn = document.querySelector(
    "#" + textId + " + .read-more-btn"
  );
  const ellipsis = document.querySelector("#" + textId + " .ellipsis");

  if (hiddenText.style.display === "none" || !hiddenText.style.display) {
    hiddenText.style.display = "inline";
    ellipsis.style.display = "none";
    readMoreBtn.textContent = "Read Less";
  } else {
    hiddenText.style.display = "none";
    ellipsis.style.display = "inline";
    readMoreBtn.textContent = "Read More";
  }
}

// SETTING-SECTION
function scrollElement(e) {
  sideBar.classList.remove("show");
  menu.style.display = "block";
  let element = document.getElementById(`${e}`);
  element.scrollIntoView({ block: "start", behavior: "smooth" });
}
const arrayOfCenterPhotoSetting = [
  "./images/setting-imgs/Mountains.png",
  "./images/setting-imgs/Vineyard.png",
  "./images/setting-imgs/Sports.png",
  "./images/setting-imgs/SPA1.png",
];
const arrayOfLeftPhotoSetting = [
  "./images/setting-imgs/SPA1.png",
  "./images/setting-imgs/Mountains.png",
  "./images/setting-imgs/Vineyard.png",
  "./images/setting-imgs/Sports.png",
];
const arrayOfTopPhotoSetting = [
  "./images/setting-imgs/Sports.png",
  "./images/setting-imgs/SPA1.png",
  "./images/setting-imgs/Mountains.png",
  "./images/setting-imgs/Vineyard.png",
];
const arrayOfRightPhotoSetting = [
  "./images/setting-imgs/Vineyard.png",
  "./images/setting-imgs/Sports.png",
  "./images/setting-imgs/SPA1.png",
  "./images/setting-imgs/Mountains.png",
];

const arrayOfTitles = ["mountains", "wineyard", "sports", "spa"];

const settingTitle = document.querySelector(".setting-title");
const btnNextSetting = document.querySelector(".btn-next-setting");
const btnPrevSetting = document.querySelector(".btn-prev-setting");
const centerPhoto = document.querySelector(".center-photo");
const leftPhoto = document.querySelector(".left-photo");
const topPhoto = document.querySelector(".top-photo");
const rightPhoto = document.querySelector(".right-photo");
btnPrevSetting.disabled = true;

const pseudoEl = document.querySelector(".setting-title-wrapper");

let settingPhoto = 0;

function changeImageSetting(val) {
  if (val === "previous") {
    settingPhoto--;
    centerPhoto.src = arrayOfCenterPhotoSetting[settingPhoto];
    console.log(arrayOfRightPhotoSetting.length);
    leftPhoto.src = arrayOfLeftPhotoSetting[settingPhoto];
    topPhoto.src = arrayOfTopPhotoSetting[settingPhoto];
    rightPhoto.src = arrayOfRightPhotoSetting[settingPhoto];
  } else {
    settingPhoto++;

    centerPhoto.src = arrayOfCenterPhotoSetting[settingPhoto];
    leftPhoto.src = arrayOfLeftPhotoSetting[settingPhoto];
    topPhoto.src = arrayOfTopPhotoSetting[settingPhoto];
    rightPhoto.src = arrayOfRightPhotoSetting[settingPhoto];
  }

  settingTitle.textContent = arrayOfTitles[settingPhoto];

  if (settingPhoto === arrayOfCenterPhotoSetting.length - 1) {
    btnNextSetting.disabled = true;
  } else {
    btnNextSetting.disabled = false;
  }

  if (settingPhoto === arrayOfRightPhotoSetting.length - 4) {
    btnPrevSetting.disabled = true;
  } else {
    btnPrevSetting.disabled = false;
  }
}

// ******* SECTION - VILLA ***************
const century1 = [
  "./images/villa/19th-wood.jpg",
  "./images/villa/19th-wood-3.jpg",
  "./images/villa/19th-wood-2.jpg",
];

const century2 = [
  "./images/villa/20th-brick-1.jpg",
  "./images/villa/20th-brick-3.jpg",
  "./images/villa/20th-brick-2.jpg",
];

const century3 = [
  "./images/villa/21st-stone-1.jpg",
  "./images/villa/21th-stone-2.png",
  "./images/villa/21th-stone-3.png",
];

const villaDescription = [
  "Experience the synthesis of old-world charm and the future.",
  "Capture the senses of diversity with postmodernism approach to design.",
  "Live the contemporary lifestyle in harmony with new techniques.",
];

const centuryNumber = document.querySelector(".century-number");
const villaDesc = document.querySelector(".villa-description");
const century19 = document.querySelector(".century-19");
const century20 = document.querySelector(".century-20");
const century21 = document.querySelector(".century-21");
const villa1 = document.querySelector(".villa-1-photo");
const villa2 = document.querySelector(".villa-2-photo");
const villa4 = document.querySelector(".villa-4-photo");
century19.style.color = "#386741";

function changeCenturyTo19() {
  villa1.src = century1[0];
  villa2.src = century1[1];
  villa4.src = century1[2];
  centuryNumber.textContent = "19";
  century19.style.color = "#386741";
  century20.style.color = "#393939";
  century21.style.color = "#393939";
  villaDesc.textContent = villaDescription[0];
}

function changeCenturyTo20() {
  villa1.src = century2[0];
  villa2.src = century2[1];
  villa4.src = century2[2];
  centuryNumber.textContent = "20";
  century20.style.color = "#386741";
  century19.style.color = "#393939";
  century21.style.color = "#393939";
  villaDesc.textContent = villaDescription[1];
}

function changeCenturyTo21() {
  villa1.src = century3[0];
  villa2.src = century3[1];
  villa4.src = century3[2];
  centuryNumber.textContent = "21";
  century19.style.color = "#393939";
  century20.style.color = "#393939";
  century21.style.color = "#386741";
  villaDesc.textContent = villaDescription[2];
}

// *********** SECTION-SERVICE **************
const serviceList1 = ["01", "04", "07", "10", "13"];
const serviceList2 = ["02", "05", "08", "11", "14"];
const serviceList3 = ["03", "06", "09", "12", "15"];
const serviceTitle1Array = [
  "Event Planning",
  "Equipment Rental",
  "Entertainment",
  "Helipad",
  "Top chefs for pop-up dinner",
];
const serviceTitle2Array = [
  "Spa & Gym",
  "Kid's Zone Entertainment",
  "Farm-to-table food scene",
  "Heliskiing",
  "Property Maintenance",
];
const serviceTitle3Array = [
  "Best Rates",
  "Maintanance",
  "Housekeeping",
  "Food & Beverage",
  "Laundry & Dry Cleaning",
];

const serviceDetailsArray1 = [
  "Private arrangement of your event with all details taken into consideration.",
  "Bikes, tennis and basketball accessories.",
  "Tsinandali Festival, Jazz & Wine Festival. Priority ticketing and special discounts.",
  "Owners can benefit from the flight service at an extra cost.",
  "Bringing a truly gastronomic experience to one’s doorstep.",
];
const serviceDetailsArray2 = [
  "Special owner's 10% discount on the neighbouring Radisson Collection's services.",
  "Open to hotel guests and villa owners.",
  "Georgia is famous for its fresh and organic produce; therefore, concierges can arrange morning delivery with a basket full of local produce.",
  "Package offered at a special price.",
  "In case anything goes wrong, we have 24/7 technical support available.",
];
const serviceDetailsArray3 = [
  "For the hotel rooms in Radisson Collection Tsinandali, Radisson Blu Batumi, and Radisson Blu Tbilisi.",
  "Of the green species and access, including lawn mowing, pruning, weeding, green waste management, along with maintaining the pool and waste.",
  "Home personally verified by the staff to be in pristine condition.",
  "Ordering special meals from the restaurants at the Radisson Collection Hotel.",
  "Our staff will arrange the procedure according to your desires.",
];

const serviceListMobile = [
  {
    number: "01",
    title: "Event Planning",
    details:
      "For the hotel rooms in Radisson Collection Tsinandali, Radisson Blu Batumi, and Radisson Blu Tbilisi.",
  },
  {
    number: "02",
    title: "Spa & Gym",
    details:
      "Special owner's 10% discount on the neighbouring Radisson Collection's services.",
  },
  {
    number: "03",
    title: "Best Rates",
    details:
      "Private arrangement of your event with all details taken into consideration.",
  },
  {
    number: "04",
    title: "Equipment Rental",
    details:
      "Of the green species and access, including lawn mowing, pruning, weeding, green waste management, along with maintaining the pool and waste.",
  },
  {
    number: "05",
    title: "Kid's Zone Entertainment",
    details: "Open to hotel guests and villa owners.",
  },
  {
    number: "06",
    title: "Maintanance",
    details:
      "Of the green species and access, including lawn mowing, pruning, weeding, green waste management, along with maintaining the pool and waste.",
  },
  {
    number: "07",
    title: "Entertainment",
    details:
      "Tsinandali Festival, Jazz & Wine Festival. Priority ticketing and special discounts.",
  },
  {
    number: "08",
    title: "Farm-to-table food scene",
    details:
      "Georgia is famous for its fresh and organic produce; therefore, concierges can arrange morning delivery with a basket full of local produce.",
  },
  {
    number: "09",
    title: "Housekeeping",
    details:
      "Home personally verified by the staff to be in pristine condition.",
  },
  {
    number: "10",
    title: "Helipad",
    details: "Owners can benefit from the flight service at an extra cost.",
  },
  {
    number: "11",
    title: "Heliskiing",
    details: "Package offered at a special price.",
  },
  {
    number: "12",
    title: "Food & Beverage",
    details:
      "Ordering special meals from the restaurants at the Radisson Collection Hotel.",
  },
  {
    number: "13",
    title: "Top chefs for pop-up dinners",
    details: "Bringing a truly gastronomic experience to one’s doorstep.",
  },
  {
    number: "14",
    title: "Property Maintenance",
    details:
      "In case anything goes wrong, we have 24/7 technical support available., and Radisson Blu Tbilisi.",
  },
  {
    number: "15",
    title: "Laundry & Dry Cleaning",
    details: "Our staff will arrange the procedure according to your desires.",
  },
];

const serviceNumberMobile = document.querySelector(".service-number-mobile");
const serviceTitleMobile = document.querySelector(".service-title-mobile");
const serviceDetailMobile = document.querySelector(".service-details-mobile");
const serviceBtnNextMobile = document.querySelector("#service-btn-mobile-next");
const serviceBtnPreviousMobile = document.querySelector(
  "#service-btn-mobile-previous"
);
let i = 0;

serviceBtnPreviousMobile.disabled = true;

function changeServiceMobile(val) {
  if (val === "previous") {
    i--;
    serviceNumberMobile.textContent = serviceListMobile[i].number;
    serviceTitleMobile.textContent = serviceListMobile[i].title;
    serviceDetailMobile.textContent = serviceListMobile[i].details;
  }
  if (val === "next") {
    i++;
    serviceNumberMobile.textContent = serviceListMobile[i].number;
    serviceTitleMobile.textContent = serviceListMobile[i].title;
    serviceDetailMobile.textContent = serviceListMobile[i].details;
  }

  if (i === serviceListMobile.length - 1) {
    serviceBtnNextMobile.disabled = true;
  } else {
    serviceBtnNextMobile.disabled = false;
  }

  if (i === 0) {
    serviceBtnPreviousMobile.disabled = true;
  } else {
    serviceBtnPreviousMobile.disabled = false;
  }
}

const serviceNumber1 = document.querySelector(".number-1");
const serviceNumber2 = document.querySelector(".number-2");
const serviceNumber3 = document.querySelector(".number-3");
const serviceTitle = document.querySelector(".service-title");
const serviceBtnNext = document.querySelector(".service-next");
const serviceBtnPrevious = document.querySelector(".service-previous");
const serviceTitle1 = document.querySelector(".title-1");
const serviceTitle2 = document.querySelector(".title-2");
const serviceTitle3 = document.querySelector(".title-3");

const serviceDetails1 = document.querySelector(".details-1");
const serviceDetails2 = document.querySelector(".details-2");
const serviceDetails3 = document.querySelector(".details-3");

const list1 = document.querySelector(".list-hover-1");
const list2 = document.querySelector(".list-hover-2");
const list3 = document.querySelector(".list-hover-3");

list1.addEventListener("mouseover", () => {
  serviceNumber1.style.opacity = 1;
});
list1.addEventListener("mouseout", () => {
  serviceNumber1.style.opacity = 0.5;
});
list2.addEventListener("mouseover", () => {
  serviceNumber2.style.opacity = 1;
});
list2.addEventListener("mouseout", () => {
  serviceNumber2.style.opacity = 0.5;
});
list3.addEventListener("mouseover", () => {
  serviceNumber3.style.opacity = 1;
});
list3.addEventListener("mouseout", () => {
  serviceNumber3.style.opacity = 0.5;
});

let first = 0;
serviceBtnPrevious.disabled = true;

function changeServiceList(val) {
  if (val === "previous") {
    first--;
    serviceNumber1.textContent = serviceList1[first];
    serviceNumber2.textContent = serviceList2[first];
    serviceNumber3.textContent = serviceList3[first];
    serviceTitle1.textContent = serviceTitle1Array[first];
    serviceTitle2.textContent = serviceTitle2Array[first];
    serviceTitle3.textContent = serviceTitle3Array[first];
    serviceDetails1.textContent = serviceDetailsArray1[first];
    serviceDetails2.textContent = serviceDetailsArray2[first];
    serviceDetails3.textContent = serviceDetailsArray3[first];
  } else {
    first++;

    serviceNumber1.textContent = serviceList1[first];
    serviceNumber2.textContent = serviceList2[first];
    serviceNumber3.textContent = serviceList3[first];
    serviceTitle1.textContent = serviceTitle1Array[first];
    serviceTitle2.textContent = serviceTitle2Array[first];
    serviceTitle3.textContent = serviceTitle3Array[first];
    serviceDetails1.textContent = serviceDetailsArray1[first];
    serviceDetails2.textContent = serviceDetailsArray2[first];
    serviceDetails3.textContent = serviceDetailsArray3[first];
  }

  if (first === serviceList1.length - 1) {
    serviceBtnNext.disabled = true;
  } else {
    serviceBtnNext.disabled = false;
  }

  if (first === serviceList3.length - 5) {
    serviceBtnPrevious.disabled = true;
  } else {
    serviceBtnPrevious.disabled = false;
  }
}

// SECTION-WINEMAKING

const winedot1 = document.querySelector(".wine-1");
const winedot2 = document.querySelector(".wine-2");
const winedot3 = document.querySelector(".wine-3");
const winemakingPhoto = document.querySelector(".winemaking-photo");
winedot1.classList.add("wine-dot-active");

const winemakingPhotosArray = [
  "./images/winemaking/winameking-1-.jpg",
  "./images/winemaking/winemaking-2.jpg",
  "./images/winemaking/winemaking-3.jpg",
];

function changeWinemakingCover1() {
  winedot1.classList.add("wine-dot-active");
  winedot2.classList.remove("wine-dot-active");
  winedot3.classList.remove("wine-dot-active");
  winemakingPhoto.src = winemakingPhotosArray[0];
}
function changeWinemakingCover2() {
  winedot2.classList.add("wine-dot-active");
  winedot1.classList.remove("wine-dot-active");
  winedot3.classList.remove("wine-dot-active");
  winemakingPhoto.src = winemakingPhotosArray[1];
}
function changeWinemakingCover3() {
  winedot3.classList.add("wine-dot-active");
  winedot2.classList.remove("wine-dot-active");
  winedot1.classList.remove("wine-dot-active");
  winemakingPhoto.src = winemakingPhotosArray[2];
}

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
const errorMsg2 = document.querySelector(".error-2");
const errorMsg3 = document.querySelector(".error-3");
const errorMsg4 = document.querySelector(".error-4");
const errorMsg5 = document.querySelector(".error-5");
const errorMsg6 = document.querySelector(".error-6");
const errorMsg7 = document.querySelector(".error-7");

const sendButton = document.querySelector(".send");

// sendButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   let valid = true;

//   if (
//     !isEnglishWord.test(fNameInput.value) ||
//     !isNotEmpty.test(fNameInput.value)
//   ) {
//     valid = false;
//   }

//   if (
//     !isEnglishWord.test(lNameInput.value) ||
//     !isNotEmpty.test(lNameInput.value)
//   ) {
//     valid = false;
//   }

//   if (!isEmail.test(emailInput.value) || !isNotEmpty.test(emailInput.value)) {
//     valid = false;
//   }

//   if (
//     !isPhoneNumber.test(phoneInput.value) ||
//     !isNotEmpty.test(phoneInput.value)
//   ) {
//     valid = false;
//   }

//   if (
//     !isEnglishWord.test(textareaInput.value) ||
//     !isNotEmpty.test(textareaInput.value)
//   ) {
//     valid = false;
//   }

//   if (!valid) {
//     errorMsg.textContent = "Please fill up all fields with English letters.";
//     errorMsg.style.color = "#ff4234";
//     // sendButton.style.display = "none";

//     // sendButton.style.opacity = 0;
//     // setTimeout(() => {
//     //   sendButton.style.display = "none";
//     //   errorMsg.textContent = "Please fill up all fields with English letters.";
//     //   errorMsg.style.color = "#ff4234";
//     // }, 500);
//   } else {
//     errorMsg.textContent = "";
//     // sendButton.style.opacity = 1;
//     sendButton.style.display = "block";
//     // errorMsg.textContent = "Please fill up all fields with English letters.";
//     // errorMsg.style.color = "#ff4234";
//     // errorMsg.textContent = "";
//     // form.submit();
//   }
// });

function myFunction(e) {
  e.preventDefault();

  let valid = true;

  if (
    !isEnglishWord.test(e.target.firstName.value) ||
    !isNotEmpty.test(e.target.firstName.value)
  ) {
    valid = false;
  }

  if (
    !isEnglishWord.test(e.target.lastName.value) ||
    !isNotEmpty.test(e.target.lastName.value)
  ) {
    valid = false;
  }

  if (
    !isEmail.test(e.target.eMail.value) ||
    !isNotEmpty.test(e.target.eMail.value)
  ) {
    valid = false;
  }

  if (
    !isPhoneNumber.test(e.target.phoneNumber.value) ||
    !isNotEmpty.test(e.target.phoneNumber.value)
  ) {
    valid = false;
  }

  if (
    !isEnglishWord.test(e.target.comment.value) ||
    !isNotEmpty.test(e.target.comment.value)
  ) {
    valid = false;
  }

  if (!valid) {
    errorMsg.textContent = "Please fill up all fields with English letters.";
    errorMsg.style.color = "#ff4234";
    // sendButton.style.display = "none";

    // sendButton.style.opacity = 0;
    // setTimeout(() => {
    //   sendButton.style.display = "none";
    //   errorMsg.textContent = "Please fill up all fields with English letters.";
    //   errorMsg.style.color = "#ff4234";
    // }, 500);
  } else {
    errorMsg.textContent = "";
    // sendButton.style.opacity = 1;
    sendButton.style.display = "block";
    // errorMsg.textContent = "Please fill up all fields with English letters.";
    // errorMsg.style.color = "#ff4234";
    // errorMsg.textContent = "";
    // form.submit();

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

const foo1 = [
  "./images/villa/19th-wood.jpg",
  "./images/villa/19th-wood-3.jpg",
  "./images/villa/19th-wood-2.jpg",
];

let photoIndex1 = 0;
let photoIndex2 = 1;
let photoIndex3 = 2;

const photo1 = document.querySelector("#villa-1");
const photo2 = document.querySelector("#villa-2");
const photo3 = document.querySelector("#villa-3");
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

function changeImageScale(val) {
  if (val === "next") {
    photoIndex1++;
    photoIndex2++;
    photoIndex3++;

    if (foo1[photoIndex1] === undefined) {
      photoIndex1 = 0;
      photo1.src = foo1[photoIndex1];
      century.textContent = foo2[photoIndex1].century;
      villaDescMobile.textContent = foo2[photoIndex1].text;
    } else {
      photo1.src = foo1[photoIndex1];

      century.textContent = foo2[photoIndex1].century;
      villaDescMobile.textContent = foo2[photoIndex1].text;
    }

    if (foo1[photoIndex2] === undefined) {
      photoIndex2 = 0;
      photo2.src = foo1[photoIndex2];
    } else {
      photo2.src = foo1[photoIndex2];
    }
    if (foo1[photoIndex3] === undefined) {
      photoIndex3 = 0;
      photo3.src = foo1[photoIndex3];
    } else {
      photo3.src = foo1[photoIndex3];
    }
  }

  if (val === "previous") {
    photoIndex1--;
    photoIndex2--;
    photoIndex3--;

    if (foo1[photoIndex1] === undefined) {
      photoIndex1 = 2;
      photo1.src = foo1[photoIndex1];
      century.textContent = foo2[photoIndex1].century;
      villaDescMobile.textContent = foo2[photoIndex1].text;
    } else {
      photo1.src = foo1[photoIndex1];
      century.textContent = foo2[photoIndex1].century;
      villaDescMobile.textContent = foo2[photoIndex1].text;
    }

    if (foo1[photoIndex2] === undefined) {
      photoIndex2 = 2;
      photo2.src = foo1[photoIndex2];
    } else {
      photo2.src = foo1[photoIndex2];
    }
    if (foo1[photoIndex3] === undefined) {
      photoIndex3 = 2;
      photo3.src = foo1[photoIndex3];
    } else {
      photo3.src = foo1[photoIndex3];
    }
  }
}
