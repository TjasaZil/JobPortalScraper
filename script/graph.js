const myChart = document.getElementById("myChart").getContext("2d");

function makeChart(){
    let collatzChart = new Chart(myChart, {
        type:"line",
        data:{
            labels: xLabel,
            datasets:[{
                label:"number",
                data: yLabel,
                fill: false,
                borderColor: '#ef233c',
                lineTension:0,
                fill: false
            }]
        },
        options: {
            parsing:{
                xAxisKey:"steps",
                yAxisKey:"number"
            }
            
        }
    });

}
