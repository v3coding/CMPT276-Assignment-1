
function addRow(){
    var gradesTable = document.getElementById("gradesTable");
    var numberOfRows = gradesTable.rows.length;

    var row = gradesTable.insertRow(numberOfRows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    row.insertCell(4);

    cell1.innerHTML = 'Activity ' + numberOfRows;
    cell2.innerHTML = 'A'+ numberOfRows;
    cell3.innerHTML = '<input type ="text" class="weight">';
    cell4.innerHTML = '<input type ="text" class="numerator">' + 
                      ' / <input type ="text" class="denominator">';

}

function weighted(){
    var gradesTable = document.getElementById("gradesTable");
    var numberOfRows = gradesTable.rows.length;

    getGradePercent(gradesTable,numberOfRows);
    var runningSum = 0;
    for(var row=1; row<numberOfRows; row++){
        var result = ((gradesTable.rows[row].cells[2].children[0].value)/100 * gradesTable.rows[row].cells[4].innerText);
        runningSum += result;
    }
    document.getElementById("finalResult").innerHTML = runningSum;
}

function mean() {
    var gradesTable = document.getElementById("gradesTable");
    var numberOfRows = gradesTable.rows.length;

    getGradePercent(gradesTable,numberOfRows);
    var runningSum = 0;
    for(var row=1; row<numberOfRows; row++){
        runningSum +=  parseInt(gradesTable.rows[row].cells[4].innerText);
    }
    runningSum = (runningSum / (numberOfRows-1));
    document.getElementById("finalResult").innerHTML = runningSum;
}

function getGradePercent(gradesTable, numberOfRows){
    for(var row=1; row<numberOfRows; row++){
        var result = (gradesTable.rows[row].cells[3].children[0].value / gradesTable.rows[row].cells[3].children[1].value) * 100;
        gradesTable.rows[row].cells[4].innerHTML = result;
    }
    
}