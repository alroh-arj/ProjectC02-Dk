var xValues = ["Danmark", "Nordkorea"];
  var yValues = [6.057599, 0.855446];
  var barColors = ["#dad3cb", "#6D6D6D"];
  
   
  
  new Chart("myChartNorth", {
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
        text: "Danmark og Ruslands Co2-udslip"
  
      }
    }
  });
 