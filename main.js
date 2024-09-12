function redirectToAboutUs() {
  window.location.href = './about.html';
}

function redirectToHomepage() {
  window.location.href = './index.html';
}

function redirectToSolutions() {
  window.location.href = './solutions.html';
}

// Popover 
function toggleNav() {
  const navCta = document.querySelector('.nav-cta-container');
  const hamburgerIcon = document.querySelector('.hamburger-container');
  const closeIcon = document.querySelector('.close-container');

  navCta.classList.toggle('active');

  if (window.innerWidth < 900) {
    const isActive = navCta.classList.contains('active');
    hamburgerIcon.style.display = isActive ? 'none' : 'block';
    closeIcon.style.display = isActive ? 'block' : 'none';
  }
}
function setInitialIconState() {
  const navCta = document.querySelector('.nav-cta-container');
  const hamburgerIcon = document.querySelector('.hamburger-container');
  const closeIcon = document.querySelector('.close-container');

  if (window.innerWidth < 900) {
    hamburgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  } else {
    hamburgerIcon.style.display = 'none';
    closeIcon.style.display = 'none';
  }
}

// Run the function on page load and window resize
document.addEventListener('DOMContentLoaded', setInitialIconState);
window.addEventListener('resize', setInitialIconState);


document.addEventListener('DOMContentLoaded', setInitialIconState);
window.addEventListener('resize', setInitialIconState);


function handleButtonClick(event) {
  event.preventDefault();
  toggleNav();
  document.querySelector('#appointment').scrollIntoView({ behavior: 'smooth' });
}

//form validation
(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


// smooth scrolling from about and solutions page to boook appointment form
document.querySelectorAll('.schedule-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html#appointment';

    const formElement = document.querySelector('#appointment');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
