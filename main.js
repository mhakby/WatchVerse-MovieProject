let arrows = document.querySelectorAll(".arrow");
let movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widtRatio = Math.floor(window.innerWidth / 300);
  let clickCounter = 0;
  const ImageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (ImageItem - (4 + clickCounter) + (4 - widtRatio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// Dark Mode

var ball = document.querySelector(".toggle-ball");
var items = document.querySelectorAll(
  ".container,.navbar,.browse,.browse-menu,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
  items.forEach((item) => item.classList.toggle("transition"));
});

function toggleDarkMode() {
  items.forEach((item) => item.classList.toggle("active"));
  items.forEach((item) => item.classList.toggle("transition"));
}

ball.addEventListener("click", toggleDarkMode);
function removeTransitionClass() {
  items.forEach((item) => item.classList.remove("transition"));
}

ball.addEventListener("click", function () {
  toggleDarkMode();
  setTimeout(removeTransitionClass, 1000);
});

// 800px menu

function showMenu() {
  var menu = document.getElementById("browse-menu");
  menu.style.display = "block";
}

function hideMenu() {
  var menu = document.getElementById("browse-menu");
  menu.style.display = "none";
}
