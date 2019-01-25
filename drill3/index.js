'use strict';

function apiCall(val) {
  if (val <= 0 || val > 50) {
    //throw error
    return;
  }

  fetch(`https://dog.ceo/api/breed/${val}/images/random`)
    .then(response => response.json())
    .then(displayResults)
    .catch(displayError);
}

function displayError(err) {
  $('.results').html(`<div>${err}</div>`);
}

function displayResults(response) {
  console.log(response);
  if (response.code === '404') {
    displayError(response.message);
  } else {
    let imgs = response.message;
    $('.results').html(`<img src="${imgs}" alt="dogpic">`);
  }
}

function handleDogApp() {
  $('form').submit(function (event) {
    event.preventDefault();
    let val = $(event.currentTarget)
      .find('input')
      .val();
    apiCall(val);
  });
}

$(handleDogApp);