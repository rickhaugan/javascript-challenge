
// Select button
let onChange = d3.selectAll(".filter");


// On button click, run fuction runEnter
onChange.on("change", runEnter);


function runEnter() {
    let tbody = d3.select("tbody");
    tbody.html('')
    // Prevent the page from refreshing
    // d3.event.preventDefault();
    let inputSelection = d3.select(this).select("input");
    let inputValue = inputSelection.property("value");
    let filterId = inputSelection.attr("id");
  
    console.log("filter ID is", inputValue)
  

      
  //copy data into another variable for filtering
  let sitingSelectionData = JSON.parse(JSON.stringify(data));

  //filtered data object

  let filteredData = sitingSelectionData.filter(siting => siting[filterId] === inputValue);

  filteredData.forEach(function(siting) {
    console.log(siting);
    let row = tbody.append("tr");
    Object.entries(siting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the siting object
      let cell = row.append("td");
      cell.text(value);
    });
  });


  
  };