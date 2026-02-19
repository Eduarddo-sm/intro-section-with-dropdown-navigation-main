//Collect ta class with . from all the items
// Composte class need . the refer the second part of the class
const btnDropdownFeatures = document.querySelector(".dropdown-btn-features");
const btnDropdownCompany = document.querySelector(".dropdown-btn-company");
const menuFeatures = document.querySelector(".dropdown-menu.first");
const menuCompany = document.querySelector(".dropdown-menu.second");
const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");
const arrowOne = document.querySelector(".arrow.one");
const arrowTwo = document.querySelector(".arrow.two");
const navClose = document.querySelector(".nav-close");
const overlay = document.querySelector(".overlay");

navClose.addEventListener("click", ()=>{
    navigation.classList.remove("active");
        overlay.classList.remove("active");
})

burger.addEventListener("click", (e)=>{
    e.stopPropagation();
    navigation.classList.toggle("active");
    overlay.classList.toggle("active");

})

btnDropdownFeatures.addEventListener("click", (e)=>{
    e.stopPropagation();
    menuFeatures.classList.toggle("active");
    arrowOne.classList.toggle("active");
})

btnDropdownCompany.addEventListener("click", (e)=>{
    e.stopPropagation();
    menuCompany.classList.toggle("active");
    arrowTwo.classList.toggle("active");
})


document.addEventListener("click", ()=>{
    menuFeatures.classList.remove("active");
    menuCompany.classList.remove("active");
    arrowOne.classList.remove("active");
    arrowTwo.classList.remove("active");

})