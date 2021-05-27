var xValues = ["Danmark", "Sverige"];
  var yValues = [6.057599, 4.271259];
  var barColors = ["#dad3cb", "#6D6D6D"];

   
  
  new Chart("myChartSweden", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Danmark og Ruslands Co2-udslip i tons"
  
      }
    }
  });
 