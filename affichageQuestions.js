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
  let parent = document.querySelector("#colJeu")
  let indice = 0
  //
  let sauterLigne = document.createElement("p")
  sauterLigne.setAttribute("style", "display:flex; margin-top:50px")
  sauterLigne.innerHTML = " <br> <br>cochez la/les bonne(s) réponse(s)"
  document
    .getElementById("enregistreQuestion")
    .parentElement.appendChild(sauterLigne)
  //
  for (let question of questions) {
    // indice = Object.keys(questions)
    // console.log(indice)
    creerInputText(parent, "uneQuestion_" + indice, question.heading)
    // console.log("La question : ", question.heading) // affichage question
    indice += 1
    let indiceReponse = 1
    for (let uneReponse of question.propositions) {
      creerInputTextContent(
        parent,
        "uneReponse_" + indiceReponse + "_" + indice,
        uneReponse.content
      )
      creerCheckBox(
        parent,
        "estCorrect_" + indiceReponse + "_" + indice,
        "est-ce la bonne réponse ?"
      )
      document.getElementById(
        "estCorrect_" + indiceReponse + "_" + indice
      ).checked = uneReponse.correct
      indiceReponse += 1
    }
    creerBouton(
      parent,
      "supprQ_" + (indice - 1),
      "supprimer question " + indice
    )
    creerBouton(
      parent,
      "mettreAJourQ_" + (indice - 1),
      "mettre à jour la question " + indice
    )
    document
      .getElementById("supprQ_" + (indice - 1))
      .setAttribute("style", "margin: 5px 5px 5px 5px;")
    document.getElementById("supprQ_" + (indice - 1)).onclick = function() {
      supprimerQuestion(this.id)
    }

    document
      .getElementById("mettreAJourQ_" + (indice - 1))
      .setAttribute("style", "margin: 5px 5px 5px 5px; margin-bottom:50px;")
    document.getElementById(
      "mettreAJourQ_" + (indice - 1)
    ).onclick = function() {
      majQuestion(this.id)
    }
  }
  document.getElementById(
    "mettreAJourQ_" + (indice - 1)
  ).onclick = function() {}
}

/** -------------------------------------------------------
 * 
 *    SUPPRIMER QUESTION
 * 
 * 
 * 
 * @param {*} id 
 -------------------------------------------------------*/
function supprimerQuestion(id) {
  let indice = id.split("_")
  console.log(quizz.questions[indice[1]])
  quizz.questions.splice([indice[1]], 1)
  localStorage.setItem("quizz", JSON.stringify(quizz))
  afficherEdition()
  imprimerToutesLesQuestions(quizz.questions)
}

/**-------------------------------------------------------
 * 
 *          MODIFIER QUESTION
 * 
 * 
 * 
 * 
 * @param {*} id 
 ------------------------------------------------------- */
function majQuestion(id) {
  let ind = id.split("_")
  let indice = parseInt(ind[1], 10)
  console.log(quizz.questions[indice])
  let updateQ = quizz.questions[indice]
  console.log(updateQ.propositions.length)
  updateQ.heading = document.getElementById("uneQuestion_" + indice).value
  console.log(updateQ.heading)
  for (let i = 0; i < updateQ.propositions.length; i++) {
    console.log("uneReponse_" + (i + 1) + "_" + (indice + 1))
    updateQ.propositions[i].content = document.getElementById(
      "uneReponse_" + (i + 1) + "_" + (indice + 1)
    ).value
    updateQ.propositions[i].correct = document.getElementById(
      "estCorrect_" + (i + 1) + "_" + (indice + 1)
    ).checked
  }
  console.log(quizz.questions[indice])
  localStorage.setItem("quizz", JSON.stringify(quizz))
  afficherEdition()
  imprimerToutesLesQuestions(quizz.questions)
}

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
  document.getElementById("question").innerHTML = uneQuestion.heading
  //
  let tabReponses = uneQuestion.propositions
  
  creerDiv(dansColJeu, "reponses", "display:flex; ")
  let dansDivReponses = document.querySelector("#reponses")
  for (let rep of tabReponses) {
    let numeroRep = "reponse" + indice // creation id
    if (document.getElementById(numeroRep)) {
      document.getElementById(numeroRep).innerHTML = ""
    }
    let isPresent = document.getElementById(numeroRep)
    // Si les boutons n'ont pas encore été créés:
    if (!isPresent) {
      creerDiv(
        dansDivReponses,
        numeroRep,
        "border-radius:8px; margin: 10px 10px 10px 10px; padding:20px 20px 20px 20px; background-color:gray;"
      )
      document.getElementById(numeroRep).innerHTML = rep.content
      document.getElementById(numeroRep).setAttribute("class", "reponseEnCours")
      creerCheckBox(document.getElementById(numeroRep), "cb_" + numeroRep, "")
    } else {
      // s'il sont déjà là on les garde !
      document.getElementById(numeroRep).innerHTML = rep.content
      creerCheckBox(document.getElementById(numeroRep), "cb_" + numeroRep, "")
    }
    if (rep.content == "") {
      document.getElementById(numeroRep).setAttribute("hidden", "")
    } else {
      document.getElementById(numeroRep).removeAttribute("hidden")
    }
    indice += 1
  }
  // }
}
