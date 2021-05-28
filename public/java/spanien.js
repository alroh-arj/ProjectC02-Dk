var xValues = ["Danmark", "Spanien"];
  var yValues = [6.057599, 5.888294, 0];
  var barColors = ["#dad3cb", "#6D6D6D"];
  
   
  
  new Chart("myChartSpain", {
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
        text: "Danmark og Spaniens Co2-udslip i tons"
  
      }
    }
  });
 