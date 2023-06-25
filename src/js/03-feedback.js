import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const key = 'feedback-form-state';

let newArg = JSON.parse(localStorage.getItem(key)) || {};

form.addEventListener(
  'input',
  throttle(e => {
    newArg[e.target.name] = e.target.value;
    localStorage.setItem(key, JSON.stringify(newArg));
  }, 500)
);

form.addEventListener('submit', submit);

function submit(e) {
  e.preventDefault();
  console.log(newArg);
  localStorage.removeItem(key);
  form.reset();
  newArg = {};
}

function reload() {
  for (let el of form) {
    if (newArg && Object.keys(newArg).includes(el.name)) {
      el.value = newArg[el.name];
    }
  }
}
reload();
