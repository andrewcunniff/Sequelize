async function dataHandler() {
  const nums = [];
  const mealNames = [];
  const cholesterols = [];
  const carbs = [];
  const sodium = [];
  const proteins = [];
  const fats = [];

  while (nums.length < 10) {
    let r = Math.floor(Math.random() * 46) + 1;
    if (nums.indexOf(r) === -1) nums.push(r);
  }
  console.log(nums);

  const request1 = await fetch("/api/meals");
  request1.json().then(data => {
    let meals = data.filter(meal => {
      if (nums.indexOf(meal.meal_id) > -1) return meal;
    });
    for (i = 0; i < 10; i++) {
      mealNames.push(meals[i].meal_name);
    }
    console.log(mealNames);
    return mealNames;
  });

  const request2 = await fetch("/api/macros");
  request2.json().then(data => {
    let macs = data.filter(macro => {
      if (nums.indexOf(macro.macro_id) > -1) return macro;
    });
    for (i = 0; i < 10; i++) {
      cholesterols.push(macs[i].cholesterol);
    }
    console.log(cholesterols);
    return cholesterols;
  });

  const request3 = await fetch("/api/macros");
  request3.json().then(data => {
    let macs = data.filter(macro => {
      if (nums.indexOf(macro.macro_id) > -1) return macro;
    });
    for (i = 0; i < 10; i++) {
      sodium.push(macs[i].sodium);
    }
    console.log(sodium);
    return sodium;
  });

  const request4 = await fetch("/api/macros");
  request4.json().then(data => {
    let macs = data.filter(macro => {
      if (nums.indexOf(macro.macro_id) > -1) return macro;
    });
    for (i = 0; i < 10; i++) {
      carbs.push(macs[i].carbs);
    }
    console.log(carbs);
    return carbs;
  });

  const request5 = await fetch("/api/macros");
  request5.json().then(data => {
    let macs = data.filter(macro => {
      if (nums.indexOf(macro.macro_id) > -1) return macro;
    });
    for (i = 0; i < 10; i++) {
      proteins.push(macs[i].protein);
    }
    console.log(proteins);
    return proteins;
  });

  const request6 = await fetch("/api/macros");
  request6.json().then(data => {
    let macs = data.filter(macro => {
      if (nums.indexOf(macro.macro_id) > -1) return macro;
    });
    for (i = 0; i < 10; i++) {
      fats.push(macs[i].fat);
    }
    console.log(fats);
    return fats;
  });

  let datapoints1 = [];
  for (i = 0; i < nums.length; i++) {
    datapoints1.push({label:mealNames[i],y:Number(cholesterols[i])});
  }
  let datapoints2 = [];
  for (i = 0; i < nums.length; i++) {
    datapoints2.push({label:mealNames[i],y:Number(sodium[i])});
  }
  let datapoints3 = [];
  for (i = 0; i < nums.length; i++) {
    datapoints3.push({label:mealNames[i],y:Number(carbs[i])});
  }
  let datapoints4 = [];
  for (i = 0; i < nums.length; i++) {
    datapoints4.push({label:mealNames[i],y:Number(proteins[i])});
  }
  let datapoints5 = [];
  for (i = 0; i < nums.length; i++) {
    datapoints5.push({label:mealNames[i],y:Number(fats[i])});
  }

  console.log(datapoints1);
  console.log(datapoints2);
  console.log(datapoints3);
  console.log(datapoints4);
  console.log(datapoints5);
  
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Macros of Ten Random Meals"
    },
    axisX: {
      title:"Quantity of Macros"
    },
    axisY: {
      title:"Meal Name"
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [
      {
        type: "stackedBar",
        name: "Cholesterol",
        showInLegend: "true",
        dataPoints: datapoints1
      },
      {
        type: "stackedBar",
        name: "Sodium",
        showInLegend: "true",
        dataPoints: datapoints2
      },
      {
        type: "stackedBar",
        name: "Carbs",
        showInLegend: "true",
        dataPoints: datapoints3
      },
      {
        type: "stackedBar",
        name: "Protein",
        showInLegend: "true",
        dataPoints: datapoints4
      },
      {
        type: "stackedBar",
        name: "Fat",
        showInLegend: "true",
        dataPoints: datapoints5
      }
    ]
  });
  chart.render();
  function toggleDataSeries(e) {
    if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
}

async function windowActions() {
  await dataHandler();
}
window.onload = windowActions;
