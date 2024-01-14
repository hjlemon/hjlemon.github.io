// Calculates the the scale length

function fretScaleCalc(){

let scaleLength = prompt("What is your desired scale length?"); // Prompts user for the scale length of their instrument
let numFrets = prompt("How many frets will you have?"); //Prompts user for the number of frets on their instrument
let testing = 0; // Placeholder value, updated by the below for loop
let distFromNut = 0; // Placeholder value, updated by the below for loop
const fretDists = []; // An array that is filled with values by the below for loop
let main_table = document.getElementById("scaleLengthTable");

for (let i = 0; i < numFrets; i++) {
	// Create new row and cells for the table
	let row = document.createElement("tr");
	let cell1 = document.createElement("td");
	let cell2 = document.createElement("td");
	
	testing = (scaleLength - distFromNut) / 17.817;
	fretDists.push(testing);
	distFromNut = fretDists[i] + distFromNut;

	// Add the cells to the row and the row to the table body
	cell1.appendChild(document.createTextNode(i + 1));
	cell2.appendChild(document.createTextNode(distFromNut.toFixed(4) + '"'));
	row.appendChild(cell1);
	row.appendChild(cell2);
	main_table.appendChild(row);
			
	document.getElementById("tableHeader").innerHTML = "Scale Length = " + scaleLength + '" -  ' + numFrets + " Frets";
}
}