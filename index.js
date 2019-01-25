'use strict';
function apiCall(val) {
  if (val <= 0 || val > 50) {
    //throw error
    return;
  }

  fetch(`https://dog.ceo/api/breeds/image/random/${val}`)
    .then(response => response.json())
    .then(displayResults);
  //.then(responseJSON => console.log(responseJSON));
}

function displayResults(response) {
  console.log(response);
  let imgs = response.message;
  for (let i = 0; i < imgs.length; i++) {
    $('ul').append(`<li><img src="${imgs[i]}"></li>`);
  }
}

function handleDogApp() {
  $('form').submit(function(event) {
    event.preventDefault();
    let val = $(event.currentTarget)
      .find('input')
      .val();
    apiCall(val);
  });
}

$(handleDogApp);
