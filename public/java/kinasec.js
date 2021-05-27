var xValues = ["Electricity & Heat", "Electricity & Heat", "Transport (internal)", "Transport (internal)", "International aviation & shipping", "International aviation & shipping", "Manufacturing & construction", "Manufacturing & construction", "Buildings", "Buildings", "Industry", "Industry", "Fugitive emissions", "Fugitive emissions", "Land use change and forestry", "Land use change and forestry"];
  var yValues = [2.42, 3.28, 2.07, 0.6, 0.86, 0.04, 0.61, 2.01, 0.49, 0.37, 0.19, 0.53, 0.03, 0.0, -0.18, -0.22];
  var barColors = ["#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D","#dad3cb", "#6D6D6D","#dad3cb", "#6D6D6D"];

   
  
  new Chart("myChartKinaSec", {
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
        text: "Danmark og Kinas Co2-udslip i tons opdelt i sektor"
  
      }
    }
  });