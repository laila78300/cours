// commentaire sur une ligne

/*
Ici,je fait un commentire sur plusieurs lignes

*/

// -- 1: Déclarer une variable en JS

 

// --2 : Affecter une valeur à une variable
prenom="Laila";
// var Prenom="Laila";

// -- 3 : une instruction se termine TOUJOURS Par un point-virgule ;  aussi il est possible d'écrire plusieurs instruction sur une seule ligne
// instr_1;
// instr_2; instr_3;

// --4 : Afficher une boite de dialogue (2 facons de faire)
// alert("Super, tu est arrivé sur mon site !");
// windows.alert("Super tu est arriver là");

// -- 5 : Afficher dans la console (ici la valeur de ma variable Prenom)
// console.log(prenom);

// -- 6: Affficher dans la page web
// document.write("A la pause bachir il dort");

// -- 7 :Demander à l'utilisateur une valeur (2 facons)

// window.prompt("on est quel jour?" , "jour de la semaine");
// prompt("question: on est quel jour?" , "jour de la semaine");


// -- et pour manipuler cette valeur, je n'oublie pas de la stocker
// var jour=prompt("question: on est quel jour?" , "jour de la semaine");
// console.log(jour);

// --8 : Attention /!\ le JS est sensible )à la case ('case sensitive')
// mavariable =/= mavariable =/= ma varible
//                camel case       snake case

// --9 : Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caracteres alphanumériques, et ne peut pas etre un mot réserver (var, for .... des éléments natifs du langages JS)

// 10 : Une variable peut-etre déclarer de façon explicite :

// façon explicite
// var fruit;
// fruit = "fraise";

// ou implicite
// var fruit_2 ="coco";

/*
~~~~~~~~~~~~ Les types de Variables ~~~~~~~~~~~~~~~~~~~~~~
*/

// 1. Chaîne de caractères (sting)
var vacances = "2023";
var destination = "Australie";
// console.log (vacances,destination);
// 2. Un nombre entier (integer ou int)
var annee = 2023;
// console.log(annee);

// 3. Un nombre décimal (float)
var nombre_a_virgule = -5.32;
// console.log(nombre_a_virgule);

var vacances = "2020";
console.log(vacances);
// 4. Un booleen (booleen = VRAI:FAUX = TRUE/FALSE)
var unbooleen = false;

// -- 5. Les Constantes

/* 
    La déclaration constante permet de créer une constante accessible uniquement en lecture.
    Contrairement à une variable sa valeur ne peut plus être modifiée par reaffectation plus bas dans le code
    Une constante ne peut pas etre déclarer à nouveau dans le meme script
*/

// -- Par convention les constantes son en majuscules

const Pays ="France"; // string
const AN = '2020'; // string
const BIRTH =2020; // nombre / int / integrer


// -- 6. typeof permet de connaitre le type de ma variable

// console.log(vacances);
console.log(typeof vacances);
console.log(typeof annee);

// En JS les variable sont auto-typées
// On peut convertir une variable de type NUMBER en STRING et aussi STRINK en NUMBER avec les fonctions natives de JS// la fonction parseInt() renvoie un entier à partir d'une chaine de caractères

var unChiffre ="12";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING + NUMBER

unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// je ré-affecte une valeur 
unchiffre = "12.22"
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING + FLOT

unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// NUMBER = STRING 
var nb_en_lettres = 258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);






