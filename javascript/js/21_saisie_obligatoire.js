'use strict' // Mode strict du JavaScript

// Déclaration d'une variable

var nombre;


//  La boucle do while s'éxecutera toujours au moins une fois, alors que la boucle while peut ne pas s'éxécuter si la condition est fausse dés le dépard

// On utilise cette boucle quand elle doit s'éxecuter au mois une fois pour que la comparaison puisse s'effectuer.

do{
    nombre = parseFloat(window.prompt('Veuillez saisir un nombre :'));
}while(isNaN(nombre));
// nombre = 

document.write('<p>Merci, vous avez saisi <strong>' +nombre + '</strong></p>');

