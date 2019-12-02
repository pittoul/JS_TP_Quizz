"use strict"

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 * 
 * 
 * 
 *          Système de 'redirection' de l'affichage en 
 *          fonction des clics sur les 2 boutons de gauche
 * 
 * 
 * 
 * 
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
document.getElementById("btnSelect1").onclick = function() {
  gererBtn1()
}
document.getElementById("btnSelect2").onclick = function() {
  gererBtn2()
}
function gererBtn1() {
  let etatDuBouton1 = document.getElementById("btnSelect1").innerHTML
  switch (etatDuBouton1) {
    case "Éditer":
      console.log("AFFICHER EDITION")
      document.getElementById("btnSelect1").innerHTML = "Accueil"
      afficherEdition()
      imprimerToutesLesQuestions(quizz.questions)
      document.querySelector(".titrePage").innerHTML = "Edition du Quizzzz..."
      break
    case "Accueil":
      console.log("AFFICHER ACCUEIL")
      document.getElementById("btnSelect1").innerHTML = "Éditer"
      document.getElementById("btnSelect2").innerHTML = "Lancer"
      checkerScore(score)
      afficherAccueil()
      document.querySelector(".titrePage").innerHTML = "Bienvenue chez   Quizzzz..."

      break
    default:
      console.log("AFFICHER ACCUEIL")
      document.getElementById("btnSelect1").innerHTML = "Éditer"
      afficherAccueil()
  }
}

function gererBtn2() {
  let etatDuBouton2 = document.getElementById("btnSelect2").innerHTML
  switch (etatDuBouton2) {
    case "Lancer":
      console.log("LANCER UNE PARTIE")
      document.querySelector(".titrePage").innerHTML = quizz.name

      document.getElementById("btnSelect2").innerHTML = "Suivante"
      document.getElementById("btnSelect1").innerHTML = "Accueil"
      lancerLaPartie()
      break
    case "Suivante":
      console.log("QUESTION SUIVANTE")
      document.getElementById("btnSelect2").innerHTML = "Suivante"
      let enonce = document.getElementById("question").innerHTML
      verifChoixMultiple(enonce)
      //   verifGagne(question, )
      afficherQuestionSuivante()
      break
    default:
      console.log("LANCER UNE PARTIE")
      document.getElementById("btnSelect2").innerHTML = "Lancer"
      afficherPremiereQuestion()
  }
}
