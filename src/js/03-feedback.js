
import throttle from 'lodash.throttle';

// Функція для збереження даних у сховище
function saveFormDataToLocalStorage() {
  const formData = {
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Функція для заповнення полів форми з даних у сховищі
function fillFormFieldsFromLocalStorage() {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const formData = JSON.parse(storedData);
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
}

//збереження даних не частіше ніж раз на 500 мс
const throttledSaveFormData = throttle(saveFormDataToLocalStorage, 500);


const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttledSaveFormData);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = {
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
});
fillFormFieldsFromLocalStorage();