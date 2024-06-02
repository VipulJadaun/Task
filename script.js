var login = document.querySelector(".navbar .right #b2")
var loginPage = document.querySelector(".login")
var close = document.querySelector(".login .cards i")
var close1 = document.querySelector(".signup .cards i")

close.addEventListener("click", function () {
    loginPage.style.display = 'none'
})
login.addEventListener("click", function () {
    loginPage.style.display = 'flex'

})


close1.addEventListener("click", function () {
    signUpPage.style.display = 'none'
})
var signUp = document.querySelector(".navbar .right #b1")
var signUpPage = document.querySelector(".signup")

signUp.addEventListener("click", function () {
    signUpPage.style.display = 'flex'
})



// var navbar = document.querySelector("#navbar")
// var right = document.querySelector(".right p")
var menu = document.querySelector(".navbar #menu")
var loader = document.querySelector(".loader")
function toggleLoader() {
    if (loader.style.top === "0%") {
        loader.style.top = "-100%";
        console.log("Loader hidden");
    } else {
        loader.style.top = "0%";
        console.log("Loader shown");
    }
}

menu.addEventListener("click", toggleLoader);