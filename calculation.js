
let btn = document.getElementById("btn");
let steps = 0;

let result = document.getElementById("result");
let list = [];

btn.addEventListener("click", function(){
collatz();
})


function collatz(){
    let number = parseFloat(document.getElementById("number").value);
    while(number != 1){
        if(number%2==0){
            number = number/2;
        }else{
            number = (number*3)-1;
        }
        list[steps] = number;
        steps++;
    }
    for(let i = 0; i < list.length; i++){
        result.textContent = result.textContent + list[i]
    }
}




