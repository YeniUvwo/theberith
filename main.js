function redirectToAboutUs() {
  window.location.href = './about.html';
}

function redirectToHomepage() {
  window.location.href = './index.html';
}

function toggleNav() {
  const navCta = document.querySelector('.nav-cta-container');
  const hamburgerIcon = document.querySelector('.hamburger-container');
  const closeIcon = document.querySelector('.close-container');
  
  navCta.classList.toggle('active');
  
  if (navCta.classList.contains('active')) {
    hamburgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    hamburgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
}

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
