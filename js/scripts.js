// Business (or back-end) logic:

// User interface (or front-end) logic:

// The submit event listener for form#sentence
$('form#sentence').submit(function(event) {
  event.preventDefault();
  console.log('form submitted');
});
