var xValues = ["Danmark", "Tyskland"];
  var yValues = [6.057599, 9.51698];
  var barColors = ["#dad3cb", "#6D6D6D"];
  
   
  
  new Chart("myChartGermany", {
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
        text: "Danmark og Tyskland Co2-udslip i tons"
  
      }
    }
  });
 