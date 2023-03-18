//Lisätään nappula (codeDuck)
let addToDoButton = document.getElementById("addToDo");

//Lisätään container (codeDuck)
let toDoContainer = document.getElementById("toDoContainer");

//Haetaan elementti (codeDuck)
let imputfield = document.getElementById("inputField");

//Event listener toiminnalisuudelle- luo uuden sarakkeen aina elementille
// tehtäessä määritelty (codeDuck)
addToDoButton.addEventListener("click", function(){
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = imputfield.value;
    
    //Lisää annetun arvon (codeDuck)
    toDoContainer.appendchild(paragraph);

    //"tyhjentää" syöttökentän (CodeDuck)
    imputfield.value = "";

    // Kuittaa annetun arvon, kun klikataan kerran (codeDuck)
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })
      // Poistaa annetun arvon tuplaklikillä (codeDuck)
      paragraph.addEventListener("dblclick", function(){
        paragraph.removeChild(paragraph);
      })
})