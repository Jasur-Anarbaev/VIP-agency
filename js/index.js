// BURGER MENU

const burger = document.getElementById("burger");
const closed = document.getElementById("close");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  menu.style.display = "block";
  burger.style.display = "none";
  closed.style.display = "block";
});

menu.addEventListener("click", () => {
  menu.classList.remove("active");
  menu.style.display = "none";
  burger.style.display = "block";
  closed.style.display = "none";
  1;
});

closed.addEventListener("click", () => {
  menu.classList.remove("active");
  menu.style.display = "none";
  burger.style.display = "block";
  closed.style.display = "none";
});

// Modal windows
const openPopUp = document.getElementById("open_pop_up");
const closePopUp = document.getElementById("pop_up_close");
const popUp = document.getElementById("pop_up");

openPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("active");
});
closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});x``
