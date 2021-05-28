var xValues = ["Danmark", "Kina"];
  var yValues = [6.057599, 4.076018, 0];
  var barColors = ["#dad3cb", "#6D6D6D"];
  
   
  
  new Chart("myChartKina", {
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
        text: "Danmark og Kinas Co2-udslip i tons"
  
      }
    }
  });
 