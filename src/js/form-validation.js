export default function validateForm() {
  let submitButton = document.querySelector('.form__submit');
  let formInputs = document.getElementsByClassName('form__input');
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    let fieldsPassed = 0;;

    for (const elementID in formInputs) {
      if (formInputs.hasOwnProperty(elementID)) {

        const inputElement = formInputs[elementID];
        let increasedID = 0;
        increasedID = elementID;
        increasedID++;

        if (inputElement.value == '') {
          console.log(document.querySelector(`.form label:nth-child(${increasedID}) p`));
          document.querySelector(`.form label:nth-child(${increasedID}) p.form__error`).innerText = `Pole "${inputElement.placeholder}" nie może być puste.`;
        } else {
          document.querySelector(`.form label:nth-child(${increasedID}) p.form__error`).innerText = '';
          fieldsPassed++;
        }

      }
    }

    if (fieldsPassed == 6) {
      alert('Wiadomość wysłana!');
    }
  });
}