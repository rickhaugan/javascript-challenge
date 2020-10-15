
// Select button
let button = d3.select("#filter-btn");


// On button click, run fuction runEnter
button.on("click", runEnter);


function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    //select datetime on form
    let inputDate = d3.select("#datetime");
    // Get the value property of the input date
    let inputValue = inputDate.property('value');
  

    //select the table body and clear it
    let tbody = d3.select("tbody");
    tbody.html('')

  //If nothing in input value then run all data.  
  //Else use filtered data
  if (inputValue === ""){

  // siting report values 
  data.forEach(function(siting) {
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
  } else {
      
  //copy data into another variable for filtering
  let sitingSelectionData = JSON.parse(JSON.stringify(data));

  //filtered data object
  let filteredData = sitingSelectionData.filter(siting => siting.datetime === inputValue);

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


  }
  };