// window.onload=afficherAccueil()
setTimeout(function(){ afficherAccueil() }, 1500);
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
    // console.log(bestScore)
    document
    .querySelector("#colJeu")
    .innerHTML = "Bienvenue dans le QuiZZzzz !";

    document.getElementById("texte2").innerHTML = "Le meilleur score est de " + quizz.record.score + " points et est détenu par " + quizz.record.holderName
    document.getElementById("texte1").innerHTML = "Welcome !"
  }
  