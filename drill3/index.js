'use strict';

function apiCall(val) {
  fetch(`https://dog.ceo/api/breed/${val}/images/random`)
    .then(response => response.json())
    .then(displayResults)
    .catch(displayError);
}

function displayError(err) {
  $('.results').html(`<div class="error-msg">${err.message}</div>`);
}

function displayResults(response) {
  console.log(response);
  if (response.status === 'success') {
    let imgs = response.message;
    $('.results').html(`<img src="${imgs}" alt="dogpic">`);
  } else {
    displayError(response);
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
