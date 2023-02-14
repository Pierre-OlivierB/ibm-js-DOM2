// console.log("test");
// *First Card
function init() {
  let check = document.querySelector("#findChecked");
  function addElementInList() {
    var selected = document.querySelectorAll("*:checked");
    var result = "Les cases sélectionnées sont :<br> ";
    for (var i = 0; i < selected.length; i++) {
      result += selected[i].name + " ";
    }
    document.querySelector("#resultat").innerHTML = result;
  }
  check.addEventListener("click", addElementInList);
}
window.addEventListener("load", init);
// !---------------------------------------------------
// *Second Card
const buttonHello = document.getElementById("sec_card");
console.log(buttonHello);
var texteHello = "Hello World ! <br/>";
function addText() {
  buttonHello.innerHTML += texteHello;
}
// buttonHello.addEventListener("click", addText);

var textField = document.querySelector("#sec_card>p");
console.log(textField);

function displayTextVisible() {
  textField.style.opacity = "1";
  console.log(textField.innerText);
}

buttonHello.addEventListener("click", displayTextVisible);
//!----------------------------------------------------
// *Third Card
