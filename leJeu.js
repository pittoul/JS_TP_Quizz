"use strict"
/** - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 * 
 * 
 * 
 *        CHECKER LE SCORE EN TEMPS REEL
 * 
 * 
 * 
 * 
 * 
 * @param {number} score 
- - - - - - - - - - - - - - - - - - - - - - - - - - -   */
function checkerScore(score) {
  if (score > ancienBestScore) {
    let bestName = prompt(
      "Bravo ! VOus avez battu le record !<br> Quel est votre nom ?"
    )
    console.log(bestName)
    if (bestName != null) {
      quizz.record.holderName = bestName
      quizz.record.score = score
      // let bestScore = {
      // quizz.record.holderName = bestName
      quizz.record.score = score
      localStorage.setItem("quizz", JSON.stringify(quizz))
      document.getElementById("texte2").innerHTML =
        "Votre score est de <b>" +
        score +
        " points</b> Le meilleur score est de <b>" +
        quizz.record.score +
        " points</b> et est détenu par <b>" +
        quizz.record.holderName +
        "</b>"
    }
  }
}

let ancienBestScore = 0
/** - - - - - - - - - - - - - - - - - - - - - - - - 
 * 
 * 
 * 
 * 
 * 
 * 
 *        LANCER LA PARTIE
 * 
 * 
 * 
 * 
 * 
 - - - - - - - - - - - - - - - - - - - - - - - -  */
function lancerLaPartie() {
  // Affihage zone gauche de l'écran:
  ancienBestScore = quizz.record.score
  score = 0
  idQuestionSuivante = 1
  document.getElementById("colJeu").innerHTML = ""
  document.getElementById("texte2").innerHTML =
    "Votre score est de <b>" +
    score +
    " points</b> Le meilleur score est de <b>" +
    quizz.record.score +
    " points</b> et est détenu par <b>" +
    quizz.record.holderName +
    "</b>"
    document.getElementById("texte1").innerHTML =
    "Nombre total de questions : <br>" + quizz.questions.length + "<br>Question : "+ "1" +" sur "+ quizz.questions.length + "<br>Votre score est de " + score + " / " + quizz.record.score + " (meilleur score)"
  // Poser la première question:
  imprimerUneQuestion(quizz.questions[0])
}

/** - - - - - - - - - - - - - - - - - - - - - 
 *
 * 
 * 
 * 
 * 
 *    Lancer les questions suivantes
 *
 *
 * 
 * 
 * 
 - - - - - - - - - - - - - - - - - - - - - - - */
let idQuestionSuivante = 1
//
//
function afficherQuestionSuivante() { // Penser a la fin a donner son score au joueur !!!!
  if (idQuestionSuivante < quizz.questions.length) {
    // document.getElementsByClassName("reponseEnCours").innerHTML = ""
    imprimerUneQuestion(quizz.questions[idQuestionSuivante])
    document.getElementById("texte1").innerHTML =
    "Nombre total de questions : <br>" + quizz.questions.length + "<br>Question : "+ (idQuestionSuivante+1) +" sur "+ quizz.questions.length + "<br>Votre score est de " + score + " / " + quizz.record.score + " (meilleur score)"
    idQuestionSuivante += 1
  } else {
    // FIN DE PARTIE
    console.log(score)
    checkerScore(score)
    afficherAccueil()
    score = 0
    document.getElementById("btnSelect1").innerHTML = "Éditer"
    document.getElementById("btnSelect2").innerHTML = "Lancer"
  }
}

/**
 * INUTILISÉE...
 * projet de création de quizz pour pouvoir choisir dans une liste de quizz
 */
function creerSonQuizz() {
  // let nomQuizz = ""
  // let bestScore = {nom:score}
  // bestScore.nom = ""
  // bestScore.score = 0
  let questions = JSON.parse(localStorage.getItem("questions"))
  let bestScore = JSON.parse(localStorage.getItem("bestScore"))
  let quizz = {
    nomQuizz: "",
    listeQuestions: {},
    bestScore: {}
  }

  quizz.nomQuizz = "un Nom de Quizz"
  quizz.listeQuestions = questions
  quizz.bestScore = bestScore
}

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 * 
 * 
 * 
 *              LE JEU :  VERIFICATION DE LA REPONSE DONNEE
 * 
 * 
 * 
 * 
 * 
 * @param {Question} questionPosee 
 * @param {String} reponseCliked 
 * 
 * 
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function verifChoixMultiple(questionPosee) {
  console.log(questionPosee)
  let cb1 = document.getElementById("cb_reponse1")
  let cb2 = document.getElementById("cb_reponse2")
  let cb3 = document.getElementById("cb_reponse3")
  let cb4 = document.getElementById("cb_reponse4")
  let reponsesJoueur = [cb1.checked, cb2.checked, cb3.checked, cb4.checked]
  let repTab = []
  // COMPARAISON DES RESULTATS SOUS FORME DE 2 TABLEAUX
  for (let q of quizz.questions) {
    if (q.heading == questionPosee) {
      // alert("comparer les reponses")
      for (let desBool of q.propositions){
        repTab.push(desBool.correct)
      }
      // repTab = q.propositions.correct
      console.log(repTab)
    }
  }
  let compteur = 0
  for (let ind = 0; ind < reponsesJoueur.length; ind++) {
    if (reponsesJoueur[ind] != repTab[ind]) {
      compteur += 1
      // console.log(compteur)
    }
  }
  if (compteur == 0) { // - - - - - - BONNE REPONSE
    score += 1
    if (score > quizz.record.score) {
      quizz.record.score = score
      quizz.record.holderName = "Vous !"
    }
    console.log("Score : " + score)
    document.getElementById("texte2").innerHTML =
      "Votre score est de <b>" +
      score +
      " points</b> Le meilleur score est de <b>" +
      quizz.record.score +
      " points</b> et est détenu par <b>" +
      quizz.record.holderName +
      "</b>"
  }
}

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *
 *
 *
 *
 *
 *
 *
 *              VRAC
 *
 *
 * localStorage.setItem("questions", JSON.stringify(questions))
 *  question1Stockee = JSON.parse(localStorage.getItem("question1"))
 *
 *
 *
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

