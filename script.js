const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')

let toggled = false

const toggleMenu = () => {
 if(!toggled) {
   toggled = true
   mobileMenu.style.display = "block"
   burger.src = "./images/icon-close.svg"
 }else{
   toggled = false
  mobileMenu.style.display = "none"
  burger.src = "./images/icon-hamburger.svg"
 }
}

burger.addEventListener('click', toggleMenu)