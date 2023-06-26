'use strict' // Mode strict du JS

// 1-Variable

// Recherche du buton dans l'arbre DOM + Document Object Model
var buton = document.getElementById('toggle-rectangle');

//  Recherche du rectangle dans l'arbre DOM

var rectangle = document.querySeclector('.rectangle');

//  2-Fonctions

//  1--Fonction au click sur le buton

    function OnClickButton(){
    rectangle.classList.toggle('hide');
}

