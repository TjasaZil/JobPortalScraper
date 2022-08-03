
let btn = document.getElementById("btn");
let steps = 0;
let increments=document.getElementById("increments");
let result = document.getElementById("result");
let list = [];
let errorText = document.getElementById("error");
let numberInput = document.getElementById("number-input");
let stepList=[{}];
let xLabel=[];
let yLabel=[];


errorText.style.display="none";


btn.addEventListener("click", function(){
collatz();
makeTable();
makeChart();

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
        stepList[steps] = {steps, number};
        xLabel.push(steps);
        yLabel.push(number);
       
        /*console.log(stepList[steps]);*/
        console.log(yLabel);
        console.log(xLabel);
        
        
        steps++;
    }
  }




