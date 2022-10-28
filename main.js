let nums = document.querySelectorAll(".tickets .ticket");
let section = document.querySelector(".ticket");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => statsCount(num));
    }
    started = true;
  }
};

function statsCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10 / goal);
}
