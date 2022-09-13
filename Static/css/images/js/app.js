// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
// Declare the variable, tbody
// Use d3.select to tell JS to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");
//Clear the data
function buildTable(data) {
    tbody.html("");
  }

  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dateRow).forEach((val) => {
        let cell =row.append("td");
        cell.text(val);
    }
    );
});

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };
d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);