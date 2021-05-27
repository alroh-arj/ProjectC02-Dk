var xValues = ["Electricity & Heat", "Electricity & Heat", "Transport (internal)", "Transport (internal)", "International aviation & shipping", "International aviation & shipping", "Manufacturing & construction", "Manufacturing & construction", "Buildings", "Buildings", "Industry", "Industry", "Fugitive emissions", "Fugitive emissions", "Land use change and forestry", "Land use change and forestry"];
  var yValues = [2.42, 0.16, 2.07, 0.06, 0.86, 0.0, 0.61, 0.6, 0.49, 0.01, 0.19, 0.11, 0.03, 0.0, -0.18, 0.55];
  var barColors = ["#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D","#dad3cb", "#6D6D6D","#dad3cb", "#6D6D6D"];

   
  
  new Chart("myChartNordSec", {
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
        text: "Danmark og Nordkoreas Co2-udslip i tons opdelt i sektor"
  
      }
    }
  });