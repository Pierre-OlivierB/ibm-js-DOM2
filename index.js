// console.log("test");
// *First Card
function addElementInList() {
  var selected = document.querySelectorAll("*:checked");
  var result = "Les cases sélectionnées sont :<br> ";
  for (var i = 0; i < selected.length; i++) {
    result += selected[i].name + " ";
  }
  document.querySelector("#resultat").innerHTML = result;
}
function init() {
  let check = document.querySelector("#findChecked");
  addElementInList();
  check.addEventListener("click", addElementInList);
}
window.addEventListener("load", init);
// !---------------------------------------------------
// *Second Card
const buttonHello = document.getElementById("sec_card");
// console.log(buttonHello);
var texteHello = "Hello World ! <br/>";
function addText() {
  buttonHello.innerHTML += texteHello;
}
// buttonHello.addEventListener("click", addText);

var textField = document.querySelector("#sec_card>p");
// console.log(textField);

function displayTextVisible() {
  textField.style.opacity = "1";
  //   console.log(textField.innerText);
}

buttonHello.addEventListener("click", displayTextVisible);
//!----------------------------------------------------
// *Third Card
// TODO: (a) showHxContent();use selector; display content Div on click
// TODO: (b) hideAllDivs(); display none all div content
// TODO: (c) alertTitle();with alert() : display nth() content by title click
// *(a)
const titleCards = document.querySelectorAll("h1");
const lastTextThirdCard = document.querySelector("#third_card>p:last-of-type");
const secLastTextThirdCard = document.querySelector(
  "#third_card>p:nth-last-of-type(2)"
);
function partOneDisplay() {
  let contentNext = document.querySelector("h1:first-child+div");
  let textContentNext = document.querySelectorAll("h1:first-child+div p");
  //   console.log(contentNext);
  //   console.log(textContentNext);
  contentNext.style.display = "block";
  textContentNext.forEach((e) => {
    e.style.opacity = "1";
  });
}
function partTwoDisplay() {
  let contentNext = document.querySelector("h1:last-of-type+div");
  //   console.log(contentNext);
  let textContentNext = document.querySelectorAll("h1:last-of-type+div p");
  //   console.log(contentNext);
  //   console.log(textContentNext);
  contentNext.style.display = "block";
  textContentNext.forEach((e) => {
    e.style.opacity = "1";
  });
}
// console.log(titleCards);
titleCards.forEach((e) => {
  //   console.log(e);
  e.addEventListener("click", () => {
    // console.log(e.textContent);
    if (e.textContent == "Partie 1") {
      partOneDisplay();
    }
    if (e.textContent == "Partie 2") {
      partTwoDisplay();
    }
    // console.log(secLastTextThirdCard);
    lastTextThirdCard.style.opacity = "1";
    secLastTextThirdCard.style.opacity = "1";
  });
  //   e.addEventListener("click", (el) => {
  //     console.log(el);
  //   });
});
// !---------------------------------------------------
// *(b)
const inputHide = document.querySelector("input[value='Masquer']");
// console.log(inputHide);
function hideAllDivs() {
  const allParagraphes = document.querySelectorAll("p");
  // console.log(allParagraphes);
  for (let i = 0; i < allParagraphes.length - 2; i++) {
    allParagraphes[i].style.opacity = "0";
  }
}
inputHide.addEventListener("click", hideAllDivs);

// !------------------------------------------------------
//* (c)
// console.log(title);
const title = document.getElementById("title");
// console.log(title.value);
function catchTextPart(ele) {
  let contentJoin = "";
  for (let i = 0; i < ele.length; i++) {
    contentJoin += ele[i].textContent + ". ";
  }
  alert(contentJoin);
}
function displayInputValue() {
  // console.log(title.value);
  let textContentNext;
  if (titleCards[title.value - 1].textContent == "Partie 1") {
    textContentNext = document.querySelectorAll("h1:first-child+div p");
    partOneDisplay();
  }
  if (titleCards[title.value - 1].textContent == "Partie 2") {
    textContentNext = document.querySelectorAll("h1:last-of-type+div p");
    partTwoDisplay();
  }
  catchTextPart(textContentNext);
}
title.addEventListener("change", displayInputValue);
