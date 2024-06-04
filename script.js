'use strict';
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// showModal.forEach(element => {
//   element.addEventListener('click', () => {
//     alert('Clicked');
//   });
// });

/*Refactoring: make modification to the code in order to preserve the DRY principles in our code without change the functionality of the code*/
const removeHiddenClass = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const addHiddenClass = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  // console.log(showModal[i].textContent);
  showModal[i].addEventListener(
    'click',
    removeHiddenClass
    // modal.style.display = 'block';
    // overlay.style.display = 'block';
  );
}

btnClose.addEventListener(
  'click',
  addHiddenClass
  // modal.style.display = '';
  // overlay.style.display = '';
);

overlay.addEventListener(
  'click',
  addHiddenClass
  // modal.style.display = '';
  // overlay.style.display = '';
);

document.addEventListener('keydown', function (event) {
  // console.log(event);
  if (event.key === 'Escape')
    if (!modal.classList.contains('hidden')) {
      addHiddenClass();
    }
});

// showModal[0].addEventListener('click', function () {
//   console.log(showModal[0].textContent);
// });

// showModal[1].addEventListener('click', function () {
//   console.log(showModal[1].textContent);
// });

// showModal[2].addEventListener('click', function () {
//   console.log(showModal[2].textContent);
// });
