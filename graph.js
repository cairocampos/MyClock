<script type="text/javascript" src="jquery.js"></script> 
    <script src="script.js"></script>   
    <script type="text/javascript" src="Chart.js"></script>
    <script src="graficos.js" type="text/javascript"></script> 

setInterval(timer, 2000);

function timer(){
    $("#updateGraph").click();
}

function loadGraph(){
    
    var ctx = document.getElementById("grafico").getContext("2d");
        
    //Type, Data e Options
    var grafico1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                data: [
                   
                ]
            }],
        },
        options: {
           title: {
            display: true,
            text: "Tráfego",
            fontSize: 36,
           },
           legend: {
               display: false
           },
          scales: {
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Mbps'
                }
            }]
          }
        }
    });

    $("#updateGraph").bind("click", function(){

        var randomize = Math.random() * 90;
        var chart = grafico1;

        for(var i = 0; i < 5; i++){
            chart.data.labels[i] = i + "ms";
        }

        
        for(var i = 0; i < 100; i++) {
            chart.data.datasets[0].data[i] = randomize + (Math.random() * 10);
            //chart.data.labels[6] = "junho";
            chart.update();
        }   

    });
}
