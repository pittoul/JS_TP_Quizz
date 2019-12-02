"use strict"
/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 * 
 * 
 * 
 * Les données récupérées du JSON fourni sont stockées dans le localStorage
 *
 * 
 * 
 * 
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
let quizz = null

let maFonctionFetch = () =>
  fetch("defaultQuizz.json")
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      quizz = data
      console.log(data)
      localStorage.setItem("quizz", JSON.stringify(data))
      return data
    })

window.onload = maFonctionFetch()

// On attend 1500ms pour que le json soit bien enregistré dans le localStorage
setTimeout(() => {
  resteDuCode()
}, 1500)

let score = 0
let bestScore = {}
function resteDuCode() {
  quizz = JSON.parse(localStorage.getItem("quizz"))

  /**  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
      * 
      * 
      * 
      *   ADAPTATION DU RECORD:
      * 
      * 
 * 
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

  bestScore = {
    nom: quizz.record.holderName,
    topScore: quizz.record.score
  }
  adapterLesQuestions()
  creerQuestionsParDefaut()
  //   afficherAccueil()
}

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 * 
 * 
 * 
 * -obsolète
 *     ADAPTATION DES QUESTION DU JSON A MON SYSTEME
 * 
 *          car je n'avais pas vu le json fourni....
 * 
 * 
 * 
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
let questions = []
let repAdapt = ""
let isTrueAdapt
function adapterLesQuestions() {
  let questionsDefault = quizz.questions
  for (let item of questionsDefault) {
    let newQuestion = {}
    let reponsesAdapt = {}
    newQuestion.question = item.heading
    // console.log(item.propositions) // tableau de reponses
    let i = 1
    for (let desReponses of item.propositions) {
      repAdapt = desReponses.content
      isTrueAdapt = desReponses.correct
      reponsesAdapt[repAdapt] = isTrueAdapt
    }
    // correction pour que toutes les questions données aient 4 réponses
    // car cela est nécessaire par la suite
    if (Object.keys(reponsesAdapt).length == 3) {
      reponsesAdapt[""] = false
    }
    newQuestion.reponses = reponsesAdapt
    questions.push(newQuestion)
  }
}

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
    "un Signe",
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

  // ADAPTATEUR : Pour enregistrer la question dans le Quizz

  let tabProp = [
    {
      content: reponse1,
      correct: isTrue1
    },
    {
      content: reponse2,
      correct: isTrue2
    },
    {
      content: reponse3,
      correct: isTrue3
    },
    {
      content: reponse4,
      correct: isTrue4
    }
  ]
  let aAjouterAuQuizz = { heading: laQuestion ,  propositions: tabProp }
  quizz.questions.push(aAjouterAuQuizz)
//   console.log(quizz)
  localStorage.setItem("quizz", JSON.stringify(quizz))
  //   return questions
}
