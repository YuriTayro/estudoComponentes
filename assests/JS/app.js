import{getLogo} from "./logo/logo.js"
import{getItem} from "./nav-item/nav-item.js"

let logo = document.getElementById("logo");
let navBar = document.getElementById("navBar");

let navItemNames = ["Work", "Contato", "Linkedin", "Github"];

window.onload = function(){
    logo.innerHTML = getLogo();
    navBar.innerHTML = navItemNames.map(itemName => getItem(itemName)).join("");
    
}



