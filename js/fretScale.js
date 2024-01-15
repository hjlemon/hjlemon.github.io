function promptForScaleLength() { // Prompts user for the scale length of their instrument
	scaleLength = prompt("What is your desired scale length?"); 
	if (scaleLength > 12 && scaleLength < 40) {
		document.getElementById("printScaleLength").innerHTML = "Your scale length is " + scaleLength + " inches.";
	}
	else {
		alert("Woah! That scale length is way too short or long! Try a more conservative number!");
		scaleLength = 0;
	}
}

const fretDists = []; // An array that is filled with values by the below for loop	

function promptForNumFrets() { // Prompts user for the number of frets on their instrument
	numFrets = prompt("How many frets will you have?"); 
	if (numFrets < 35) {
		document.getElementById("printNumFrets").innerHTML = "You have " + numFrets + " frets.";
	}
	else {
		alert ("Woah! That's too many frets! Please enter a smaller number.");
		numFrets = 0;
	}
}

	
function	genChart() {
	
	if (numFrets > 0 && scaleLength > 0) {

		let testing = 0; // Placeholder value, updated by the below for loop
		let distFromNut = 0; // Placeholder value, updated by the below for loop
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
}

function oneToTwelveDist() {
	let distBetween = 0;
	for (let j = 1; j < 12; j++) {
		distBetween = distBetween + fretDists[j];
	}
	
	document.getElementById("1to12Dist").innerHTML = "The distance from the 1st fret to the 12th fret is " + distBetween.toFixed(4) + " inches.";
}

function crownHeight() {
	let crownHeight = prompt("What is the crown height of your frets?");
	document.getElementById("crownHeight").innerHTML = "The crown height of your frets is " + crownHeight + " inches.";
}

function stringHeight() {
	let firstHeight = prompt("What is your desired string height above the 1st fret?");
	let twelveHeight = prompt("What is your desired string height above the 12th fret?");
	document.getElementById("stringHeight").innerHTML = "The desired height of your string is " + firstHeight + " inches above the 1st fret, and " + twelveHeight + " inches above the 12th fret.";
}
