const navLinks = document.querySelector(".nav-links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const toggleImg = document.querySelector('#toggle-img');
/**/
hamburgerBtn.addEventListener("click", () => {
  // this is for toggling the the open class if already add then it will remove it otherwise opposite
  navLinks.classList.toggle('open');
  // here it will give you the output true or false
  //contains is a class which gives you true or false
  isOpen = navLinks.classList.contains('open');
  if (isOpen) {
    toggleImg.src = './images/icon-close.svg';
  } else {
    toggleImg.src = './images/icon-hamburger.svg';
  }
});

// always use ' ' except " "