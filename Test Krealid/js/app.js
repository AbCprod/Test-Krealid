$(document).foundation()
/* with regex */
/*
var formValid = document.getElementById('submit');
var prenom = document.getElementById('firstname');
var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
var missPrenom = document.getElementById('missfirstname');

formValid.addEventListener('click', validation);

function validation(event){
    if (prenom.validity.valueMissing){
        event.preventDefault();
        missPrenom.textContent = 'Vous n'avez pas renseigné ce champ';
        missPrenom.style.color = 'red';
    }
    else if (prenomValid.test(prenom.value) == false){
        event.preventDefault();
        missPrenom.textContent = 'Le format est incorrect';
        missPrenom.style.color = 'orange';
    }
}
*/
