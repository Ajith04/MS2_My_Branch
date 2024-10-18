let modalContainer = document.getElementById("modalContainer");
let signInPart = document.getElementById("signInPart");
let signUpPart = document.getElementById("signUpPart");


document.getElementById("navBarLogin").onclick = function(event){
    event.preventDefault();
    signUpPart.style.display = "none";
    signInPart.style.display = "block";
    modalContainer.style.display = "flex";
}

document.getElementById("loginClose").onclick = function(){
    modalContainer.style.display = "none";
}



document.getElementById("register").onclick = function(event){
    event.preventDefault();
    signInPart.style.display = "none";
    signUpPart.style.display = "block";

}

document.getElementById("backToLogin").onclick = function(event){
    event.preventDefault();
    signUpPart.style.display = "none";
    signInPart.style.display = "block";
}