//11.2.4
// import the data from data.js
const tableData = data;

//11.2.4
// Reference the HTML table using d3
var tbody = d3.select("tbody");


//11.5.1
function buildTable(data) {
    tbody.html("");
}

//11.5.2
// Next, loop through each object in the data
// and append a row and cells for each value in the row

data.forEach((dataRow) => {

    // Append a row to the table body
    let row = tbody.append("tr");

    
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
    
    
    let cell = row.append("td");
    cell.text(val);
    
    }
});
}