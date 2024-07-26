function createTable() {
   
    let numRows = parseInt(prompt("Input number of rows"));
    if (isNaN(numRows) || numRows <= 0) {
        alert("Please enter a valid number of rows");
        return;
    }

    
    let numCols = parseInt(prompt("Input number of columns"));
    if (isNaN(numCols) || numCols <= 0) {
        alert("Please enter a valid number of columns");
        return;
    }


    let table = document.getElementById("myTable");

   
    table.innerHTML = "";

   
    for (let i = 0; i < numRows; i++) {
    
        let row = document.createElement("tr");

        for (let j = 0; j < numCols; j++) {
           
            let cell = document.createElement("td");
           
            cell.textContent = `Row-${i} Column-${j}`;
        
            row.appendChild(cell);
        }

     
        table.appendChild(row);
    }
}
