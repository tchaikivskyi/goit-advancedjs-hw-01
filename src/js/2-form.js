let formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
};

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    formData = JSON.parse(savedData);
    refs.form.email.value = formData.email || '';
    refs.form.message.value = formData.message || '';
  } catch (e) {
    console.error('Error parsing saved form data', e);
  }
}

const changeFormInput = e => {
  if (e.target.name in formData) {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
};

const onFormSubmit = e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
};

refs.form.addEventListener('input', changeFormInput);
refs.form.addEventListener('submit', onFormSubmit);
