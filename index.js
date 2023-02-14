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
