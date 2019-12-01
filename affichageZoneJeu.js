/** -------------------------------------------------------
 *
 *
 *
 *
 *                      IMPRESSION DE TOUTES LES QUESTIONS - DES REPONSES ET DE LA BONNE REPONSE
 *                                      (void)
 *
 *
 *
 *
 *
 *
 ------------------------------------------------------- */
function imprimerToutesLesQuestions(questions) {
  let scoreMaxPossible = Object.entries(questions).length
  console.log("Nombre de questions : ", scoreMaxPossible)
  for (let detailsQuestion of questions) {
    indice = Object.keys(questions)
    console.log("La question : ", detailsQuestion.question) // affichage question
    //   console.log("Les réponses : ", detailsQuestion.reponses); // affichage de toutes les réponses
    for (let uneReponse of Object.keys(detailsQuestion.reponses)) {
      console.log("Une réponse : ", uneReponse) // affichage d'une réponse (de toutes en fait !)
    }
    // pour retourner la bonne réponse:
    let bonneReponse = Object.keys(detailsQuestion.reponses).find(
      reponse => detailsQuestion.reponses[reponse] === true
    )
    console.log("*** La bonne réponse : ", bonneReponse, " ****\n\n")
  }
}
// imprimerToutesLesQuestions(questions);
/** -------------------------------------------------------
   *
   *
   *
   *                 IMPRIMER UNE SEULE QUESTION
   *
   *
   *
   *
   * @param {Question} uneQuestion
   ------------------------------------------------------- */
function imprimerUneQuestion(uneQuestion) {
  let dansColJeu = document.querySelector("#colJeu")
  creerPara(dansColJeu, "question", "Bienvenue dans le QuiZZzzz !!")
  let indice = 1
  //  - - - - - - - - - -       la question
  console.log(uneQuestion.question)
  document.getElementById("question").innerHTML = uneQuestion.question
  //
  let tabReponses = Object.keys(uneQuestion.reponses)
  creerDiv(dansColJeu, "reponses", "display:flex; ")
  let dansDivReponses = document.querySelector("#reponses")
  for (let rep of tabReponses) {
    // if (rep != "") {
      let numeroRep = "reponse" + indice // creation id 
      let isPresent = document.getElementById(numeroRep)
      // Si les boutons n'ont pas encore été créés:
      if (!isPresent) {
        creerDiv(dansDivReponses, numeroRep,  "border-radius:8px; margin: 10px 10px 10px 10px; padding:20px 20px 20px 20px; background-color:gray;")
        document.getElementById(numeroRep).innerHTML = rep
        creerCheckBox((document.getElementById(numeroRep)), "cb_"+numeroRep, "")
      } else {
        // s'il sont déjà là on les garde !
        document.getElementById(numeroRep).innerHTML = rep
        creerCheckBox((document.getElementById(numeroRep)), "cb_"+numeroRep, "")
      }
      if (rep == ""){
        document.getElementById(numeroRep).setAttribute("hidden", "")
      } else {
        document.getElementById(numeroRep).removeAttribute("hidden")

      }
      indice += 1
    }
  // }
}
