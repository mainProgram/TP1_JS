//--------------------------------------------------------------------VARIABLES-------------------------------------------
const inputAddList = document.getElementById("inputAddList");
const addList = document.getElementById("addList");
const output = document.querySelector('.output');
let myList = [
    {name:"Banane", checked:0}
];
//--------------------------------------------------------------------FUNCTIONS-------------------------------------------
/* <h1>My lists</h1>
<table>
    <tr>
        <td>banane</td>
        <td><span>edit</span><span>delete</span></td>
    </tr>
</table> */

function build(){
    output.innerHTML = "<h1>My Lists</h1>";
    let table = document.createElement("table");
    for (let index = 0; index < myList.length; index++) {
        let row = document.createElement("tr");
        
        let cell1 = document.createElement("td");
        cell1.innerHTML = myList[index].name;
        if (myList[index].checked == 1)  
            cell1.innerHTML = `<strike>${myList[index].name}</strike>`; 

        let cell2 = document.createElement("td");
    
        let span1 = document.createElement("span");
        span1.innerHTML = "Edit";
    
        let span2 = document.createElement("span");
        span2.innerHTML = "Delete";
        cell2.appendChild(span1);
        cell2.appendChild(span2);
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);

        cell1.addEventListener("click", ()=>{
            myList[index].checked = !myList[index].checked;
            build();
        });

        span2.addEventListener("click", ()=>{
            myList.splice(index,1);
            build();
        });

        span1.addEventListener("click",()=>{
            inputAddList.value = myList[index].name;
            inputAddList.focus();
            inputAddList.addEventListener("blur",()=>{
                myList[index].name = inputAddList.value ;
                build();
            });
        });
        
    }
    output.appendChild(table);
}
//--------------------------------------------------------------------EVENTS----------------------------------------------
window.onload = build;

addList.addEventListener("click", function(){
    inputAddList.value = inputAddList.value.trim();
    if(inputAddList.value){
        myList.push({name:inputAddList.value, checked:0});
        build();
        inputAddList.value = "";
    }
});