var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){

     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
})

let inputWrapper=document.querySelector(".input-form");
let addButton=document.querySelector(".add-button");
let ul=document.querySelector(".ul-list");
let clearList=document.querySelector(".clearList")
let formElement=document.querySelector(".form-wrapper")

formElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    let inputValue=inputWrapper.value;
    if(inputValue==" "){
        return;
    }
    
    
    let li=document.createElement("li");
    li.textContent=inputValue;
    ul.appendChild(li);
    inputWrapper.value= " "
    
    let index=document.createElement("i");
        index.classList.add();
        index.addEventListener("click",()=>{
            li.remove();
        })
        li.appendChild(index);
        ul.appendChild(li);


        clearAllItems.addEventListener("click", function () {
          ul.innerHTML = " ";
        });
        
        function fun(){  
          document.getElementById("formwraper").reset();  
        }   
})
