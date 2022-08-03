let table = document.getElementById("table");
let beginnTable = "<table><tr>";
let firstRow="<td>Steps</td><td>number</td>";
let number = parseInt(document.getElementById("number"));
let html =beginnTable + firstRow; //add beginning of table

let perrow = 1;

function makeTable(){
    for(let i = 0; i<list.length; i++){
        //let next = i;
        if(i%perrow == 0 && i !=list.length){
            html += "<tr></tr>"
        }
        html += `<td>${i+1}</td><td>${list[i]}</td>`; //generate table based on data
    }
    html += "</tr></table>" //end table
    
    table.innerHTML = html;
}