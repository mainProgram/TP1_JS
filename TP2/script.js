//--------------------------------------------------------------------VARIABLES-------------------------------------------------
const container = document.getElementById("container");
const section1 = document.getElementById("section1");
const section3 = document.getElementById("section3");
const droite = document.getElementById("droite");
const gauche = document.getElementById("gauche");
let myArray = ["Mon premier", "Mon deuxième", "Mon troisième", "Mon quatrième"];
let lengthSection1, lengthSection3 ;
//--------------------------------------------------------------------EVENTS----------------------------------------------------
gauche.setAttribute("disabled", "disabled"); //for the very first time there is no need to able the left button
for (let index = 0; index < myArray.length; index++) {
    
    p = document.createElement("p"); p.innerText = myArray[index]; p.id = "p" + index;

    p.addEventListener("click",()=>{
        element = document.getElementById("p"+index);
        element.classList.toggle("clicked");
   
        droite.addEventListener("click", ()=>{
                gaucheOuDroite(section1, section3, gauche, droite);
        });

        gauche.addEventListener("click", ()=>{
            gaucheOuDroite(section3, section1, droite, gauche);
        });
        
    });
    section1.appendChild(p);
}
//--------------------------------------------------------------------FUNCTIONS-------------------------------------------------
function gaucheOuDroite(section1, section3, gauche, droite){
    let theClickedOnes = Array.from(section1.querySelectorAll(".clicked"));
    if(theClickedOnes.length != 0){
        for (let i = 0; i < theClickedOnes.length; i++) {
            theClickedOnes[i].className = "";
            section3.appendChild(theClickedOnes[i]);
            lengthSection1 = Array.from(section1.querySelectorAll("p"));
            lengthSection3 = Array.from(section3.querySelectorAll("p"));
            (lengthSection3 == 0) ? gauche.setAttribute("disabled","disabled") : gauche.removeAttribute("disabled");
            (lengthSection1 == 0) ? droite.setAttribute("disabled","disabled") : droite.removeAttribute("disabled");
        }
    }
}

function tri(tab){
    for (let i = 0; i < tab.length-1; i++) 
        for (let j = i+1; j < tab.length; j++) 
            if(tab[i].id > tab[j].id){
                swap = tab[i]
                tab[i] = tab[j]
                tab[j] = swap
            }
}
