var xValues = ["Danmark", "USA"];
  var yValues = [6.057599, 16.160716, 0];
  var barColors = ["#dad3cb", "#6D6D6D"];
  
     
  
  new Chart("myChartUsa", {
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
        text: "Danmark og USAs Co2-udslip i tons"
  
      }
    }
  });
 