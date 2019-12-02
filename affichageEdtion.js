"use strict"
// console.log("formQuestion")
function afficherEdition() {
//   document.querySelector("#colJeu").innerHTML = "Mode Édition"
// Formulaire d'édition de la question et de 4 réponses:
// let dansColJeu = document.querySelector("#colJeu");
// mettre le formulaire dans une div !
// creerDiv(dansColJeu, "divFormulaire", "display:flex; postion:absolute; flex-direction: column;")
  document.querySelector("#colJeu").innerHTML =
    '<form name="infosQuestion"><h3>Créer une nouvelle question</h3><br><p>choisissez 1 ou plusieurs bonnes réponses</p><br><input type="text" id="enonce" size="80" name="enonce" placeholder="Énoncé de la question..." required /><br><br><br><input size="60" type="text" id="rep1" placeholder="Réponse..." required /> - Bonne réponse : <input type="checkbox" name="bonneRep1" id="bonneRep1"><br><input size="60" type="text" id="rep2" placeholder="Réponse..." required /> - Bonne réponse : <input type="checkbox" name="bonneRep2" id="bonneRep2"><br><input size="60" type="text" id="rep3" placeholder="Réponse..." /> - Bonne réponse : <input type="checkbox" name="bonneRep3" id="bonneRep3"><br><input size="60" type="text" id="rep4" placeholder="Réponse..." /> - Bonne réponse : <input type="checkbox" name="bonneRep4" id="bonneRep4"><br><br></form><button name="enregistreQuestion" id="enregistreQuestion">Enregistrer Nouvelle Question</button>'
  // CLick sur Enregistrement:
  document.getElementById("enregistreQuestion").onclick = function() {
    let q = document.getElementById("enonce")
    let r1 = document.getElementById("rep1")
    let r2 = document.getElementById("rep2")
    let r3 = document.getElementById("rep3")
    let r4 = document.getElementById("rep4")

    let isTrue1 = document.getElementById("bonneRep1")
    let isTrue2 = document.getElementById("bonneRep2")
    let isTrue3 = document.getElementById("bonneRep3")
    let isTrue4 = document.getElementById("bonneRep4")
    let somme2Booleens = isTrue1.checked + isTrue2.checked
    let isRep1 = r1.value != "" 
    let isRep2 = r2.value != ""
    let somme2Reponses = isRep1 + isRep2
    if (q.value != "" && somme2Reponses == 2 && somme2Booleens > 0) {
      creerQuestion(
        q.value,
        r1.value,
        r2.value,
        r3.value,
        r4.value,
        isTrue1.checked,
        isTrue2.checked,
        isTrue3.checked,
        isTrue4.checked
      )
      q.value = ""
      r1.value = ""
      r2.value = ""
      r3.value = ""
      r4.value = ""
      isTrue1.checked = false
      isTrue2.checked = false
      isTrue3.checked = false
      isTrue4.checked = false
    } else {
        alert("Remplissez au moins le champ 'énoncé' et 2 réponses dont une valide parmi les 2 premières lignes !")
    }
    afficherEdition()
    imprimerToutesLesQuestions(quizz.questions)
  }
}


// function afficherToutesLesQuestions(){
//     let toutesLesQuestions = quizz.questions
//     for (let q of toutesLesQuestions){
//         imprimerUneQuestion(q)
//         creerInputText(parent, id='', value='')
//     }
// }