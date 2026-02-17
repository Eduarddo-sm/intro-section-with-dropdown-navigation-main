//Collect ta class with . from all the items
// Composte class need . the refer the second part of the class
const btnDropdownFeatures = document.querySelector(".dropdown-btn-features");
const btnDropdownCompany = document.querySelector(".dropdown-btn-company");
const menuFeatures = document.querySelector(".dropdown-menu.first");
const menuCompany = document.querySelector(".dropdown-menu.second");

btnDropdownFeatures.addEventListener("click", (e)=>{
    e.stopPropagation()
    menuFeatures.classList.toggle("active");
})

btnDropdownCompany.addEventListener("click", (e)=>{
    e.stopPropagation();
    menuCompany.classList.toggle("active");
})


document.addEventListener("click", ()=>{
    menuFeatures.classList.remove("active");
    menuCompany.classList.remove("active");
})