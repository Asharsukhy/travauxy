// mobileClick part start 
const mobileClick = document.querySelector("#moblieMenuClick");

mobileClick.addEventListener("click", function () {
    this.querySelector("i").classList.toggle("fa-times");
    
    const moblilekWrapeer = document.querySelector(".menu");
    
    moblilekWrapeer.classList.toggle("showMobileMenu");
})
// mobileClick part end 
