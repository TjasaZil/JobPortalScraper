
let btn = document.getElementById("btn");
let steps = 0;
let increments=document.getElementById("increments");
let result = document.getElementById("result");
let list = [];
let errorText = document.getElementById("error");
let numberInput = document.getElementById("number-input");


errorText.style.display="none";


btn.addEventListener("click", function(){
collatz();
makeTable();
})


function collatz(){
    let number = parseFloat(document.getElementById("number-input").value);
    if (number < 1) {
        errorText.style.display="flex";
        html.style.display="none";  
         
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
  }




