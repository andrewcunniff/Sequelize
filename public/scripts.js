async function windowActions() {
  const response1 = await fetch("/meals");
  console.log(response1)
  const meals = await response1.json();
  const meals_data = meals.data
  console.log(meals_data);
  const response2 = await fetch("/macros");
  console.log(response2)
  const macros = await response2.json()
  const macros_data = macros.data
  console.log(macros_data)






  // var k = "<tbody>";
  // for (i = 0; i < hall_data.length; i++) {
  //   k += "<tr>";
  //   k += "<td>" + hall_data[i].hall_id + "</td>";
  //   k += "<td>" + hall_data[i].hall_name + "</td>";
  //   k += "<td>" + hall_data[i].hall_address + "</td>";
  //   k += "</tr>";
  // }
  // k += "</tbody>";
  // console.log(k);
  // document.getElementById("tableData").innerHTML = k;

  // function buildHtmlTable(selector) {
  //   var cols = addAllColumnHeaders(halls, selector);
  //   for (var i = 0; i < halls.length; i++) {
  //     var row = $("<tr/>");
  //     for (var colIndex = 0; colIndex < cols.length; colIndex++) {
  //       var val = halls[i][cols[colIndex]];
  //       if (val == null) val = "";
  //       row.append($("<td/>").html(val));
  //     }
  //     $(".table").append(row);
  //   }
  // }
  // function addAllColumnHeaders(halls, selector) {
  //   var columnSet = [];
  //   var headerTr$ = $("<tr/>");

  //   for (var i = 0; i < halls.length; i++) {
  //     var rowHash = halls[i];
  //     for (var key in rowHash) {
  //       if ($.inArray(key, columnSet) == -1) {
  //         columnSet.push(key);
  //         headerTr$.append($("<th/>").html(key));
  //       }
  //     }
  //   }
  //   $(selector).append(headerTr$);
  //   return columnSet;
  // }
  
}
window.onload = windowActions;
