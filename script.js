//your JS code here. If required.
let form = document.getElementById("loginForm");

let username = document.getElementById("username");
let password = document.getElementById("password");

let checkbox = document.getElementById("checkbox");

let existingBtn = document.getElementById("existing");


// Check localStorage on page load
let savedUsername = localStorage.getItem("username");
let savedPassword = localStorage.getItem("password");

if(savedUsername && savedPassword){
  existingBtn.style.display = "block";
}


// Form submit
form.addEventListener("submit", function(e){

  e.preventDefault();

  let user = username.value;
  let pass = password.value;

  alert(`Logged in as ${user}`);


  if(checkbox.checked){

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    existingBtn.style.display = "block";

  } else {

    localStorage.removeItem("username");
    localStorage.removeItem("password");

    existingBtn.style.display = "none";
  }

});


// Existing user login
existingBtn.addEventListener("click", function(){

  let savedUser = localStorage.getItem("username");

  if(savedUser){
    alert(`Logged in as ${savedUser}`);
  }

});