"use strict"
/**
 * Les données sont stockées dans le localStorage
 * 
 */
let score = 0
let bestScore = {
  nom: "Michel",
  topScore: 1
}
if (JSON.parse(localStorage.getItem("bestScore")) != null) {
  bestScore = JSON.parse(localStorage.getItem("bestScore"))
}
// CHARGEMENT DES QUESTIONS
let questions = []
let aTester = JSON.parse(localStorage.getItem("questions"))
if (aTester != null && aTester.length > 4) {
  questions = JSON.parse(localStorage.getItem("questions"))
} else {
  creerQuestionsParDefaut()
}
console.log(questions)

/** -------------------------------------------------------
 *
 *
 *
 *
 *
 *          création de 4 questions par défaut
 *
 *
 *
 *
 *
 ------------------------------------------------------- */
function creerQuestionsParDefaut() {
  creerQuestion(
    "Qu'est ce qu'un boomerang qui ne revient pas ?",
    "Un parapluie",
    "Un bout de bois",
    "Un caillou",
    "",
    false,
    true,
    false,
    false
  )
  creerQuestion(
    "Si tu vois un canard blanc sur un lac, c'est...",
    "un Cygne",
    "un canard blanc",
    "un bout de nuage",
    "",
    true,
    false,
    false,
    false
  )
  creerQuestion(
    "un plus un égale ?",
    "6",
    "19",
    "2",
    "",
    false,
    false,
    true,
    false
  )
  creerQuestion(
    "6 plus 6 égale ?",
    "12",
    "134",
    "1",
    "456",
    true,
    false,
    false,
    false
  )
}

/** -------------------------------------------------------
 *
 *
 *
 *
 *
 *
 *                  Méthode de
 *                  Création des questions (et de mise dans un tableau de questions)
 *
 *
 *
 *
 *
 *
 *
 *
 * @param {String} question
 * @param {String} reponse1
 * @param {String} reponse2
 * @param {String} reponse3
 * @param {String} reponse4
 * @param {number} numeroDeLaBonneReponse
 ------------------------------------------------------- */
function creerQuestion(
  laQuestion,
  laReponse1,
  laReponse2,
  laReponse3,
  laReponse4,
  isTrue1,
  isTrue2,
  isTrue3,
  isTrue4
) {
  let question = {}
  let reponse1 = laReponse1
  let reponse2 = laReponse2
  let reponse3 = laReponse3
  let reponse4 = laReponse4
  let reponses = {
    [reponse1]: isTrue1,
    [reponse2]: isTrue2,
    [reponse3]: isTrue3,
    [reponse4]: isTrue4
  }
  question.reponses = reponses
  question.question = laQuestion
//   console.log(question)
  // AJOUT AU TABLEAU DE REPONSES
  questions.push(question)
//   console.log("Nbre de questions : " + questions.length) // la longueur tableau d'objets contenant les questions
  localStorage.setItem("questions", JSON.stringify(questions))
  return questions
}
// console.log(JSON.parse(localStorage.getItem("questions")))
