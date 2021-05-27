var xValues = ["Electricity & Heat", "Electricity & Heat", "Transport (internal)", "Transport (internal)", "International aviation & shipping", "International aviation & shipping", "Manufacturing & construction", "Manufacturing & construction", "Buildings", "Buildings", "Industry", "Industry", "Fugitive emissions", "Fugitive emissions", "Land use change and forestry", "Land use change and forestry"];
  var yValues = [2.42, 1.01, 2.07, 2.03, 0.86, 0.89, 0.61, 0.65, 0.49, 0.14, 0.19, 0.16, 0.03, 0.0, -0.18, -0.41];
  var barColors = ["#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D","#dad3cb", "#6D6D6D","#dad3cb", "#6D6D6D"];

   
  
  new Chart("myChartDenSec", {
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
        text: "Danmark og Sveriges Co2-udslip i tons opdelt i sektor"
  
      }
    }
  });
 