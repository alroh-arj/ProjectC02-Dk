var xValues = ["Electricity & Heat", "Electricity & Heat", "Transport (internal)", "Transport (internal)", "International aviation & shipping", "International aviation & shipping", "Manufacturing & construction", "Manufacturing & construction", "Buildings", "Buildings", "Industry", "Industry", "Fugitive emissions", "Fugitive emissions", "Land use change and forestry", "Land use change and forestry"];
  var yValues = [2.42, 4.21, 2.07, 1.96, 0.86, 0.42, 0.61, 1.09, 0.49, 1.64, 0.19, 0.15, 0.03, 0.02, -0.18, -0.49];
  var barColors = ["#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D","#dad3cb", "#6D6D6D","#dad3cb", "#6D6D6D"];

   
  
  new Chart("myChartTyskSec", {
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
        text: "Danmark og Tysklands Co2-udslip opdelt i sektor"
  
      }
    }
  });