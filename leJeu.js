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
      bestScore.nom = bestName
      bestScore.topScore = score
      localStorage.setItem("bestScore", JSON.stringify(bestScore))
      document.getElementById("texte2").innerHTML =
        "Votre score est de <b>" +
        score +
        " points</b> Le meilleur score est de <b>" +
        bestScore.topScore +
        " points</b> et est détenu par <b>" +
        bestScore.nom +
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
  ancienBestScore = bestScore.topScore
  idQuestionSuivante = 1
  document.getElementById("colJeu").innerHTML = ""
  document.getElementById("texte2").innerHTML =
    "Votre score est de <b>" +
    score +
    " points</b> Le meilleur score est de <b>" +
    bestScore.topScore +
    " points</b> et est détenu par <b>" +
    bestScore.nom +
    "</b>"
  // Poser la première question:
  imprimerUneQuestion(questions[0])
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
function afficherQuestionSuivante() {
  if (idQuestionSuivante < questions.length) {
    imprimerUneQuestion(questions[idQuestionSuivante])
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
  for (let q of questions) {
    if (q.question == questionPosee.innerHTML) {
        // alert("Superbe !!!")
        let repTab = Object.values(q.reponses)
        // for (let rj of reponsesJoueur){
          // for (let rbonne of repTab){
            // if (rj == rbonne){
            //   alert("4fois")
            // }
          // }
        // }
        console.log(repTab)
        // console.log((repTab = reponsesJoueur))
        // if(repTab == reponsesJoueur){
        //   alert('Cool')
        // }
    }
    console.log(reponsesJoueur)
  }
}

function verifGagne(questionPosee, reponseCliked) {
  let questionEnCours = questionPosee

  // verifier si reponse ok donc si pour cle(=reponse) => true
  // pour la question, calculer le total cases a cocher, puis faire
  // la verif en comparant la somme precalculee a la somme constatée
  // On retrouve la bonne réponse...
  let bonneReponse = Object.keys(questionEnCours.reponses).find(
    value => questionEnCours.reponses[value] === true
  )
  console.log("BOONE REOSNE" + bonneReponse)
  // // que l'on va comparer à celle choisie:
  let reponseDuJoueur = questionEnCours.reponses[reponseCliked]
  // console.log("Le joueur a t'il raison ? : ", reponseDuJoueur ? "oui" : "non")
  if (reponseDuJoueur === true) {
    alert("BRAVOOOO !!!!")
    score += 1
    if (score > bestScore.topScore) {
      bestScore.topScore = score
    }
    console.log("Score : " + score)
    document.getElementById("texte2").innerHTML =
      "Votre score est de <b>" +
      score +
      " points</b> Le meilleur score est de <b>" +
      bestScore.topScore +
      " points</b> et est détenu par <b>" +
      bestScore.nom +
      "</b>"
    afficherQuestionSuivante()
  } else {
    alert("Perdu...")
    afficherQuestionSuivante()
  }
  console.groupEnd("verifGAGNE")
  return score
}

document.getElementById("texte1").innerHTML =
  "Nombre total de questions : <br>" + questions.length
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

// si ma reponse == bonneReponse alors score ++ 1;

// LOCAL STORAGE:
// localStorage.setItem("questions", JSON.stringify(questions))
// a recharger on load si lenght > 0
// On caste le jSon du Local Storage en Objet:
// var question1Stockee = JSON.parse(localStorage.getItem("question1"))
// console.log(question1Stockee.reponses);

// Recupération des réponses:
// let dico = question1Stockee.reponses
// let nbreReponses = Object.keys(dico).length;

// document.getElementById("colJeu").innerHTML = question1.question
// document.getElementById(
//   "colJeu"
// ).innerHTML = question1.reponses.valueOf().toString()

// let uneCle = Object.keys(question1.reponses)[1] // un bout de bois
// let uneValeur = Object.values(question1.reponses)[1] //true
// console.log(uneCle, uneValeur);

// for (let reponse of Object.keys(question1.reponses)) {
//   //   console.log(reponse);
// }
// indice des questions:
// for (let numeroDeQuestion of Object.keys(questions)) {
//   console.log()
//   console.log(numeroDeQuestion)
// }
