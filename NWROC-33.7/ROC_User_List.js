function populateEmployeeNames() {
	
	let nameOptionHTML = "<option></option>";
	
	for (name in ROCEmployees)
	{
		nameOptionHTML += "<option>" + name + "</option>";
	}
	
	document.getElementById("EmpName").innerHTML = nameOptionHTML;
}

function setROCTitle(value) {
	
	if (value.length == 0) {
		document.getElementById("EmpTitle").value = "";
	}
	else {
		document.getElementById("EmpTitle").value = ROCEmployees[value][0];
	}
}

var ROCEmployees = {

	"Lloyd Biag": [
	"ROC Specialist"
	],
	"Logan Bundshuh": [
	"ROC Specialist"
	],
	"Cordon Carter": [
	"ROC Specialist"
	],
	"Anthony Cortes": [
	"ROC Specialist"
	],
	"LaSeana Craig": [
	"ROC Specialist"
	],
	"Aaron Gasper": [
	"ROC Specialist"
	],
	"Tobias Graham": [
	"ROC Specialist"
	],
	"Chadwick Harrison": [
	"ROC Specialist"
	],
	"Daniel Hallauer": [
	"ROC Specialist"
	],
	"Brenden Holt II": [
	"ROC Specialist"
	],
	"Monica Hulett": [
	"ROC Specialist"
	],
	"Susan Jordal": [
	"ROC Specialist"
	],
	"Lawrence Kaltenberg": [
	"ROC Specialist"
	],
	"Melissa Lutz": [
	"ROC Specialist"
	],
	"Steven Macias": [
	"ROC Specialist"
	],
	"Kimberly Mack": [
	"ROC Specialist"
	],
	"Felix Martinez": [
	"ROC Specialist"
	],
	"Evan Padfield": [
	"ROC Specialist"
	],
	"Jonathan Pratt": [
	"ROC Specialist"
	],
	"Joshua Quigley": [
	"ROC Specialist"
	],
	"Wayne Quigley": [
	"ROC Specialist"
	],
	"Christopher Rea": [
	"ROC Specialist"
	],
	"Peter Seibert": [
	"ROC Specialist"
	],
	"Gary Staninger": [
	"ROC Specialist"
	],
	"Zachary Storch": [
	"ROC Specialist"
	],
	"Ethan Tiff": [
	"ROC Specialist"
	],
	"Ricardo Timothy": [
	"ROC Specialist"
	],
	"Ronald Toole": [
	"ROC Specialist"
	],
	"Joseph Toves": [
	"ROC Specialist"
	],
	"Jordan Unga": [
	"ROC Specialist"
	],
	"Lori Uta": [
	"ROC Specialist"
	],
	"Jewuan Washington": [
	"ROC Specialist"
	],
	"Ashely Wells": [
	"ROC Specialist"
	],
	
	
		"Joshua DeVega": [
			"ROC Analyst"
			],
		
		"Thomas Thompson": [
			"ROC Supervisor"
			],
		"Joshua Pedersen": [
			"ROC Supervisor"
			],
		"Gloria Palma": [
			"ROC Supervisor"
			],
	
		"Rachel Pollard": [
			"ROC Manager"
			],
	
		"Brian Tritz": [
			"ROC Director"
			],
			
	}

document.addEventListener('DOMContentLoaded', function() {
    populateEmployeeNames();
}, false);
