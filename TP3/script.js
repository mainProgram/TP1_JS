//----------------------------------------------------------------VARIABLES-------------------------------------------------
const NUMBERS_STRING ="0123456789";
const UPPER_STRING ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_STRING ="abcdefghijklmnopqrstuvwxyz";
const SPECIAL_CHARS_STRING =`!"§$%&/()=?#'_-.,^°+*~;:><|}][{}]`;
const PASSWORD_LENGTH = document.getElementById("passwordLength");
const SPECIAL_CHARS = document.getElementById("specialChars");
const UPPERCASE = document.getElementById("uppercase");
const LOWERCASE = document.getElementById("lowercase");
const PASSWORD = document.getElementById("password");
const NUMBER = document.getElementById("number");
const BUTTON = document.getElementById("button");
const COPY = document.getElementById("copy");
let arrayOfConstraints = [];
//--------------------------------------------------------------------FUNCTIONS-----------------------------------------------
function randomNumber(min, max){ return Math.floor(Math.random() * (max - min)) + min; }

function generatePassword(passwordLength, arrayOfConstraints){
    let password = "";
    while(password.length <= passwordLength){
        for (let index = 0; index < arrayOfConstraints.length; index++) {
            password += arrayOfConstraints[index][randomNumber(0,arrayOfConstraints[index].length)];  
            if(password.length == passwordLength) 
                return password;
        }
    }
}

function shufflePassword(password){ return password.split("").sort(function(){return 0.5 - Math.random()}).join(""); }
function isPasswordLengthCorrect(password, min, max){ return password >= min && password <= max; }
//-----------------------------------------------------------EVENTS----------------------------------------------------
PASSWORD_LENGTH.addEventListener("input",()=>{ //EVENT INPUT !
    if(isPasswordLengthCorrect(PASSWORD_LENGTH.value, 5, 20) && arrayOfConstraints.length != 0)
        BUTTON.removeAttribute("disabled");
    if(isPasswordLengthCorrect(PASSWORD_LENGTH.value, 5, 20))    
        PASSWORD_LENGTH.className = "success";
    else if(!isPasswordLengthCorrect(PASSWORD_LENGTH.value, 5, 20)){
        PASSWORD_LENGTH.className = "error";
        BUTTON.setAttribute("disabled", "disabled");
    }
});

allCheckboxes = Array.from(document.querySelectorAll("input[type=checkbox]"));
for (let i = 0; i < allCheckboxes.length; i++) {
    allCheckboxes[i].addEventListener("click", ()=>{ 
        if(allCheckboxes[i].checked){
            if(allCheckboxes[i].id == "uppercase" && !arrayOfConstraints.includes(UPPER_STRING))
                arrayOfConstraints.push(UPPER_STRING);
            else if(allCheckboxes[i].id == "lowercase"  && !arrayOfConstraints.includes(LOWER_STRING))
                arrayOfConstraints.push(LOWER_STRING);   
            else if(allCheckboxes[i].id == "number"  && !arrayOfConstraints.includes(NUMBERS_STRING))
                arrayOfConstraints.push(NUMBERS_STRING);
            else if(allCheckboxes[i].id == "specialChars"  && !arrayOfConstraints.includes(SPECIAL_CHARS_STRING))
                arrayOfConstraints.push(SPECIAL_CHARS_STRING);          
        }
        else{
            if(allCheckboxes[i].id == "uppercase" && arrayOfConstraints.includes(UPPER_STRING))
                arrayOfConstraints.splice(arrayOfConstraints.indexOf(UPPER_STRING),1);
            else if(allCheckboxes[i].id == "lowercase"  && arrayOfConstraints.includes(LOWER_STRING))
                arrayOfConstraints.splice(arrayOfConstraints.indexOf(LOWER_STRING),1);
            else if(allCheckboxes[i].id == "number"  && arrayOfConstraints.includes(NUMBERS_STRING))
                arrayOfConstraints.splice(arrayOfConstraints.indexOf(NUMBERS_STRING),1);
            else if(allCheckboxes[i].id == "specialChars"  && arrayOfConstraints.includes(SPECIAL_CHARS_STRING))
                arrayOfConstraints.splice(arrayOfConstraints.indexOf(SPECIAL_CHARS_STRING),1);
        }   
        
        if(isPasswordLengthCorrect(PASSWORD_LENGTH.value, 5, 20) && arrayOfConstraints.length != 0)
            BUTTON.removeAttribute("disabled");
        else if(arrayOfConstraints.length == 0)
            BUTTON.setAttribute("disabled", "disabled");
    });
}


BUTTON.addEventListener("click", ()=>{
   let pwd = generatePassword(PASSWORD_LENGTH.value, arrayOfConstraints);
   PASSWORD.innerHTML = shufflePassword(pwd);
   COPY.removeAttribute("hidden");
});

COPY.addEventListener("click", ()=>{
    pwd = PASSWORD.innerHTML;

    if(navigator.clipboard.writeText(pwd))
        alert(pwd)
    else
        alert("fghjkss")
});


// function generatePassword(passwordLength){
    //     let string = "";
    //     while(string.length <= passwordLength){
        //         string += UPPER[randomNumber(0,UPPER.length)];
        //         if(string.length == passwordLength)  return string;
        //         string += NUMBERS[randomNumber(0,NUMBERS.length)]; 
        //         if(string.length == passwordLength)  return string;
        //         string += LOWER[randomNumber(0,LOWER.length)];
        //         if(string.length == passwordLength)  return string;
        //         string += SPECIAL_CHARS[randomNumber(0,SPECIAL_CHARS.length)]; 
        //     }
        // }