//--------------------------------------------------------------------VARIABLES-------------------------------------------------
let id = 0, textarea, header, mytextarea, edit, trash;
const addNew = document.getElementById("addNew");
const textareas = document.getElementById("textareas");

//--------------------------------------------------------------------FUNCTIONS-------------------------------------------------
function addTextArea(){
    id++;
    mytextarea = document.createElement("section");
    mytextarea.className = "mytextarea";
    mytextarea.setAttribute("id",id);

    textarea = document.createElement("textarea");
    textarea.id = ("textarea"+id);

    header = document.createElement("section");
    header.className = "header";
    header.innerHTML = `<i class="fi fi-rr-edit" onclick=toggle("textarea"+${id})>Edit</i> 
                        <i class="fi fi-rr-trash" onclick=removeTextArea(${id})>Delete</i>`;
      
    mytextarea.appendChild(header); mytextarea.appendChild(textarea);
    textareas.appendChild(mytextarea); 
}

function removeTextArea(id){
    textareaToDelete = document.getElementById(id);
    textareaToDelete.style.opacity = '0.4';
	setTimeout("textareaToDelete.remove()",300);
}

function toggle(id){
    let toToggle;
    toToggle =  document.getElementById(id);
    toToggle.toggleAttribute("disabled");
}
//--------------------------------------------------------------------EVENTS----------------------------------------------------
addNew.addEventListener("click",addTextArea);

