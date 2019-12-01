/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * 
 * 
 * 
 * 
 * INTERFACE GRAPHIQUE:
 * 
 * 
 * 
 * 
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

"use strict";

let largeurEcran = window.innerWidth;
let hauteurEcran = window.innerHeight;
let debutDePage = document.querySelector("div-quizz");
// ARRIVER A METTRE ROWS ET COLS CORRECTEMENT

// Création du container dans lequel vivra le Quizz
let unContainer = document.createElement("div");
unContainer.setAttribute("class", "container");
unContainer.setAttribute(
  "style",
  "display:block; width:" +
    largeurEcran +
    "px; height:" +
    hauteurEcran +
    "px; font-family:fantasy; background-color:rgb(230, 255, 242); box-sizing: border-box; postion:absolute; flex-direction: column;"
);
debutDePage.parentElement.append(unContainer);

// Creation des row et col TITRE
unContainer.append(creerDivRow(largeurEcran + "px", "150px", "row1", "pink"));
document
  .querySelector("#row1")
  .append(creerDivCol(largeurEcran + "px", "auto", "col1"));
// Création du titre
let titrePage = document.createElement("h1");
titrePage.setAttribute("class", "titrePage");
titrePage.setAttribute("style", "text-align: center; margin:0 auto;");
document.querySelector("#col1").append(titrePage);
document.querySelector(".titrePage").innerHTML = "QuiZZZzz !";

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * 
 * 
 * 
 * 
 *     Création des row et col du Quizz (écran divisé en 2) 
 * 
 * 
 * 
 * 
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// haut row dans lequel est le jeu:
unContainer.append(
  creerDivRow(largeurEcran + "px", "auto", "rowJeu", "rgb(230, 255, 204)")
);

/**- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *    AMENAGEMENT DE LA ZONE DE GAUCHE:
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//ajout d'une col dans rowJeu (col de gauche)
document
  .querySelector("#rowJeu")
  .append(
    creerDivCol(
      largeurEcran * 0.3 + "px",
      hauteurEcran - 200 + "px",
      "colGauche",
      "blue"
    )
  );
/**
 *
 *
 * 
 * 
 * 
 * 
 * 
 *
 *      EN HAUT A GAUCHE : DU TEXTE
 *
 *
 * 
 * 
 * 
 * 
 *
 */
// ajout d'un row dans le haut de rowJeu pour faire une zone au dessus des boutons
document
  .querySelector("#colGauche")
  .append(
    creerDivRow(largeurEcran * 0.3 + "px", "150px", "rowGaucheHaut", "orange")
  );
document
  .querySelector("#colGauche")
  .setAttribute("style", "flex-direction: column");
// on met une col dans ce row...
document
  .querySelector("#rowGaucheHaut")
  .append(
    creerDivCol(
      largeurEcran * 0.3 + "px",
      "auto",
      "colHautGauche",
      "rgbga(123, 90, 255, 0.5)"
    )
  );
// et finalement du texte:
// Création d'une zone de texte à gauche
let enHautAGauche = document.querySelector("#colHautGauche");
// let styleTexte1 = '"style", "text-align: center; width: inherit;"';
creerPara(
  enHautAGauche,
  (this.id = "texte1"),
  (this.texte = "Zone TEXTE 1  - - - <br>lorem ipsum blablabla<br/> truc blabla!")
 // (this.style = styleTexte1)
);



// Ajout d'un second row/col/texte en dessous
document
  .querySelector("#colGauche")
  .append(
    creerDivRow(largeurEcran * 0.3 + "px", "150px", "rowGaucheHaut2", "purple")
  );
// on met une col dans ce row...
document
  .querySelector("#rowGaucheHaut2")
  .append(
    creerDivCol(
      largeurEcran * 0.3 + "px",
      "auto",
      "colHautGauche2",
      "rgbga(123, 90, 255, 0.5)"
    )
  );
// et finalement du texte:
// Création d'une zone de texte à gauche
let enHautAGauche2 = document.querySelector("#colHautGauche2");
// let styleTexte1 = '"style", "text-align: center; width: inherit;"';
creerPara(
  enHautAGauche2,
  (this.id = "texte2"),
  (this.texte = "- - - TEXTE 2  - - - <br>lorem ipsum blablabla<br/> truc blabla!")
 // (this.style = styleTexte1)
);




// puis on rajoute en dessous une row qui contient une col pour y mettre les boutons
document
  .querySelector("#colGauche")
  .append(
    creerDivRow(largeurEcran * 0.3 + "px", "150px", "rowGaucheBas", "pink")
  );
// la col...
document
  .querySelector("#rowGaucheBas")
  .append(
    creerDivCol(largeurEcran * 0.3 + "px", "auto", "colBasGauche", "black;")
  );
