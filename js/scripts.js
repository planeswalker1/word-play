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

  //An array that contains only words of a specific word length
  let specificWords = inputWords.filter(word => word.length >= 3);
  console.log('specificWords array: ', specificWords);

  // A mapped array of specificWords that are lowercased
  let lowerCaseWords = specificWords.map(function(word) {
    return  word.toLowerCase();
  });
  console.log('lowerCaseWords array: ', lowerCaseWords);
});
