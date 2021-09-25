const menu = document.getElementById("i-nav__menu");
const toggleOpen = document.getElementById("i-toggle-open");
const toggleClose = document.getElementById("i-toggle-close");
const innerOpen = document.querySelector(".inner__open");
const innerClose = document.querySelector(".inner__close");
const lengRu = document.getElementById("i-ru");
const lengUz = document.getElementById("i-uz");
const userToggle = document.getElementById("i-user-toggle");
const userInner = document.getElementById("i-user-inner");
const loginToggle = document.getElementById("i-login-toggle");
const recordToggle = document.getElementById("i-record-toggle")
const content = document.getElementById("i-content")
toggleOpen.addEventListener("click",()=>{
    menu.style.left = "0"
    innerOpen.style.display = "none"
    innerClose.style.display = "block"
    if(menu.style.left = "0"){
        content.style.opacity = "0.5"
    }
})
toggleClose.addEventListener("click",()=>{
    menu.style.left = "-100%"
    innerOpen.style.display = "block"
    innerClose.style.display = "none"
    if(menu.style.left != "0"){
        content.style.opacity = "1"
    }
})

lengRu.addEventListener("click",()=>{
    lengRu.style.display = "none"
    lengUz.style.display = "block"
})
lengUz.addEventListener("click",()=>{
    lengRu.style.display = "block"
    lengUz.style.display = "none"
})
userToggle.addEventListener("click",()=>{
    userInner.style.top = "80px"
})
loginToggle.addEventListener("click",()=>{
    userInner.style.top = "-100%"
})
recordToggle.addEventListener("click",()=>{
    userInner.style.top = "-100%"
})