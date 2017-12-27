// Business (or back-end) logic:

// User interface (or front-end) logic:

// The submit event listener for form#sentence
$('form#sentence').submit(function(event) {
  event.preventDefault();

  // A regular expression to split the sentence input
  let re = /[ ,.!?]+/;

  // A variable that contains the splitted sentence input
  let inputWords = $('input#input').val().split(re);
  console.log('inputWords array: ', inputWords);
});
