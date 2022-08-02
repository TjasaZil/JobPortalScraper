
let btn = document.getElementById("btn");
let steps = 0;
let increments=document.getElementById("increments");
let result = document.getElementById("result");
let list = [];

btn.addEventListener("click", function(){
collatz();
makeTable();
})


function collatz(){
    let number = parseFloat(document.getElementById("number").value);
    if (number < 1) {
        alert("Only positive numbers are allowed");
        return;
      }
    while(number != 1){
        if(number%2==0){
            number = number/2;
           // console.log(number)
        }else{
            number = (number*3)+1;
           // console.log(number)
        }
        list[steps] = number;
        
        steps++;
    }
   /* for(let i = 0; i < list.length; i++){
        result.textContent = result.textContent + list[i] + " "
        
    }
    if(number===1){
        increments.textContent=`It took ${steps} steps to come to 1`
    }*/
}




