var mois = parseInt(prompt("Quelle mois choissisez-vous " , "<saisir un chiffre entre 1 et 12>"));

if(mois === 2){// si on a choisi Février => 2 si le mois est strictement = à 2
    document.write("Le mois numéro" + mois)


}else if ((mois === 4)  || (mois === 6) || (mois === 9) (mois === 11)){
      // 4 c'est Avril  6 c'est juin    9 septembre 
      // si on a choisi un mois qui fait 30 jours
      document.write("Le mois numéro" + mois + " fait 30 jours.")


}else if ((mois === 1)  || (mois === 3) || (mois === 5) (mois === 7 ) (mois === 8)  || (mois === 10 ) || (mois === 12)){    
    //si on a choisi un mois qui fait 31 jours

}else{
    document.write("Votre choix " + mois + "n'est pas dans le calendrier. ");
}
  

