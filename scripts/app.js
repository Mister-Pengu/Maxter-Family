(function() {
    const burger = document.querySelector(".header__burger");
    const navbar = document.querySelector(".header__items")
    burger.addEventListener("click", () => {
        burger.classList.toggle("burger-active");
        navbar.classList.toggle("burger-active");
    });
}());

AOS.init();
