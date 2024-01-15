function promptForScaleLength() { // Prompts user for the scale length of their instrument
	scaleLength = prompt("What is your desired scale length?"); 
	if (scaleLength >= 12 && scaleLength <= 40) {
		document.getElementById("printScaleLength").innerHTML = "Your scale length is " + scaleLength + " inches.";
	}
	else if (scaleLength < 12) {
		alert("Woah! That scale length is way too short! Try a number between 12 and 40.");
		scaleLength = 0;
	}
	else {
		alert("Woah! That scale length is way too long! Try a number between 12 and 40.");
		scaleLength = 0;
	}
}

const fretDists = []; // An array that is filled with values by the below for loop	

function promptForNumFrets() { // Prompts user for the number of frets on their instrument
	numFrets = prompt("How many frets will you have?"); 
	if (numFrets <= 35 && numFrets >= 12) {
		document.getElementById("printNumFrets").innerHTML = "You have " + numFrets + " frets.";
	}
	else if (numFrets <= 12){
		alert ("Woah! That's way too few frets! Please enter a number between 12 and 35.");
		numFrets = 0;
	}
	else {
		alert ("Woah! That's way too many frets! Please enter a number between 12 and 35.");
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
	if (crownHeight >= 0.035 && crownHeight <= 0.055) {
		document.getElementById("crownHeight").innerHTML = "The crown height of your frets is " + crownHeight + " inches.";
	}
	else if (crownHeight < 0.035) {
		alert("Woah! That crown height is way too short! Try a number between 0.035 and 0.055.");
		crownHeight = 0;
	}
	else {
		alert("Woah! That crown height is way too tall! Try a number between 0.035 and 0.055.");
		crownHeight = 0;
	}
}

function stringHeight() {
	let firstHeight = prompt("What is your desired string height above the 1st fret?");
	if (firstHeight >= 0.005 && firstHeight <= 0.100) {
		document.getElementById("firstFretHeight").innerHTML = "The desired height of your strings is " + firstHeight + " inches above the 1st fret.";
	}
	else if (firstHeight < 0.005) {
		alert("Woah! That string height is way too low! Try a number between 0.005 and 0.100.");
		firstHeight = 0;
	}
	else {
		alert("Woah! That string height is way too high! Try a number between 0.005 and 0.100.");
		firstHeight = 0;
	}
	
	let twelveHeight = prompt("What is your desired string height above the 12th fret?");
	if (twelveHeight >= 0.080 && twelveHeight <= 0.300) {
		document.getElementById("firstFretHeight").innerHTML = "The desired height of your strings is " + twelveHeight + " inches above the 12th fret.";
	}
	else if (twelveHeight < 0.080) {
		alert("Woah! That string height is way too low! Try a number between 0.005 and 0.100.");
		twelveHeight = 0;
	}
	else {
		alert("Woah! That string height is way too high! Try a number between 0.005 and 0.100.");
		twelveHeight = 0;
	} 
}
