console.log("bla bla bla")
// alert('la la la')
// alert("You've got hacked! ha ha ha")
// alert("hey")
// document.getElementById("demo").innerHTML = "Hello JavaScript!"
function changeText(){
    let element = document.getElementById("demo");
    
    if (element.innerHTML == "Hello") {
        element.innerHTML = "bye";
    }
    else {
        element.innerHTML = "Hello"
    }
}
