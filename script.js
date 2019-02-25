// Fonctionnalité 1 : : Cliquer sur le footer >>> la console affiche "clic numéro x"

let footerClicker = document.querySelector("footer")
let i = 1
let onFooterClick = function() {
  console.log(`click numéro ${i}`)
  i++
}
footerClicker.addEventListener("click", onFooterClick)

// Fonctionnalité 2 : Cliquer sur le Hamburger menu >>> alternance destruction/ajout de la class collapse de la navbar

let hamburgerMenu = document.querySelector(".navbar-toggler");
let navbarHeader = document.getElementById("navbarHeader");
let onHamburgerClick = function() {
		navbarHeader.classList.toggle("collapse");
};
hamburgerMenu.addEventListener("click", onHamburgerClick);


// Fonctionnalité 3 : Cliquer sur le bouton edit de la 1ère card >>> texte de la card en rouge (irréversible)

let firstEditButton = document.querySelectorAll('.btn-group')[0].children[1];
let onFirstEditClick = function() { 
  firstEditButton.style.color ="red";
};
firstEditButton.addEventListener("click", onFirstEditClick);

// Fonctionnalité 4 : Cliquer sur le bouton edit de la 1ère card >>> texte de la card en vert (réversible par click)

let secondEditButton = document.querySelectorAll('.btn-group')[1].children[1];
let secondEditButtonStatus = false
let onSecondEditClick = function() {
	if (secondEditButtonStatus === false) {
	  secondEditButton.style.color ="green";
	  secondEditButtonStatus = true
  }
	else if (secondEditButtonStatus === true) {
	  secondEditButton.style.color ="";
	  secondEditButtonStatus = false
  }  
};
secondEditButton.addEventListener("click", onSecondEditClick);

// Fonctionnalité 5 : Double-cliquer sur la navbar >>> tout bootstrap disparaît (réversible par double click)

let navbarDoubleClicker = document.querySelector("header")
let styleLink = document.querySelector("link")
let styleLinkStatus = false
let onNavBarDoubleClick = function() {
  if (styleLinkStatus === false) {
    styleLink.setAttribute("href", "#");
    styleLinkStatus = true
  }
  else if (styleLinkStatus === true) {
    styleLink.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
    styleLinkStatus = false
  }
}	
navbarDoubleClicker.addEventListener("dblclick", onNavBarDoubleClick)

// Fonctionnalité 6 : Passer sa souris sur le bouton "View" d'une card >>> réduction card (disparition texte, image 20%, boutons restent visibles) (réversible par repassage)
	
let card = document.querySelectorAll(".card");
let cardView = document.querySelectorAll(".btn-group");

for (let a = 0; a < card.length; a++) {
  
  let onCardsMouseMove = function() {	
	  let imgCard = card[a].querySelector('.card-img-top')
	  let textCard = card[a].querySelector('.card-text')
	    
	    if (textCard.style.display === "none") {
        textCard.style.display = "block";
        imgCard.style.width = "100%";
      } 
      else {
        textCard.style.display = "none";
        imgCard.style.width = "20%";
      }
  } 
  cardView[a].children[0].addEventListener('mouseover', onCardsMouseMove)
}


// Fonctionnalités 7&8 : Cliquer sur le bouton ==> gris >>> la dernière carte passe en première (et inversement pour bouton <== bleu)

let forwardButton = document.querySelectorAll(".my-2")[1]
let backwardButton = document.querySelectorAll(".my-2")[0]	
let cardRow = document.querySelectorAll("div.row")[1]	

let onFowardButtonClick = function() {
  cardRow.insertBefore(cardRow.lastChild, cardRow.firstChild)
}
let onBackwardButtonClick = function(e) {
  e.preventDefault();
  cardRow.insertBefore(cardRow.firstChild, cardRow.lastChild)
}
forwardButton.addEventListener('click', onFowardButtonClick)
backwardButton.addEventListener('click', onBackwardButtonClick)

// Fonctionnalité 9 : Cliquer sur le bouton <== bleu >>> la première carte passe en dernière

