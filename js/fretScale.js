// All variables are set as 0 here so that they can be accessed globally
let scaleLength = 0;
let numFrets = 0;
const fretDists = []; // An array that is filled with values by the genChart function
let distFromNut = 0; // Placeholder value, updated by the below for loop
let distBetween = 0;
let crownHeight = 0;
let firstHeight =  0;
let twelveHeight = 0;



function promptForScaleLength() { // Prompts user for the scale length of their instrument
	scaleLength = prompt("What is your desired scale length?"); 
	if (scaleLength >= 12 && scaleLength <= 40) {
		document.getElementById("printScaleLength").innerHTML = "Your scale length is " + scaleLength + " inches.";
		console.log("Scale Length: " + scaleLength);
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

function promptForNumFrets() { // Prompts user for the number of frets on their instrument
	numFrets = prompt("How many frets will you have?"); 
	if (numFrets <= 35 && numFrets >= 12) {
		document.getElementById("printNumFrets").innerHTML = "You have " + numFrets + " frets.";
		console.log("Frets: " + numFrets);
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
		let main_table = document.getElementById("scaleLengthTable");

		for (let i = 0; i < numFrets; i++) {
			// Create new row and cells for the table
			let row = document.createElement("tr");
			let cell1 = document.createElement("td");
			let cell2 = document.createElement("td");
			let cell3 = document.createElement("td");
	
			testing = (scaleLength - distFromNut) / 17.817;
			testing2 = parseFloat(testing.toFixed(3));
			fretDists.push(testing2);
			distFromNut = fretDists[i] + distFromNut;

			// Add the cells to the row and the row to the table body
			cell1.appendChild(document.createTextNode(i + 1));
			cell2.appendChild(document.createTextNode(distFromNut.toFixed(3) + '"'));
			cell3.appendChild(document.createTextNode(fretDists[i] + '"' + "(" + i + "-" + (i + 1) + ")"));
			row.appendChild(cell1);
			row.appendChild(cell2);
			row.appendChild(cell3);
			main_table.appendChild(row);
			
			document.getElementById("tableHeader").innerHTML = "Scale Length = " + scaleLength + '" -  ' + numFrets + " Frets";
		}
	}
}

function oneToTwelveDist() {
	distBetween = (scaleLength / 2) - fretDists[0];
	document.getElementById("1to12Dist").innerHTML = "The distance from the 1st fret to the 12th fret is " + distBetween.toFixed(4) + " inches.";
	console.log("Distance from 1st fret to 12th fret: " + distBetween);
}

function calcCrownHeight() {
	crownHeight = prompt("What is the crown height of your frets?");
	if (crownHeight >= 0.035 && crownHeight <= 0.055) {
		document.getElementById("crownHeight").innerHTML = "The crown height of your frets is " + crownHeight + " inches.";
		console.log("Fret Crown Height: " + crownHeight);
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

function stringHeightfirst() {
	firstHeight = prompt("What is your desired string height above the 1st fret?");
	if (firstHeight >= 0.005 && firstHeight <= 0.100) {
		document.getElementById("firstFretHeight").innerHTML = "The desired height of your strings is " + firstHeight + " inches above the 1st fret.";
		console.log("String Height at first fret: " + firstHeight);
	}
	else if (firstHeight < 0.005) {
		alert("Woah! That string height is way too low! Try a number between 0.005 and 0.100.");
		firstHeight = 0;
	}
	else {
		alert("Woah! That string height is way too high! Try a number between 0.005 and 0.100.");
		firstHeight = 0;
	}
}

function stringHeighttwelve() {
	twelveHeight = prompt("What is your desired string height above the 12th fret?");
	if (twelveHeight >= 0.080 && twelveHeight <= 0.300) {
		document.getElementById("twelveFretHeight").innerHTML = "The desired height of your strings is " + twelveHeight + " inches above the 12th fret.";
		console.log("String Height at twelvth fret: " + twelveHeight);
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

let distToIntersection = 0; // From first fret to the point at which the plane of the fretboard intersects the plane of the strings
let angBetweenPlanes = 0;

function calcNutHeight() {
	distBetween = parseFloat(distBetween);
	firstHeight = parseFloat(firstHeight);
	twelveHeight = parseFloat(twelveHeight);
	crownHeight = parseFloat(crownHeight);
	
	// Checked, calculates correctly
	let fretHyp1 = Math.sqrt(Math.pow(crownHeight + twelveHeight, 2) + Math.pow(distBetween, 2));
	
	// Checked, calculates correctly
	let intAng = 90 - ((180/Math.PI) * Math.asin((twelveHeight + crownHeight)/fretHyp1));
	
	// Checked, calculates correctly
	let missingSide1 = Math.sqrt(Math.pow((crownHeight + firstHeight), 2) + Math.pow(fretHyp1, 2) - (2 * (crownHeight + firstHeight) * fretHyp1 * Math.cos((Math.PI/180) * intAng)));
	
	// Calculates at 0.46 degrees, was calculated by hand at 0.44. Results in 0.009" difference over 26.375 inches.
	let missingAng1 = ((180/Math.PI)*Math.acos((Math.pow(missingSide1, 2) + Math.pow(firstHeight+crownHeight, 2) - Math.pow(fretHyp1, 2))/(2*missingSide1*(firstHeight+crownHeight))));
	
	
	angBetweenPlanes = missingAng1 - 90;
	
	// Checked, calculates correctly
	let nutHeight = (firstHeight + crownHeight) - (fretDists[0] * Math.tan((Math.PI/180) * angBetweenPlanes));
	
	console.log("Height of strings at nut: " + nutHeight.toFixed(3));
	
	document.getElementById("nutHeight").innerHTML = "The height of the bottom of each string slot in the nut above the fretboard surface is " + nutHeight.toFixed(3) + " inches.";
	
	distToIntersection = ((Math.sin((Math.PI/180)*(90-angBetweenPlanes))*(crownHeight+firstHeight))/Math.sin((Math.PI/180)*angBetweenPlanes)) - fretDists[0];
}

lastFretDist = 0;
let afterlength = 0;

function calcLastFret() {
	lastFret = prompt("What is the last fret before your neck joins the pot assembly?");
	for (let w = 0; w < lastFret; w++) {
		lastFretDist = lastFretDist + fretDists[w];
	}
	document.getElementById("lastFret").innerHTML = "The last fret is " + lastFret + "."
}

stringHeightAtTensionHoop = 0;
stringHeightEnd = 0; // The distance between planes at the bridge
intToEndOfFB = 0;

function calcHeightAtEnd() {
	afterlength = prompt("What is the afterlength of your fretboard?");
	intToEndOfFB = (distToIntersection - fretDists[0]) + lastFretDist + parseFloat(afterlength);
	document.getElementById("afterlength").innerHTML = "The afterlength of your fretboard is " + afterlength + " inches."
	stringHeightAtTensionHoop = intToEndOfFB * Math.tan((Math.PI/180) * angBetweenPlanes);
	stringHeightEnd = ((distToIntersection - fretDists[0]) + parseFloat(scaleLength)) * Math.tan((Math.PI/180) * angBetweenPlanes);
}

fretboardEndHeight = 0;

function promptFretBoardHeight() {
	fretboardEndHeight = prompt("How far above the head do you want the end of the fretboard to be?");
	document.getElementById("FBHeight").innerHTML = "The top of the fretboard will be " + fretboardEndHeight + " inches above the top of the head."
}

bridgeHeight = 0;
recalcBridge = 0;

function calcBridgeHeight() {
	bridgeHeight = prompt("How tall is your bridge?");
	document.getElementById("bridgeHeight").innerHTML = "Your bridge is " + bridgeHeight + " inches tall.";
	recalcBridge = bridgeHeight - fretboardEndHeight;
}

function calcNeckAngle() {
	let side1 = ((distToIntersection - fretDists[0]) + parseFloat(scaleLength)) - intToEndOfFB;
	
	let neckAngle = (180/Math.PI) * Math.asin((recalcBridge - stringHeightEnd) / side1);
	
	document.getElementById("neckAngle").innerHTML = "Your neck angle will be " + neckAngle.toFixed(2) + " degrees.";
	
}
