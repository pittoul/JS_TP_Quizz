"use scrict"

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *
 *
 *               FONCTIONS de création des éléments graphiques
 *                                  ||
 *                                  ||
 *                                  \/
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/** -------------------------------------------------------
 * Création de Rangées
 * largeur et hauteur sont des int qui représentent des pixels
 * @param {*} largeur
 * @param {*} hauteur
 * @param {*} id
 * @param {*} bgColor
 */
function creerDivRow(
  largeur,
  hauteur,
  id = "",
  bgColor = "rgb(200, 205, 242)"
) {
  let uneDiv = document.createElement("div")
  uneDiv.setAttribute("class", "row")
  uneDiv.setAttribute("id", id)
  uneDiv.setAttribute(
    "style",
    "display:flex; width:" +
      largeur +
      "; height:" +
      hauteur +
      "; background-color:" +
      bgColor +
      "; position:relative;"
  )

  return uneDiv
}

/** -------------------------------------------------------
 *                    Création de Colonnes
 * @param {*} largeur
 * @param {*} hauteur
 * @param {*} id
 * @param {*} bgColor
 */
function creerDivCol(
  largeur,
  hauteur,
  id = "",
  bgColor = "rgb(200, 205, 242)"
) {
  let uneDiv = document.createElement("div")
  uneDiv.setAttribute("class", "col")
  uneDiv.setAttribute("id", id)
  uneDiv.setAttribute(
    "style",
    "display:flex; width:" +
      largeur +
      "; height:" +
      hauteur +
      "; background-color:" +
      bgColor +
      "; position:relative;"
  )
  return uneDiv
}

/**
 *                    Création Bouton
 * @param {*} parent
 * @param {*} id
 * @param {*} infos
 */
function creerBouton(parent, id = "", infos = "joli Bouton !") {
  let unBouton = document.createElement("button")
  unBouton.setAttribute("id", id)
  parent.append(unBouton)
  document.querySelector("#" + id).innerHTML = infos
  return unBouton
}

/**
 *
 *                    Création Paragraphe
 * @param {*} parent
 * @param {*} id
 * @param {*} texte
 */
function creerPara(parent, id = "", texte = "Texte du paragraphe", style = "") {
  let unPara = document.createElement("p")
  unPara.setAttribute("id", id)
  // unLien.setAttribute("style", style); // BUG !  il doit y avoir un style pas catholique sur un <p>...
  parent.append(unPara)
  document.querySelector("#" + id).innerHTML = texte
  return unPara
}

/**
 *
 *                    Création LienCliquable
 * @param {*} parent
 * @param {*} id
 * @param {*} texte
 */
function creerLien(
  parent,
  id = "",
  lien = "#",
  texte = "Texte du lien",
  style = ""
) {
  let unLien = document.createElement("a")
  unLien.setAttribute("id", id)
  unLien.setAttribute("href", lien)
  unLien.setAttribute("style", style)
  parent.append(unLien)
  document.querySelector("#" + id).innerHTML = texte
  return unLien
}

/**
 *
 *    Création Div simple
 *
 *
 *
 * @param {*} parent
 * @param {*} id
 * @param {*} style
 */
function creerDiv(parent, id = "", style = "") {
  let uneDiv = document.createElement("p")
  uneDiv.setAttribute("id", id)
  uneDiv.setAttribute("style", style)
  parent.append(uneDiv)
  // document.querySelector("#" + id).innerHTML = texte;
  return uneDiv
}

/**
 * 
 * 
 *    Création Checkbox
 * 
 * @param {*} parent 
 * @param {*} id 
 * @param {*} name 
 */
function creerCheckBox(parent, id = "", name = "" ){
  let uneCb = document.createElement("input")
  uneCb.setAttribute("type", "checkbox")
  uneCb.setAttribute("id", id)
  uneCb.setAttribute("name", name)
  parent.append(uneCb)
  return uneCb
}