// dans laquelle on ajoute 2 boutons:
creerBouton(
  document.querySelector("#colBasGauche"),
  (this.id = "btnSelect1"),
  (this.infos = "Éditer")
);
document
  .querySelector("#btnSelect1")
  .setAttribute(
    "style",
    "margin:20px; width:100px; height:100px; border-radius: 8px; font-family:fantasy; background-color:rgb(255, 242, 204); "
  );
creerBouton(
  document.querySelector("#colBasGauche"),
  (this.id = "btnSelect2"),
  (this.infos = "Lancer")
);
document
  .querySelector("#btnSelect2")
  .setAttribute(
    "style",
    "margin:20px; width:100px; height:100px; border-radius:8px; font-family:fantasy; background-color:rgb(255, 242, 204);"
  );



/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *
 * PARTIE DROITE DE L'ECRAN
 *
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
document // ajout de la col de droite
  .querySelector("#rowJeu")
  .appendChild(
    creerDivCol(
      largeurEcran * 0.7 + "px",
      "100%",
      "colJeu",
      "red"
    )
  );
  document
  .querySelector("#colJeu")
  .setAttribute("style", "flex-direction: column");
  
  
  





// /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  *
//  *
//  *
//  *               FONCTIONS de création des éléments graphiques
//  *                                  ||
//  *                                  ||
//  *                                  \/
//  * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// /** -------------------------------------------------------
//  * Création de Rangées
//  * largeur et hauteur sont des int qui représentent des pixels
//  * @param {*} largeur
//  * @param {*} hauteur
//  * @param {*} id
//  * @param {*} bgColor
//  */
// function creerDivRow(
//   largeur,
//   hauteur,
//   id = "",
//   bgColor = "rgb(200, 205, 242)"
// ) {
//   let uneDiv = document.createElement("div");
//   uneDiv.setAttribute("class", "row");
//   uneDiv.setAttribute("id", id);
//   uneDiv.setAttribute(
//     "style",
//     "display:flex; width:" +
//       largeur +
//       "; height:" +
//       hauteur +
//       "; background-color:" +
//       bgColor +
//       "; position:relative;"
//   );

//   return uneDiv;
// }

// /** -------------------------------------------------------
//  *                    Création de Colonnes
//  * @param {*} largeur
//  * @param {*} hauteur
//  * @param {*} id
//  * @param {*} bgColor
//  */
// function creerDivCol(
//   largeur,
//   hauteur,
//   id = "",
//   bgColor = "rgb(200, 205, 242)"
// ) {
//   let uneDiv = document.createElement("div");
//   uneDiv.setAttribute("class", "col");
//   uneDiv.setAttribute("id", id);
//   uneDiv.setAttribute(
//     "style",
//     "display:flex; width:" +
//       largeur +
//       "; height:" +
//       hauteur +
//       "; background-color:" +
//       bgColor +
//       "; position:relative;"
//   );
//   return uneDiv;
// }

// /**
//  *                    Création Bouton
//  * @param {*} parent
//  * @param {*} id
//  * @param {*} infos
//  */
// function creerBouton(parent, id = "", infos = "joli Bouton !") {
//   let unBouton = document.createElement("button");
//   unBouton.setAttribute("id", id);
//   parent.append(unBouton);
//   document.querySelector("#" + id).innerHTML = infos;
//   return unBouton;
// }

// /**
//  *
//  *                    Création Paragraphe
//  * @param {*} parent
//  * @param {*} id
//  * @param {*} texte
//  */
// function creerPara(parent, id = "", texte = "Texte du paragraphe", style="") {
//   let unPara = document.createElement("p");
//   unPara.setAttribute("id", id);
//   // unLien.setAttribute("style", style); // BUG !  il doit y avoir un style pas catholique sur un <p>...
//   parent.append(unPara);
//   document.querySelector("#" + id).innerHTML = texte;
//   return unPara;
// }

// /**
//  *
//  *                    Création LienCliquable
//  * @param {*} parent
//  * @param {*} id
//  * @param {*} texte
//  */
// function creerLien(parent, id = "", lien="#", texte = "Texte du lien", style="") {
//   let unLien = document.createElement("a");
//   unLien.setAttribute("id", id);
//   unLien.setAttribute("href", lien);
//   unLien.setAttribute("style", style);
//   parent.append(unLien);
//   document.querySelector("#" + id).innerHTML = texte;
//   return unLien;
// }

// /**
//  * 
//  *    Création Div simple
//  * 
//  * 
//  * 
//  * @param {*} parent 
//  * @param {*} id 
//  * @param {*} style 
//  */
// function creerDiv(parent, id = "", style="") {
//   let uneDiv = document.createElement("p");
//   uneDiv.setAttribute("id", id);
//   uneDiv.setAttribute("style", style);
//   parent.append(uneDiv);
//   // document.querySelector("#" + id).innerHTML = texte;
//   return uneDiv;
// }