var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){

     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
})

document.getElementById("clickBody")
  .addEventListener("click", function (event) {
    console.log(event);
  });

document.getElementById("username").addEventListener("keydown", function (y) {

  y.target.classList.add("input-wraper");
});

document.getElementById("link").addEventListener("click", function (event) {
  event.preventDefault();
});


let usernameField = document.getElementById("username");

usernameField.addEventListener("input", function (event) {
  event.target.value = event.target.value.toUpperCase();
});

let ulElement = document.querySelector('.ul-list');

let newLiElement = document.createElement('li');
newLiElement.textContent = 'javascript';

newLiElement.classList.add('li-item');

let newLiElement2 = document.createElement('li');
newLiElement2.textContent = 'html';

ulElement.appendChild(newLiElement);
ulElement.appendChild(newLiElement2);
