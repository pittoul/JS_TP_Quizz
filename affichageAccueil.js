window.onload=afficherAccueil()
/**
 * 
 * 
 *      1 - ACCUEIL
 * 
 * 
 * 
 * 
 */
function afficherAccueil(){
    console.log(bestScore)
    document
    .querySelector("#colJeu")
    .innerHTML = "Bienvenue dans le QuiZZzzz !";
    document.getElementById("texte2").innerHTML = "Le meilleur score est de " + bestScore.topScore + " points et est détenu par " + bestScore.nom
  }
  