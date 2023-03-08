const menu = document.getElementById("menu");
const page = document.getElementById("whole-page");
const hidden = document.querySelectorAll(".hidden");
const exit = document.getElementById("exit");

menu.addEventListener("click", () => {
  page.classList.toggle("active");

  hidden.forEach(function (element) {
    element.classList.toggle("visible");
  });
});

exit.addEventListener("click", () => {
  page.classList.toggle("active");

  hidden.forEach(function (element) {
    element.classList.toggle("visible");
  });
});
