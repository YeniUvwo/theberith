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


function handleButtonClick(event) {
  event.preventDefault();
  toggleNav();
  document.querySelector('#appointment').scrollIntoView({ behavior: 'smooth' });
}

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


// hide mp4 player tag
document.addEventListener("DOMContentLoaded", function() {
  function removeDynamicDiv() {
    var dynamicDiv = document.querySelector('div[id^="neatDiv"]');
    if (dynamicDiv) {
      dynamicDiv.remove();
      console.log('Removed div with id starting with neatDiv');
    }
  }

  removeDynamicDiv();

  var intervalId = setInterval(function() {
    removeDynamicDiv();
  }, 1000);


  setTimeout(function() {
    clearInterval(intervalId);
    console.log('Stopped checking for dynamic div');
  }, 10000); 
});


(function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault(); // Prevent default to handle form submission via JavaScript

        // Send the form data to Formspree if valid
        const formData = new FormData(form);
        fetch('https://formspree.io/f/mldrvpwn', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            localStorage.setItem('formSubmitted', 'true');

            const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
            thankYouModal.show();

            form.reset(); // Reset the form after submission
            form.classList.remove('was-validated');
          } else {
            alert('There was a problem submitting the form. Please try again.');
          }
        }).catch(error => {
          alert('There was a problem submitting the form. Please try again later.');
          console.error('Error:', error);
        });
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
