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

// Création du container dans lequel vivra le Quizz
let unContainer = document.createElement("div");
unContainer.setAttribute("class", "container");
unContainer.setAttribute(
  "style",
  "display:block; width:" +
    largeurEcran +
    "px; height:" +
    hauteurEcran +
    "px; font-family:fantasy; background-color:rgb(159, 159, 223); box-sizing: border-box; postion:absolute; flex-direction: column;"
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