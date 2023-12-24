`use strict`;
const btnNavEl = document.querySelector(`.nav-button`);
const headerEl = document.querySelector(`.header`);
btnNavEl.addEventListener(`click`, function () {
  headerEl.classList.toggle(`nav-open`);
});
