// Business (or back-end) logic:

// A Function to capitalize a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//A function to change h2 text with a string
function updateH2(string) {
  $('div.output h2').text(string);
}

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

  // Capitalize lowerCaseWords array last item
  lowerCaseWords[lowerCaseWords.length - 1] = capitalizeFirstLetter(lowerCaseWords[lowerCaseWords.length - 1]);
  console.log('lowerCaseWords last array item: ', lowerCaseWords[lowerCaseWords.length - 1]);

  // Join lowerCaseWords array to form the sentence output
  let outPutText = lowerCaseWords.reverse().join(' ') + '!';
  console.log('outPutText string:', outPutText);

  updateH2(outPutText);
  $('div.output').slideDown();
});
