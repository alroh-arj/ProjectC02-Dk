var xValues = ["Electricity & Heat", "Electricity & Heat", "Transport (internal)", "Transport (internal)", "International aviation & shipping", "International aviation & shipping", "Manufacturing & construction", "Manufacturing & construction", "Buildings", "Buildings", "Industry", "Industry", "Fugitive emissions", "Fugitive emissions", "Land use change and forestry", "Land use change and forestry" ];
  var yValues = [2.42, 5.78, 2.07, 1.65,  0.86, 0.33, 0.61, 1.29, 0.49, 1.08, 0.19, 0.14, 0.03, 0.2, -0.18, -0.7];
  var barColors = ["#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D", "#dad3cb", "#6D6D6D","#dad3cb", "#6D6D6D","#dad3cb", "#6D6D6D"];

   
  
  new Chart("myChartRusSec", {
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
        text: "Danmark og Ruslands Co2-udslip opdelt i sektor"
  
      }
    }
  });