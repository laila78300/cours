// alert ('test');

// Structure de base IF

if (true) {// par défaut la condition à vérifier le IF vérifie si elle est vraie

    //......code .......

}    

var nb1 = 10;
if (nb1 < 50){
    console.log("nb1 est bien inférieur 50");
}

// Else

if (true){
    //........ code si VRAI...........
} else {
    //....... code si FAUX
}

if ("delia >50"){
    console.log ("nb1 est bien supérieur à 50");
} else{
    console.log ("nb1 est inférieur à 50");
}


// EXERCICE

// On utilise le IF pour vérifier l'age de l'internaute. 
// s'il est majeur je lui souhaite la biennvenue
// s'il est mineur je lui (1) signale et (2) le renvoie vers un autre site

// 1-- je déclare la majorité légal
var majoriteFr =18;

// 2-- demander l'age en s'assurant que nous avons un NUMBER
var age = parseInt(prompt("Indiquez votre age"));

// 3-- je vérifie si mon internaute est majeur
if (age >= majoriteFr){
    alert ("Bienvenue, vous êtes majeur") // Bienvene si vrai
} else{
    //s'il est mineur je lui signale
    alert("Allez voir un autre site")
    document.location.href="http://www.darty.fr/"

}


