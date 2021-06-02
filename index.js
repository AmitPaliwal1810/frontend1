const navLinks = document.querySelector(".nav-links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const toggleImg = document.querySelector("#toggle-img");

hamburgerBtn.addEventListener("click", () => {
  // this is for toggling the the open class if already add then it will remove it otherwise opsite
  navLinks.classList.toggle("open");
  // here it will give you the output true or false
  //contains is a class which gives you true or false
  isopen = navLinks.classList.contains("open");
  if (isopen) {
    toggleImg.src = "./img/icon-close.svg";
  } else {
    toggleImg.src = "./img/icon-hamburger.svg";
  }
});