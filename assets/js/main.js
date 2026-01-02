/* ===========================
   PAGE REDIRECT HELPERS
=========================== */
function redirectToAboutUs() {
  window.location.href = './about.html';
}

function redirectToHomepage() {
  window.location.href = './index.html';
}

function redirectToSolutions() {
  window.location.href = './solutions.html';
}

/* ===========================
   NAVBAR TOGGLE (Clean & Correct)
=========================== */
function toggleNav() {
  const navCta = document.querySelector('.nav-cta-container');
  const backdrop = document.getElementById('mobileBackdrop');

  navCta.classList.toggle('active');
  backdrop.classList.toggle('show');
}

document.getElementById('mobileBackdrop').addEventListener('click', toggleNav);


/* No icon manipulation anymore — CSS handles everything */



/* ===========================
   SCROLL TO APPOINTMENT BTN
=========================== */
function handleButtonClick(event) {
  event.preventDefault();
  document.querySelector('#appointment').scrollIntoView({ behavior: 'smooth' });
}

/* Smooth scroll from other pages */
document.querySelectorAll('.schedule-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html#appointment';
  });
});


/* ===========================
   REMOVE UNWANTED DIV (Your existing logic)
=========================== */
document.addEventListener("DOMContentLoaded", function () {
  function removeDynamicDiv() {
    var dynamicDiv = document.querySelector('div[id^="neatDiv"]');
    if (dynamicDiv) {
      dynamicDiv.remove();
      console.log('Removed div with id starting with neatDiv');
    }
  }

  removeDynamicDiv();
  var intervalId = setInterval(removeDynamicDiv, 1000);

  setTimeout(function () {
    clearInterval(intervalId);
    console.log('Stopped checking for dynamic div');
  }, 10000);
});


/* ===========================
   FORM HANDLING (unchanged)
=========================== */
(function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();

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

            form.reset();
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
