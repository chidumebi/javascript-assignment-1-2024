let button = document.getElementById("more");
let name = document.getElementById("headMain");
let prop = document.getElementById("propMain");
let buttonless = document.getElementById("less");

button.addEventListener("click", readmore);
buttonless.addEventListener("click", readless);




function readmore() 
{
  let read = document.getElementById("PopupMod");
  

  if (read.style.display === "none" || read.style.display === "") 
  {
    read.style.display = "block";
    button.style.display = "none";
    name.style.display = "none";
    prop.style.display = "none";
    document.querySelector("footer").style.display = "none";
    
  }
}

function readless() 
{
  let read = document.getElementById("PopupMod");
  

  if (read.style.display === "block" ) 
  {
    read.style.display = "none";
    button.style.display = "flex";
    name.style.display = "flex";
    prop.style.display = "flex";
    document.querySelector("footer").style.display = "flex";
    
  }
}

let date = new Date().toLocaleDateString();
document.getElementById("date").innerHTML= date;