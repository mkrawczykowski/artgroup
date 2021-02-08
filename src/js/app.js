////////////////////////////////////////////////////////////////////////////////
// STYLES FOR WEBPACK
////////////////////////////////////////////////////////////////////////////////

import '../scss/app.scss';

////////////////////////////////////////////////////////////////////////////////
// JAVASCRIPT LIBRARIES
////////////////////////////////////////////////////////////////////////////////


// import $ from 'jquery';

// window.$ = $;

////////////////////////////////////////////////////////////////////////////////
// CUSTOM SCRIPTS
////////////////////////////////////////////////////////////////////////////////

import validateForm from './form-validation.js';

document.addEventListener('DOMContentLoaded', function () {
  validateForm();
});

(() => {
  console.log('babel-teraz');
})();

// $(() => {


// });
