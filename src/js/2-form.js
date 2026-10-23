
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

// Restore data from localStorage
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);

    formData.email =
      typeof parsedData?.email === 'string'
        ? parsedData.email.trim()
        : '';

    formData.message =
      typeof parsedData?.message === 'string'
        ? parsedData.message.trim()
        : '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

// Save data when the user types
form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name !== 'email' && name !== 'message') {
    return;
  }

  formData[name] = value.trim();

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(formData)
  );
});

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ ...formData });

  localStorage.removeItem(STORAGE_KEY);

  form.reset();

  formData.email = '';
  formData.message = '';
});
