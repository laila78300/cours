var jour = prompt("Quelle jour somme-nous ?");

if(jour === "lundi"){
    document.write("Demain nous serons MARDI");
} else if(jour === "mardi"){
    document.write("Demain nous serons MERCREDI");
} else if(jour === "mercredi"){
    document.write("Demain nous serons JEUDI");
} else if(jour === "jeudi"){
    document.write("Demain nous serons VENDREDI");
} else if(jour === "vendredi"){
    document.write("Demain nous serons SAMEDI");
} else if(jour === "samedi"){
    document.write("Demain nous serons DIMANCHE");
} else if(jour === "dimanche"){
    document.write("Demain nous serons LUNDI");
}else {
    document.write("Jour inconnu");
}


switch(jour){
    case "lundi":
    console.log("demain on est mardi");    
    break;
    case "mardi":
    console.log("demain on est mercredi");    
    break;
    case "mercredi":
    console.log("demain on est jeudi");
    break;
    case "jeudi":
    console.log("demain on est vendredi");    
    break;
    case "vendredi":
    console.log("demain on est samedi");    
    break;
    case "samedi":
    console.log("demain on est dimanche");    
    break;
    case "dimanche":
    console.log("demain on est lundi");    
    break;
    défault:
    console.log("désolé, vérifiez l'orthographe et veuillez écrire sans majusules.");                

}