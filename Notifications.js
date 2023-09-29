var copyLHDescBtn = document.querySelector(".CopyDesc");
var copyPingBtn = document.querySelector(".CopyPing");
var copyBCBtn = document.querySelector(".CopyBC");
var GenEmailBtn = document.querySelector(".GenEmail");
var copyGENTBtn = document.querySelector(".CopyGENT");
var PWOEmailBtn = document.querySelector(".PWOEmailOutage");
var PWOEmailBtn2 = document.querySelector(".PWOEmailY6");
var NodeName = "";
var PSRunTime = "";
var OrderNum = "";

let bcountb = 0
let vmcount = 0
let ETRcount = 0

let EBMode = document.getElementById("EverbridgeMode").checked

function TheCopy(Thang) {

if(Thang.id == "Desc") {
	Thang.select();	
	try {
			var successful = document.execCommand("copy");
			var msg = successful ? "successful" : "unsuccessful";
			console.log("Copying text command was " + msg);
			for (let el of document.querySelectorAll('.COPYGOOD')) el.classList.remove("displayNone");
			for (let el of document.querySelectorAll('.COPYGOOD')) el.classList.add("SHOWME");

			setTimeout(ClearCopy,2000)
		} catch (err) {
			console.log("Oops, unable to copy");
		}
	} else if(Thang.id == "Ping") {

		if (document.getElementById("NoteType").value == "Initial"){
			Astr = document.getElementById("Desc").value + "\n\n" + document.getElementById("BC").value + document.getElementById("AddRESS").value + "\n\nAddress Block\n" + document.getElementById("AddressBlock").value + "\n\n" + document.getElementById("Ping").value ;
		}else if (document.getElementById("NoteType").value == "IRIS"){
			if (document.getElementById("AN").value == "No" && document.getElementById("USDSA").value == "No" && document.getElementById("common").value == "No" ){
				Astr = document.getElementById("Desc").value + "\n\nAddress Block\n" + document.getElementById("AddressBlockIRIS").value + "\n\n" + document.getElementById("Ping").value ;
			}else{
			Astr = document.getElementById("Desc").value + "\n\n" + document.getElementById("BC").value + "\n\nAddress Block\n" + document.getElementById("AddressBlockIRIS").value + "\n\n" + document.getElementById("Ping").value ;
		}}
		else {
			Astr = document.getElementById("Desc").value + document.getElementById("AddRESS").value + "\n\n" + document.getElementById("Ping").value ;
		}

str = Astr
//attempt to scrub "Search" if it exists 
let res = Astr.replace(/Search\n\nInterface\s/g, "Interface");
let res2 = res.replace(/Search\n\nPING STATISTICS/g, "PING STATISTICS");
str = res2

		temptxt = document.createElement('textarea');
		temptxt.value = str;
		document.body.appendChild(temptxt);
		temptxt.select();
		document.execCommand('copy');
		document.body.removeChild(temptxt);
		for (let el of document.querySelectorAll('.COPYGOOD')) el.classList.remove("displayNone");
			

		setTimeout(ClearCopy,2000)
	} else if(Thang.id == "BC") {
		
Astr = document.getElementById("BC").value

str = Astr
//attempt to scrub "Search" if it exists 
let res = Astr.replace(/Search\n\nInterface\s/g, "Interface");
let res2 = res.replace(/Search\n\nPING STATISTICS/g, "PING STATISTICS");
str = res2

		temptxt = document.createElement('textarea');
		temptxt.value = str;
		document.body.appendChild(temptxt);
		temptxt.select();
		document.execCommand('copy');
		document.body.removeChild(temptxt);
		for (let el of document.querySelectorAll('.COPYGOOD')) el.classList.remove("displayNone");
			

		setTimeout(ClearCopy,2000)
	} else if(Thang.id == "BC") {
		
Astr = document.getElementById("BC").value

str = Astr
//attempt to scrub "Search" if it exists 
let res = Astr.replace(/Search\n\nInterface\s/g, "Interface");
let res2 = res.replace(/Search\n\nPING STATISTICS/g, "PING STATISTICS");
str = res2

		temptxt = document.createElement('textarea');
		temptxt.value = str;
		document.body.appendChild(temptxt);
		temptxt.select();
		document.execCommand('copy');
		document.body.removeChild(temptxt);
		for (let el of document.querySelectorAll('.COPYGOOD')) el.classList.remove("displayNone");
			

		setTimeout(ClearCopy,2000)
	} else if(Thang.id == "GENTemp"){

Astr = document.getElementById("GENTemp").value

str = Astr
//attempt to scrub "Search" if it exists 
let res = Astr.replace(/Search\n\nInterface\s/g, "Interface");
let res2 = res.replace(/Search\n\nPING STATISTICS/g, "PING STATISTICS");
str = res2

		temptxt = document.createElement('textarea');
		temptxt.value = str;
		document.body.appendChild(temptxt);
		temptxt.select();
		document.execCommand('copy');
		document.body.removeChild(temptxt);
		for (let el of document.querySelectorAll('.COPYGOOD')) el.classList.remove("displayNone");
				
	
		setTimeout(ClearCopy,2000)
	}

}





function scrubIT() {
Astr = document.getElementById("Ping").value

str = Astr
//attempt to scrub "Search" if it exists 
let res = Astr.replace(/Search\n\nInterface\s/g, "Interface");
let res2 = res.replace(/Search\n\nPING STATISTICS/g, "PING STATISTICS");
document.getElementById("Ping").value = res2

NodeCount() 	//- working on finding counts

}

function NodeCount(){
//Remedy Work Detail notes - Breadcrumb
//Ex:   Node: GB281A | 10/100 | 10.00% offline | Power Supply: Normal | SNR 35.5 dB |


	//With NodeCount Complete additional details are now available
	//let's see about using this in the Notification for Multi Node/PS issues, and feed the checkboxes based on Online/Offline/'n/a'
	
let pings = document.getElementById("Ping").value	//Reference Ping Stats input

//Count "PING STATISTICS" in the input = # of nodes
let count = (pings.match(/PING STATISTICS/g) || []).length;

document.getElementById("FlagNodes").value = ""
document.getElementById("BC").innerHTML = ""



//run this script for each node...
//using the initial PING STATISTICS location as a start
multicount=0;
for (i=1; i<(count+1); i++){
		//Define Substrings to search for
	subStr0 = "PING STATISTICS";
	subStr1 = " Accounts and Devices";
	subStr2 = "Node ";
	subStr3 = "MTA	";
	subStr4 = "Set-top Box	";
	subStr5 = "Cable Modem	";
	subStr6 = "Accounts	";
	subStr10 = "ONU	";

	subStr333 = "%	";
	subStr8 = "Longitude";
	subStr9 = "Interface";

		//Use above substrings to find start of each substring for the current iteration (i)
		//used to pull substrings, need Start and End positions
	ThisNode0 = pings.split(subStr0, i).join(subStr0).length; //current Node "Ping Stats"
	ThisNode00 = pings.split(subStr0, i+1).join(subStr0).length; // Next Node "Ping Stats" - if no further nodes, result is end of string

	ThisNode1 = pings.split(subStr1, i).join(subStr1).length; //" Accounts and Devices" (end of Node Name)
	ThisNode2 = pings.split(subStr2, i).join(subStr2).length; //"Node " (beginning of Node Name)
	ThisNode3 = pings.split(subStr3, i).join(subStr3).length; //"MTA " row
	ThisNode4 = pings.split(subStr4, i).join(subStr4).length; //"Set-top Box " row
	ThisNode5 = pings.split(subStr5, i).join(subStr5).length; //"Cable Modem " row
	ThisNode6 = pings.split(subStr6, i).join(subStr6).length; //"Accounts " row (end of cable modem row)
	ThisNode10 = pings.split(subStr10, i).join(subStr10).length; //"ONU " row
	ThisNode333A = pings.split(subStr333, (1+(5*(i-1)))).join(subStr333).length; //Online% - start for counts (MTA)
	ThisNode333B = pings.split(subStr333, (1+(5*(i-1)))+1).join(subStr333).length; //Online% - start for counts (SetTop)
	ThisNode333C = pings.split(subStr333, (1+(5*(i-1)))+2).join(subStr333).length; //Online% - start for counts (CM)
	ThisNode333D = pings.split(subStr333, (1+(5*(i-1)))+4).join(subStr333).length; //Online% - start for counts (ONU)
	ThisNode8 = (pings.split(subStr8, i).join(subStr8).length)+10;	//"Longitude" +10 begining of Power Supply detail
	ThisNode9 = pings.indexOf(subStr9, ThisNode8) //"Interface" beginning of SNR - if NONE found returns: -1

//Tab Character: "	" for reference/searching
tabc="	"


//Node 
	ThisNode = pings.substring((ThisNode2+5),ThisNode1)
	test = document.getElementById("FlagNodes").value
		//alert("Try: " + ThisNode + " vs " + test + " /// " + test.includes(ThisNode) + " /// " + "Multi: " + multicount)
		
	if(document.getElementById("FlagNodes").value != "") {
		test = document.getElementById("FlagNodes").value

		if(test.includes(ThisNode) == false) {
			document.getElementById("FlagNodes").value = document.getElementById("FlagNodes").value + ", " + ThisNode
			multicount = multicount+1
		} else if(test.includes(ThisNode) == true) {
			//multicount = multicount -1
			continue;
		}
	} else if(document.getElementById("FlagNodes").value == "") {
		document.getElementById("FlagNodes").value = ThisNode
	}



if (multicount > 1) {
	
	document.getElementById("FlagMulti").checked = true
} else if (multicount = 1) {
	
	document.getElementById("FlagMulti").checked = false
}	

NodeName = ThisNode;
	
//MTA - Offline, Total and Unknown counts
	trust1 = pings.indexOf(tabc, ThisNode333A)	//find tab character start from MTA Online"%"
	trust2 = pings.indexOf(tabc, trust1+1)		//find tab character start from FIRST tab found

	MTAoff = pings.substring(trust1+1,trust2)	//return value between 1st and 2nd tab characters

	trust1 = pings.indexOf(tabc, trust2+1)		//find tab character start from 2nd tab found above
	MTATot = pings.substring(trust2+1,trust1)   //return value between 2nd and 3rd tab characters
	
	MTAUnk = pings.substring(trust1+1,ThisNode4)//return value between 3rd tab and 'Set-Top Box' start
	

//Set-top Box - Offline, Total and Unknown counts
	trust1 = pings.indexOf(tabc, ThisNode333B)
	trust2 = pings.indexOf(tabc, trust1+1)
	
	STBoff = pings.substring(trust1+1,trust2)

	trust1 = pings.indexOf(tabc, trust2+1)
	STBTot = pings.substring(trust2+1,trust1)

	STBUnk = pings.substring(trust1+1,ThisNode5)

	
//Cable Modem - Offline, Total and Unknown counts
	trust1 = pings.indexOf(tabc, ThisNode333C)
	trust2 = pings.indexOf(tabc, trust1+1)
	
	CMoff = pings.substring(trust1+1,trust2)

	trust1 = pings.indexOf(tabc, trust2+1)
	CMTot = pings.substring(trust2+1,trust1)

	CMUnk = pings.substring(trust1+1,ThisNode6)

//ONU - Offline, Total and Unknown counts
	trust1 = pings.indexOf(tabc, ThisNode333D)
	trust2 = pings.indexOf(tabc, trust1+1)

	ONUoff = pings.substring(trust1+1,trust2)

	trust1 = pings.indexOf(tabc, trust2+1)
	ONUTot = pings.substring(trust2+1,trust1)

	ONUUnk = pings.substring(trust1+1)
	
//Total ALL OFFLINE devices
var ALLOFF = parseInt(MTAoff) + parseInt(STBoff) + parseInt(CMoff) + parseInt(ONUoff)

//Total ALL TOTAL and UNKNOWN Devices 
var ALLDEV = parseInt(MTATot)+parseInt(MTAUnk) + parseInt(STBTot)+parseInt(STBUnk) + parseInt(CMTot)+parseInt(CMUnk) + parseInt(ONUTot)+parseInt(ONUUnk)

//Find Percent Offline using the above values, then format as Percentage
	var mathss =(parseInt(ALLOFF)/parseInt(ALLDEV))
	var offlinep = Number(mathss).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}); 



//Power Supply/Supplies status Section

//Count number of Power Supplies - Between "Longitude" (ThisNode8) and "Interface" (ThisNode9) IF SNR IS PRESENT...
var eh = RegExp(tabc, 'g')							//create tab reference
if(ThisNode9 <= ThisNode00 && (ThisNode9 != (-1))){  //SNR Stats present before next node

	tempstr = pings.substring(ThisNode8,ThisNode9)		//Create a string for only power supply data between 'Longitude' and 'Interfaces'
	pscount = ((tempstr.match(eh) || []).length)/8; 	//Count total tabs in temp string, divided by 8 Tabs per Power Supply listed = # of nodes

} else {   //Missing Interface (SNR Stats) - do count between Longitude (ThisNode8) and Next Node, ThisNode00
	tempstr = pings.substring(ThisNode8,ThisNode00)		//Create a string for only power supply data between 'Longitude' and next 'Ping Stats'
	pscount = ((tempstr.match(eh) || []).length)/8;  	//Count total tabs in temp string, divided by 8 Tabs per Power Supply listed = # of nodes
}

//Note: if pscount > 1 can we feed this to the form and set the status??


var PS = "" //Reset "PS" to blank per node

//for each node, loop below for each PS
for (ay=1; ay<(pscount+1); ay++){
	if (ay==1) {
		ThisPS1 = 0
	} else {
		ThisPS1 = ThisPS5b
}

ThisPS2 = tempstr.split(tabc, (1+(8*(ay-1)))).join(tabc).length; //Name (tab1)
ThisPS3 = tempstr.split(tabc, (1+(8*(ay-1)))+1).join(tabc).length; //Status (tab2)
ThisPS4a = (tempstr.split(tabc, (1+(8*(ay-1)))+3).join(tabc).length)+1; //Runtime (tab4)
ThisPS4b = tempstr.split(tabc, (1+(8*(ay-1)))+4).join(tabc).length; //Runtime (tab5)

ThisPS5a = tempstr.split(tabc, (1+(8*(ay-1)))+7).join(tabc).length;
var tstr2 = tempstr.substring(ThisPS5a,tempstr.length)
var tstr2a = tstr2.indexOf(".")+9
ThisPS5b = ThisPS5a+tstr2a



tempname = tempstr.substring(0,ThisPS2);

//find PS data per # of power supplies
	PSName = tempstr.substring(ThisPS1,ThisPS2)
	PSStat = tempstr.substring(ThisPS2+1,ThisPS3)
	PSRunTime = tempstr.substring(ThisPS4a,ThisPS4b)


if(document.getElementById("FlagPSStatus").value == "") {
document.getElementById("FlagPSStatus").value = PSStat
} else if (document.getElementById("FlagPSStatus").value !="" && document.getElementById("FlagPSStatus").value != "Combo") {
	if (document.getElementById("FlagPSStatus").value != PSStat) {
		document.getElementById("FlagPSStatus").value = "Combo"
	}
}



if (pscount==1 || ay==(pscount)) {
	var PSSpace = " "
} else if (pscount >= 2) {
	var PSSpace = ", " 
}

if (PSStat != "Standby"){
PSNew = PSName + ": " + PSStat + PSSpace
} else if(PSStat == "Standby"){
PSNew = PSName + ": " + PSStat + " " + PSRunTime + " Remaining" + PSSpace
}
//	alert("///" + tempstr + " // " + ThisPS1 + ":" + ThisPS2 + ":" + ThisPS3 + ":" + ThisPS4a + ":" + ThisPS4b + ":" + ThisPS5a + ":" + ThisPS5b)

PS = PS + PSNew

}

if (pscount==0) PS = "n/a "

//alert (PS)


//if count2 is Greater than 0, SNR Stats ARE Available ie-Node: xxxx detected
//var tempnode = RegExp("Node: "+ThisNode, 'g')
//var tempnodeA = RegExp("Interface"+ThisNode, 'g')
//var tempnode = pings.indexOf(".")+9

//let count2 = (pings.match(tempnode) || []).length;
//alert(tempnode + " // Next Node: " + ThisNode00 + " // Current node: " + ThisNode0)



var SNR = "n/a"


//SNR
if (ThisNode9 < ThisNode00 && ThisNode9 != (-1)) { //SNR Stats Available, do the SNR stuff
//interface is before next node, SNR stats present

//find and array / min SNR for each node, if available
//not all nodes have 4 interfaces...some have 3...need examples
//Examples: 
//			P61 has 4 including 6.5-20.3 MHZ, but shows "-"
//			BU101 has 0
//			CB005A only has 3
	tempstr = pings.substring((ThisNode9+69),ThisNode00)
	var eh = RegExp(tabc, 'g')
	carcount = ((tempstr.match(eh) || []).length)/5;
	//success

const carriers = [0];

	for (oi=1; oi<(carcount+1); oi++){

		var car2 = (tempstr.split(tabc, (5+(5*(oi-1)))).join(tabc).length)+1; //Name (tab1)
		
		var car = tempstr.substring(car2,car2+5)
		if (isNaN(car) == true) {
		car = 999
		}
		carriers[(oi-1)] = car
	}
	//document.getElementById("Desc").innerHTML = carriers;

	SNR = Math.min(...carriers)



} else if (ThisNode9 > ThisNode00) {
	//interface is after next node, no snr, set to n/a
	var SNR = "n/a";
	
}



	if(document.getElementById("BC").innerHTML != ""){

 		if (document.getElementById("REPEATCheck").checked == true) {
			document.getElementById("BC").innerHTML = document.getElementById("BC").innerHTML + "\n\n" + "\r" + REPeatType + "\r" + "Node: " + ThisNode + " | " + ALLOFF + "/" +ALLDEV + " | " + offlinep + " offline | Power Supply " + PS + "| SNR: " + SNR + " | "
		}else {
			document.getElementById("BC").innerHTML = document.getElementById("BC").innerHTML + "\n\n" + "Node: " + ThisNode + " | " + ALLOFF + "/" +ALLDEV + " | " + offlinep + " offline | Power Supply " + PS + "| SNR: " + SNR + " | "
		}
		
		
	} else if (i==1) {

 		if (document.getElementById("REPEATCheck").checked == true) {
			document.getElementById("BC").innerHTML = REPeatType + "\r" + "Node: " + ThisNode + " | " + ALLOFF + "/" + ALLDEV + " | " + offlinep + " offline | Power Supply " + PS + "| SNR: " + SNR + " | "
		}else (
			document.getElementById("BC").innerHTML = "Node: " + ThisNode + " | " + ALLOFF + "/" + ALLDEV + " | " + offlinep + " offline | Power Supply " + PS + "| SNR: " + SNR + " | "
		)
		
	

}

}

//Source: https://www.geeksforgeeks.org/how-to-get-nth-occurrence-of-a-string-in-javascript/
//str.split(subStr, i).join(subStr).length


}



copyLHDescBtn.addEventListener("click", function(event) {
myUpdate()	//DOUBLE VERIFIED - NEEDS TO BE HERE!!
//check only items SHOWING by using the class "SHOWME" oppisite "displayNone" 

var copyLHDesc = document.querySelector("#Desc");

//JUST COPY WHATEVER'S IN THERE - TEMP WHILE WORKING ON ADDITIONAL LOGIC
TheCopy(copyLHDesc);



//Placeholder for future Dev: use SHOWME to check visible fields only
////	for (let el of document.querySelectorAll('.SHOWME')) {
////		DaTruth = document.getElementById(el.id).value;
////	}

}

);

copyPingBtn.addEventListener("click", function(event) {
myUpdate()	//DOUBLE VERIFIED - NEEDS TO BE HERE!!

var copyPing = document.querySelector("#Ping");

//JUST COPY WHATEVER'S IN THERE - TEMP WHILE WORKING ON ADDITIONAL LOGIC

TheCopy(copyPing);

}

);

copyBCBtn.addEventListener("click", function(event) {
myUpdate()	//DOUBLE VERIFIED - NEEDS TO BE HERE!!

var copyBC = document.querySelector("#BC");

//JUST COPY WHATEVER'S IN THERE - TEMP WHILE WORKING ON ADDITIONAL LOGIC

TheCopy(copyBC);

}

);

GenEmailBtn.addEventListener("click", function(event) {

RepUpdate();

SendMail();


}

);
var PWOEmailBtn = document.querySelector(".PWOEmailOutage");

PWOEmailBtn.addEventListener("click", function(event) {
   var copy1 = document.querySelector("#PWOTotalFormat");
		copy1.select();           
	try {
	   var successful = document.execCommand("copy");
	   var msg = successful ? "successful" : "unsuccessful";
	   console.log("Copying text command was " + msg);
	} catch (err) {
	   console.log("Oops, unable to copy");
   }
});


var PWOEmailBtn2 = document.querySelector(".PWOEmailY6");

PWOEmailBtn2.addEventListener("click", function(event) {
   var copy2 = document.querySelector("#PWOTotalY6Format");
		copy2.select();           
	try {
	   var successful = document.execCommand("copy");
	   var msg = successful ? "successful" : "unsuccessful";
	   console.log("Copying text command was " + msg);
	} catch (err) {
	   console.log("Oops, unable to copy");
   }
});

var PWOEmailBtn3 = document.querySelector(".RepeatBCButton");

PWOEmailBtn3.addEventListener("click", function(event) {
   var copy3 = document.querySelector("#RepeatBCBox");
		copy3.select();           
	try {
	   var successful = document.execCommand("copy");
	   var msg = successful ? "successful" : "unsuccessful";
	   console.log("Copying text command was " + msg);
	} catch (err) {
	   console.log("Oops, unable to copy");
   }
});


copyGENTBtn.addEventListener("click", function(event) {
	myUpdate()	//DOUBLE VERIFIED - NEEDS TO BE HERE!!
	
	var copyGENTemp = document.querySelector("#GENTemp");
	
	//JUST COPY WHATEVER'S IN THERE - TEMP WHILE WORKING ON ADDITIONAL LOGIC
	
	TheCopy(copyGENTemp);
	
});

function SendMail(){
	
	Tipe = (document.getElementById("NoteType").value)
	MA = (document.getElementById("MA").value)
	HUB = (document.getElementById("HubHub").value)
	NODE = (document.getElementById("RepNode").value)
	LH = (document.getElementById("RepLH").value)
	RepTech = (document.getElementById("RepTech").value)
	PWOTotal = (document.getElementById("PWOTotal").value)
	PWOTotalY6 = (document.getElementById("PWOTotalY6").value)
	PWOTotalY6Format = document.getElementById("PWOTotalY6Format").value
	PWOTotalFormat = document.getElementById("PWOTotalFormat").value
	
	let MTSDLArray = ["ERROR","DL-Field-Ops-Eng-ROC-NW-MTS-Escalation-T1","DL-Field-Ops-Eng-ROC-NW-MTS-Escalation-T2","DL-Field-Ops-Eng-ROC-NW-MTS-Escalation-T3","DL-Field-Ops-Eng-ROC-NW-MTS-Escalation-T4"]
	let PNWDLArray = ["ERROR","DL-Field-Ops-Eng-ROC-NW-PNW-Escalation-T1","DL-Field-Ops-Eng-ROC-NW-PNW-Escalation-T2","DL-Field-Ops-Eng-ROC-NW-PNW-Escalation-T3","DL-Field-Ops-Eng-ROC-NW-PNW-Escalation-T4"]
	let SNVDLArray = ["ERROR","DL-Field-Ops-Eng-ROC-NW-SNV-Escalation-T1","DL-Field-Ops-Eng-ROC-NW-SNV-Escalation-T2","DL-Field-Ops-Eng-ROC-NW-SNV-Escalation-T3","DL-Field-Ops-Eng-ROC-NW-SNV-Escalation-T4"]
	let UseArray = ["Select an MA","Select an MA","Select an MA","Select an MA"]

	switch(MA) {
		case "Mountain States":
			UseArray=MTSDLArray
		break;	
		case "Pacific Northwest":
			UseArray=PNWDLArray
		break;	
		case "Sierra Nevada":
			UseArray=SNVDLArray
		break;	
	}	

	
if(Tipe == "RepOut"){
	Details = document.getElementById("RepZVComments").value 
	tear = document.getElementById("NumRepsZV").value
	if(parseInt(tear.substring(4,5))>0) {
		Tier = (parseInt(tear.substring(4,5)))
		DL = (UseArray[Tier])
	}
//document.getElementById("RepeatNote").innerHTML = "Subject:\nRepeat Outage! Northwest > " + MA + " > " + Hub + " > " + Node + "\n\nBody:\n\t• Northwest > " + MA + " > " + Hub + " > " + Node + "\n\t• " + Tier + "\n\t• https://lighthouse.charter.com/#/order/" + LH + "\n\n" + Details + "\n\n[Paste Repeat Sign On Screenshots]\n\n[Paste Map/Device List of Impacted Area]"

	
	let mailTo = "";
	
	mailTo = "mailto:" + "DL-Field-Ops-Eng-ROC-NW-Mgmt@charter.com" + "?cc=" + DL + "; ROC-NW@charter.com"
	+ "&subject="+ encodeURIComponent(TierLV + " Repeat Outage! Northwest > " + MA + " > " + HUB + " > " + NODE) + "&body="+ encodeURIComponent("• Northwest > " + MA + " > " + HUB + " > " + NODE) + encodeURIComponent("\n• " + tear.substring(7,tear.length)) + encodeURIComponent("\n• https://lighthouse.charter.com/#/order/" + LH + "\r\r" + "\n\n") + encodeURIComponent("\n\n" + RepTech + " has been dispatched to investigate. " + Details + "\r\r" + "Orders in the last 10 days" + "\n" + "Outages: " + RepOutages + "\nY6's: " + RepY6 + "\nY7's: " + RepY7 + "\nZZ's: " + RepZZ + "\n\n[Paste Triage Screenshots Here]");

//CHECKS TO ALLOW EMAIL ONLY WHEN FILLED OUT
	if (DL != "" && DL != "Select an MA" && MA != "" && HUB != "" && NODE != "" && LH != "") {	
	
		document.location.href = mailTo;
	} else {
		alert("Please fill out the entire Repeat Outage Form!")
	}
	
}
else if(Tipe == "RepY6"){
Tier = (document.getElementById("NumRepsY6").value)
DL = (UseArray[Tier])
	ACCT = (document.getElementById("RepCustAcct").value)
	ADDY = (document.getElementById("RepCustAddy").value)
	PWOTotalY6Format = (document.getElementById("PWOTotalY6Format").value)

	let mailTo = "";
	
	mailTo = "mailto:" + "DL-Field-Ops-Eng-ROC-NW-Mgmt@charter.com" + "?bcc=" + DL + "; ROC-NW@charter.com"
	+ "&subject=" 
		+ encodeURIComponent("Repeat Y6 Created! Northwest > " + MA + " > " + HUB + " > " + NODE)
	+ "&body="
		+ encodeURIComponent("Repeat Y6 Created for " + ACCT + " @ " + ADDY + "\n\t• https://lighthouse.charter.com/#/order/" + LH + "\r\r" + "[Paste Previous WO Info Here]\n\n");

//CHECKS TO ALLOW EMAIL ONLY WHEN FILLED OUT
	if (DL != "" && DL != "Select an MA" && MA != "" && HUB != "" && NODE != "" && ACCT != "" && ADDY != "" && LH != "") {	
	
		document.location.href = mailTo;
	} else {
		alert("Please fill out the entire Repeat Y6 Form!")
	}
}


}

function PreLHWO () {
	var NUMOrders = document.getElementById("NUMOrders").value;
	var a01 = document.getElementById("a01").value;
	var b01 = document.getElementById("b01").value;
	var c01 = document.getElementById("c01").value;
	var d01 = document.getElementById("d01").value;
	var e01 = document.getElementById("e01").value;
	var f01 = document.getElementById("f01").value;
	
	var a02 = document.getElementById("a02").value;
	var b02 = document.getElementById("b02").value;
	var c02 = document.getElementById("c02").value;
	var d02 = document.getElementById("d02").value;
	var e02 = document.getElementById("e02").value;
	var f02 = document.getElementById("f02").value;
	
	var a03 = document.getElementById("a03").value;
	var b03 = document.getElementById("b03").value;
	var c03 = document.getElementById("c03").value;
	var d03 = document.getElementById("d03").value;
	var e03 = document.getElementById("e03").value;
	var f03 = document.getElementById("f03").value;
	
	var a04 = document.getElementById("a04").value;
	var b04 = document.getElementById("b04").value;
	var c04 = document.getElementById("c04").value;
	var d04 = document.getElementById("d04").value;
	var e04 = document.getElementById("e04").value;
	var f04 = document.getElementById("f04").value;
	
	var a05 = document.getElementById("a05").value;
	var b05 = document.getElementById("b05").value;
	var c05 = document.getElementById("c05").value;
	var d05 = document.getElementById("d05").value;
	var e05 = document.getElementById("e05").value;
	var f05 = document.getElementById("f05").value;
	
	var a06 = document.getElementById("a06").value;
	var b06 = document.getElementById("b06").value;
	var c06 = document.getElementById("c06").value;
	var d06 = document.getElementById("d06").value;
	var e06 = document.getElementById("e06").value;
	var f06 = document.getElementById("f06").value;

	var a07 = document.getElementById("a07").value;
	var b07 = document.getElementById("b07").value;
	var c07 = document.getElementById("c07").value;
	var d07 = document.getElementById("d07").value;
	var e07 = document.getElementById("e07").value;
	var f07 = document.getElementById("f07").value;

	var a08 = document.getElementById("a08").value;
	var b08 = document.getElementById("b08").value;
	var c08 = document.getElementById("c08").value;
	var d08 = document.getElementById("d08").value;
	var e08 = document.getElementById("e08").value;
	var f08 = document.getElementById("f08").value;

	var a09 = document.getElementById("a09").value;
	var b09 = document.getElementById("b09").value;
	var c09 = document.getElementById("c09").value;
	var d09 = document.getElementById("d09").value;
	var e09 = document.getElementById("e09").value;
	var f09 = document.getElementById("f09").value;

	var a10 = document.getElementById("a10").value;
	var b10 = document.getElementById("b10").value;
	var c10 = document.getElementById("c10").value;
	var d10 = document.getElementById("d10").value;
	var e10 = document.getElementById("e10").value;
	var f10 = document.getElementById("f10").value;


	var OneY6 = 
		  "Previous Lighthouse Order #: " + a01 + "\r"
		+ "Previous WO Type: " + b01 + "\r"
		+ "Previous WO Resolution: " + c01 + "\r"
		+ "Previous WO was Resolved By: " + d01 + "\r"
		+ "Previous WO Resolution Comments: " + e01 + "\r"
		+ "Previous Y6 WO Referral Reason: " + f01 + "\r";

	var TwoY6 = 
		  "Previous Lighthouse Order #: " + a02 + "\r"
		+ "Previous WO Type: " + b02 + "\r"
		+ "Previous WO Resolution: " + c02 + "\r"
		+ "Previous WO was Resolved By: " + d02 + "\r"
		+ "Previous WO Resolution Comments: " + e02 + "\r"
		+ "Previous Y6 WO Referral Reason: " + f02 + "\r";

	var ThreeY6 = 
		  "Previous Lighthouse Order #: " + a03 + "\r"
		+ "Previous WO Type: " + b03 + "\r"
		+ "Previous WO Resolution: " + c03 + "\r"
		+ "Previous WO was Resolved By: " + d03 + "\r"
		+ "Previous WO Resolution Comments: " + e03 + "\r"
		+ "Previous Y6 WO Referral Reason: " + f03 + "\r";

	var FourY6 = 
		  "Previous Lighthouse Order #: " + a04 + "\r"
		+ "Previous WO Type: " + b04 + "\r"
		+ "Previous WO Resolution: " + c04 + "\r"
		+ "Previous WO was Resolved By: " + d04 + "\r"
		+ "Previous WO Resolution Comments: " + e04 + "\r"
		+ "Previous Y6 WO Referral Reason: " + f04 + "\r";

	var FiveY6 = 
		  "Previous Lighthouse Order #: " + a05 + "\r"
		+ "Previous WO Type: " + b05 + "\r"
		+ "Previous WO Resolution: " + c05 + "\r"
		+ "Previous WO was Resolved By: " + d05 + "\r"
	  	+ "Previous WO Resolution Comments: " + e05 + "\r"
	  	+ "Previous Y6 WO Referral Reason: " + f05 + "\r";

	var SixY6 = 
		  "Previous Lighthouse Order #: " + a06 + "\r"
		+ "Previous WO Type: " + b06 + "\r"
		+ "Previous WO Resolution: " + c06 + "\r"
		+ "Previous WO was Resolved By: " + d06 + "\r"
		+ "Previous WO Resolution Comments: " + e06 + "\r"
		+ "Previous Y6 WO Referral Reason: " + f06 + "\r";

	var SevenY6 = 
		  "Previous Lighthouse Order #: " + a07 + "\r"
		+ "Previous WO Type: " + b07 + "\r"
		+ "Previous WO Resolution: " + c07 + "\r"
		+ "Previous WO was Resolved By: " + d07 + "\r"
		+ "Previous WO Resolution Comments: " + e07 + "\r"
		+ "Previous Y6 WO Referral Reason: " + f07 + "\r";

	var EightY6 = 
		  "Previous Lighthouse Order #: " + a08 + "\r"
	  	+ "Previous WO Type: " + b08 + "\r"
	  	+ "Previous WO Resolution: " + c08 + "\r"
	  	+ "Previous WO was Resolved By: " + d08 + "\r"
	  	+ "Previous WO Resolution Comments: " + e08 + "\r"
	  	+ "Previous Y6 WO Referral Reason: " + f08 + "\r";

	var NineY6 = 
		  "Previous Lighthouse Order #: " + a09 + "\r"
		+ "Previous WO Type: " + b09 + "\r"
		+ "Previous WO Resolution: " + c09 + "\r"
		+ "Previous WO was Resolved By: " + d09 + "\r"
		+ "Previous WO Resolution Comments: " + e09 + "\r"
		+ "Previous Y6 WO Referral Reason: " + f09 + "\r";

	var TenY6 = 
		  "Previous Lighthouse Order #: " + a10 + "\r"
		+ "Previous WO Type: " + b10 + "\r"
		+ "Previous WO Resolution: " + c10 + "\r"
		+ "Previous WO was Resolved By: " + d10 + "\r"
		+ "Previous WO Resolution Comments: " + e10 + "\r"
		+ "Previous Y6 WO Referral Reason: " + f10 + "\r";

// Outages
	/* var OneOut = 
		  "Previous Lighthouse Order #: " + a01 + "\r"
		+ "Previous WO Type: " + b01 + "\r"
		+ "Previous WO Resolution: " + c01 + "\r"
		+ "Previous WO was Resolved By: " + d01 + "\r"
		+ "Previous WO Resolution Comments: " + e01 + "\r"
	
	var TwoOut = 
		  "Previous Lighthouse Order #: " + a02 + "\r"
		+ "Previous WO Type: " + b02 + "\r"
		+ "Previous WO Resolution: " + c02 + "\r"
		+ "Previous WO was Resolved By: " + d02 + "\r"
		+ "Previous WO Resolution Comments: " + e02 + "\r"

	var ThreeOut = 
		  "Previous Lighthouse Order #: " + a03 + "\r"
		+ "Previous WO Type: " + b03 + "\r"
		+ "Previous WO Resolution: " + c03 + "\r"
		+ "Previous WO was Resolved By: " + d03 + "\r"
		+ "Previous WO Resolution Comments: " + e03 + "\r"

	  var FourOut = 
		  "Previous Lighthouse Order #: " + a04 + "\r"
		+ "Previous WO Type: " + b04 + "\r"
		+ "Previous WO Resolution: " + c04 + "\r"
		+ "Previous WO was Resolved By: " + d04 + "\r"
		+ "Previous WO Resolution Comments: " + e04 + "\r"

	var FiveOut = 
		  "Previous Lighthouse Order #: " + a05 + "\r"
		+ "Previous WO Type: " + b05 + "\r"
		+ "Previous WO Resolution: " + c05 + "\r"
		+ "Previous WO was Resolved By: " + d05 + "\r"
	  	+ "Previous WO Resolution Comments: " + e05 + "\r"

	var SixOut = 
		  "Previous Lighthouse Order #: " + a06 + "\r"
		+ "Previous WO Type: " + b06 + "\r"
		+ "Previous WO Resolution: " + c06 + "\r"
		+ "Previous WO was Resolved By: " + d06 + "\r"
		+ "Previous WO Resolution Comments: " + e06 + "\r"

	var SevenOut = 
		  "Previous Lighthouse Order #: " + a07 + "\r"
		+ "Previous WO Type: " + b07 + "\r"
		+ "Previous WO Resolution: " + c07 + "\r"
		+ "Previous WO was Resolved By: " + d07 + "\r"
		+ "Previous WO Resolution Comments: " + e07 + "\r"

	var EightOut = 
		  "Previous Lighthouse Order #: " + a08 + "\r"
	  	+ "Previous WO Type: " + b08 + "\r"
	  	+ "Previous WO Resolution: " + c08 + "\r"
	  	+ "Previous WO was Resolved By: " + d08 + "\r"
	  	+ "Previous WO Resolution Comments: " + e08 + "\r"

	var NineOut = 
		  "Previous Lighthouse Order #: " + a09 + "\r"
		+ "Previous WO Type: " + b09 + "\r"
		+ "Previous WO Resolution: " + c09 + "\r"
		+ "Previous WO was Resolved By: " + d09 + "\r"
		+ "Previous WO Resolution Comments: " + e09 + "\r"

	var TenOut = 
		  "Previous Lighthouse Order #: " + a10 + "\r"
		+ "Previous WO Type: " + b10 + "\r"
		+ "Previous WO Resolution: " + c10 + "\r"
		+ "Previous WO was Resolved By: " + d10 + "\r"
		+ "Previous WO Resolution Comments: " + e10 + "\r" */

if (NoteType = "RepY6") {
	if (NUMOrders == "1"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalY6Format").innerHTML = OneY6
	}
	if (NUMOrders == "2"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalY6Format").innerHTML = OneY6 + "\r" + TwoY6
	}
	if (NUMOrders == "3"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalY6Format").innerHTML = OneY6 + "\r" + TwoY6 + "\r" + ThreeY6
	}
	if (NUMOrders == "4"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalY6Format").innerHTML = OneY6 + "\r" + TwoY6 + "\r" + ThreeY6 + "\r" + FourY6
	}
	if (NUMOrders == "5"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalY6Format").innerHTML = OneY6 + "\r" + TwoY6 + "\r" + ThreeY6 + "\r" + FourY6 + "\r" + FiveY6
	}
	if (NUMOrders == "6"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalY6Format").innerHTML = OneY6 + "\r" + TwoY6 + "\r" + ThreeY6 + "\r" + FourY6 + "\r" + FiveY6 + "\r" + SixY6
	}
	if (NUMOrders == "7"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalY6Format").innerHTML = OneY6 + "\r" + TwoY6 + "\r" + ThreeY6 + "\r" + FourY6 + "\r" + FiveY6 + "\r" + SixY6 + "\r" + SevenY6
	}
	if (NUMOrders == "8"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalY6Format").innerHTML = OneY6 + "\r" + TwoY6 + "\r" + ThreeY6 + "\r" + FourY6 + "\r" + FiveY6 + "\r" + SixY6 + "\r" + SevenY6  + "\r" + EightY6
	}
	if (NUMOrders == "9"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalY6Format").innerHTML = OneY6 + "\r" + TwoY6 + "\r" + ThreeY6 + "\r" + FourY6 + "\r" + FiveY6 + "\r" + SixY6 + "\r" + SevenY6  + "\r" + EightY6  + "\r" + NineY6
	}
	if (NUMOrders == "10"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.remove("displayNone");
		document.getElementById("PWOTotalY6Format").innerHTML = OneY6 + "\r" + TwoY6 + "\r" + ThreeY6 + "\r" + FourY6 + "\r" + FiveY6 + "\r" + SixY6 + "\r" + SevenY6  + "\r" + EightY6  + "\r" + NineY6  + "\r" + TenY6
	}
	
	
}
/* if (NoteType = "RepOut") {
	if (NUMOrders == "1"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalFormat").innerHTML = OneY6
	}
	if (NUMOrders == "2"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalFormat").innerHTML = OneOut + "\r" + TwoY6
	}
	if (NUMOrders == "3"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalFormat").innerHTML = OneOut + "\r" + TwoOut + "\r" + ThreeOut
	}
	if (NUMOrders == "4"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalFormat").innerHTML = OneOut + "\r" + TwoOut + "\r" + ThreeOut + "\r" + FourOut
	}
	if (NUMOrders == "5"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalFormat").innerHTML = OneOut + "\r" + TwoOut + "\r" + ThreeOut + "\r" + FourOut + "\r" + FiveOut
	}
	if (NUMOrders == "6"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalFormat").innerHTML = OneOut + "\r" + TwoOut + "\r" + ThreeOut + "\r" + FourOut + "\r" + FiveOut + "\r" + SixOut
	}
	if (NUMOrders == "7"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalFormat").innerHTML = OneOut + "\r" + TwoOut + "\r" + ThreeOut + "\r" + FourOut + "\r" + FiveOut + "\r" + SixOut + "\r" + SevenOut
	}
	if (NUMOrders == "8"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalFormat").innerHTML = OneOut + "\r" + TwoOut + "\r" + ThreeOut + "\r" + FourOut + "\r" + FiveOut + "\r" + SixOut + "\r" + SevenOut  + "\r" + EightOut
	}
	if (NUMOrders == "9"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.add("displayNone");
		document.getElementById("PWOTotalFormat").innerHTML = OneOut + "\r" + TwoOut + "\r" + ThreeOut + "\r" + FourOut + "\r" + FiveOut + "\r" + SixOut + "\r" + SevenOut  + "\r" + EightOut  + "\r" + NineOut
	}
	if (NUMOrders == "10"){
		for (let el of document.querySelectorAll('.OneOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TwoOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ThreeOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FourOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.FiveOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SixOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SevenOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.EightOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NineOrder')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.TenOrder')) el.classList.remove("displayNone");
		document.getElementById("PWOTotalFormat").innerHTML = OneOut + "\r" + TwoOut + "\r" + ThreeOut + "\r" + FourOut + "\r" + FiveOut + "\r" + SixOut + "\r" + SevenOut  + "\r" + EightOut  + "\r" + NineOut  + "\r" + TenOut
	}
} */
}




$(function () {

    $("#btnAdd").bind("click", function () {
        var div = $("<div />");
        div.html(GetDynamicTextBox(""));
        $("#AddBox").append(div);
    });
	$("#btnAdd").bind("click", function () {
        var div = $("<div />");
        div.html(GetDynamicTextBox(""));
        $("#MACBox").append(div);
    });
	


    $("body").on("click", ".remove", function () {
        $(this).closest("div").remove();
    });
});

function GetDynamicTextBox(value) {
    return '<div class="cell"><input name = "DynamicTextBox" type="text" value = "' + value + '" />&nbsp;'
}


function QMTAAddressandMAC () {
	var values = "";
        $("input[name=DynamicTextBox]").each(function () {
            values += $(this).val() + "\n";
        });
	var QMTAMAC = "\r\rQMTA\r" + values;
	document.getElementById("AddRESS").innerHTML= QMTAMAC;
}

function HideBC(){
	if (document.getElementById("NoteType").value == "Initial"){
		for (let el of document.querySelectorAll('.BCBC')) el.classList.remove("displayNone");
	}else {
		for (let el of document.querySelectorAll('.BCBC')) el.classList.add("displayNone");
	}
}
function myUpdate() {
	//Basics - do this no matter what
NodeCount(); //needed for getting node name for PS 
	var a =""

	if (document.getElementById("IQ1").value != "") {
		var a = document.getElementById("IQ1").value; // Tech Name
	}

	//Initial Notification
	var q = ""
	var b =  document.getElementById("IQ3").value; // Single/Multi
	var c =  document.getElementById("IQ4").value; // Power Supply Status
	var d =  document.getElementById("IQ2").value; // ETA
	var e =  document.getElementById("IQ3a").value; // Multi: Dual Dispatch Engaged?
	var f =  document.getElementById("IQ3b").value; // Multi: LBI Impacted?
	var g =  document.getElementById("IQ3bi").value; // Multi: LBI Impacted?
	var h =  document.getElementById("IQ4a").value; // PS Stand-by: Power Co ETR
	var hb = document.getElementById("IQ4b").checked; // PS Stand-by: Power Co ETR Unknown
	var hc = document.getElementById("IQ4c").checked; // PS Stand-by: PS Standby for all nodes
	var i =  document.getElementById("IQ5").checked; // QMTA? Checkbox
	var ib =  document.getElementById("IQ5b").checked; // ALL Nodes multi QMTA
	var k =  document.getElementById("IQ6b").checked; // Repeat CBT?
	
	var z =  document.getElementById("UQ1").value; // Tech On Site
	var y =  document.getElementById("UQ1a").value; // Onsite Time (DateTime-Local)
	var x =  document.getElementById("UQ1b").value; // Is there an access issue?
	var w =  document.getElementById("UQ1bi").value; // Access issue Yes: Access ETA (minutes)
	var v =  document.getElementById("UQ1bii").value; // Access Issue Yes: Who's preventing access?
	var u =  document.getElementById("UQ1c").value; // Access Issue NO: ETA to get onsite?
	var t =  document.getElementById("UQ2").value; // Plant Type?
	var s =  document.getElementById("UQ2a").value; // Sub Type
	var r =  document.getElementById("UQ3").value; // Outage Type
	var q =  document.getElementById("UQ4").value; // Outage Cause?
	var p =  document.getElementById("UQ4a").value; // -CPO Name
	var o =  document.getElementById("UQ4b").value; // -CPO On Site
	var n =	 document.getElementById("UQ4c").value; // -CPO ETR
	var nb = document.getElementById("UQ4ci").checked; // -CPO ETR Unknown
	var m =  document.getElementById("UQ4d").value; // -CPO Verification Address
	var l =  document.getElementById("UQ5").value; // ETR? Minutes 
	var GvtAffairs = document.getElementById("GAA").checked //is GA Checked?
	var GATotalPS = document.getElementById("TotalPS").value; //Total number of ps affected for GA notes 
	var GAimpact = document.getElementById("GANum").value //GA: Number of GA's impacted
	var GAMsg = ""
	var preAccess = document.getElementById("preAccess").value; // Why is x preventing access
	var PSCheckbox = document.getElementById("PSCheckbox").checked; // is there less than 60 min remaining in the ps 
	var GENSerial = document.getElementById("GENSerial").value;
	var GENPOC = document.getElementById("GENPOC").value;
	var GENNodes = document.getElementById("GENNodes").value;
	var GENINC = document.getElementById("GENINC").value;	
	var GENAddy = document.getElementById("GENAddy").value;
	var GENRefuel = document.getElementById("GENRefuel").value
	var rt = "";
	var Mon = document.getElementById("Mon").value;
	var CPOT = document.getElementById("CPOT").value;
	var OR = document.getElementById("OR").value;
	var PSFR = document.getElementById("PSFR").value;// PS Fault Reason 
	var BOTOTBox = document.getElementById("BOTOTBox").checked;
	var hourly = document.getElementById("hourly").checked;
	let REPEATCheck = document.getElementById("REPEATCheck").checked;
	/* var PendTech = document.getElementById("PendTech").checked; */


	if (REPEATCheck == true) {
		for (let el of document.querySelectorAll('.REPeat')) el.classList.remove("displayNone");
	}else if (REPEATCheck == false) {
		for (let el of document.querySelectorAll('.REPeat')) el.classList.add("displayNone");
	}


	if (GATotalPS>1) { 
	if(GvtAffairs == true) {	
		if(GAimpact>1){
			var GAMsg = "There are " + GATotalPS + " power supplies affected in total, of those " + GAimpact + " are impacting critical facilities."
		} else if(GAimpact==1){
			var GAMsg = "There are " + GATotalPS + " power supplies affected in total, of those " + GAimpact + " power supply that has critical facilities is impacted."
		}
	} else if(GvtAffairs == false) {	
		var GAMsg = ""
	}
	}
	if (GATotalPS == 1){
		if(GvtAffairs == true) {	
			if(GAimpact==1){
				var GAMsg = "There is " + GATotalPS + " power supply affected that is impacting critical facilities."
			} else if(GAimpact!=1){
				var GAMsg = "There is " + GATotalPS + " power supply affected and critical facilities are not affected."
			}
		} else if(GvtAffairs == false) {	
			var GAMsg = ""
		}
	}
	
	if (s=="") s = ".";

	if (document.getElementById("NoteType").value == "Initial" || (document.getElementById("NoteType").value == "IRIS" && document.getElementById("AN").value == "Yes") || (document.getElementById("NoteType").value == "IRIS" && document.getElementById("USDSA").value == "Yes") ||(document.getElementById("NoteType").value == "IRIS" && document.getElementById("common").value == "Yes")) {
		
		zz = " Power company ETR is " + FormatTime(h,"Future") + " MT."
		if (hb == true) {
			zz = " Power company ETR is unknown.";
		}

		//If Stuffs
		//LBI Statement:
		if (b == "multiple" && e == "Yes" && f == "Yes") {
			var f = " " + g + " LBI customers are impacted.";
			
			if (g == 1){
				var f = " 1 LBI customer is impacted.";
			}
			
			if (g == 0){
				var f = " No LBI customers are impacted.";
			}
			
		}	else if ((b == "multiple" && e=="Yes" && (f == "No"||f == ""))) {
			var f = " No LBI customers are impacted.";
		} else if (b=="single" || (b=="multiple"&&e=="No")) {
			//f = " There is no known LBI impact."
			f = " We are not aware of any LBI impact at this time."
		}


		if (k == true){
				b = "repeat CBT " + b;
		}

		if (b == "multiple" && e == "Yes") {
			var e = " Dual dispatch to ISP has been initiated.";
		} else {
			var e = "";
		}



		var techDeets =""
		var techETA = ""

		if (document.getElementById("IQ1-VM").checked == false){
			
			//var techDeets ="Maintenance technician " + a + " is en route to a " 
			var techDeets =a + " is en route to a " 			
			var techETA = "Their ETA to the area is " + FormatTime(d) + " MT." 		
			if( d < 2){
				//alert("really?")
				var techETA = "Their ETA to the area is " + FormatTime(d) + " MT." 		
			}
			
			if(document.getElementById("IQ2a").checked == true) {
				var techETA = " Their ETA to the area is unknown."
			}
			
		} else if (document.getElementById("IQ1-VM").checked == true){
			
			//var techDeets ="A voicemail has been left for maintenance technician " + a + " to respond to a " 
			var techDeets ="A voicemail has been left for " + a + " to respond to a " 
			var techETA = " The ROC will attempt dispatch again in 15 minutes."
		}

		pc = " " + OrderNum + " Power supply status "
		if (c == "is in stand-by" && b == "multiple") {
		pc = " At least one power supply "
		}
		if (document.getElementById("IQ4").value == "is in stand-by"){
			rt = " There is at least 60 min remaining of runtime. "
		}else {
			rt = ""
		}
		if (document.getElementById("NoteType").value == "IRIS") {
			var InitDesc = techDeets + "an IRIS event. " + e + f + pc + c + ". " + rt + GAMsg + techETA
		}
		if (document.getElementById("BOTOTBox").checked == true){ 
			var InitDesc = a + " is on site at a MT in node outage. " + e + f + pc + c + ". " + rt + GAMsg
		}
		if (document.getElementById("REPEATCheck").checked == true){
			var InitDesc = techDeets + b + " node outage. This is " + REPeatType + "." + e + f + pc + c + ". " + rt + GAMsg + techETA
		}else {
		var InitDesc = techDeets + b + " node outage." + e + f + pc + c + ". " + rt + GAMsg + techETA 
		}

		/* if (document.getElementById("PendTech").checked == true) {

			InitDesc = "This outage is pending tech availability. All techs are on outages. The ROC will attempt to dispatch again in 30 minutes. "
		} */





		//Commercial Power Outage: PS in Standby and/or QMTA Identified

		if (b == "single" && (i==true || c=="is in stand-by")) {

		var stat = "This alarm is due to a commercial power outage. "
		if(i==true) { 
		var stat = stat + "A QMTA on battery backup has been identified in this node. "
		}
		var stat = stat + OrderNum + " Power supply status " + c + "." + rt
	
		InitDesc = stat + GAMsg + zz	
	
	} else if (b == "multiple" && (i==true || c=="is in stand-by")) {
	
		//Okay I have Multiple Nodes...
		//and QMTA and/or PS is in standby

		//addresses non-dispatch comm power outage
		//ib = PS in standby for all nodes
		//hc = qmta found for all nodes


		if (ib == true || hc == true) {
		var stat = "Commercial power outage. "
		if (ib == true) {
			var stat = stat + "QMTAs have been identified as on battery backup for each node. "
		} else if (ib == false && i==true) {
			var stat = stat + "A QMTA has been identified in at least one node. "
		}
		if (i == true) {
			InitDesc = stat + GAMsg + zz 
		}
		
		if (hc == true) {
			var stat = stat + "Power supply status for each node is in stand-by. "
		}
		if ((document.getElementById("IQ4").value == "is in stand-by") && (document.getElementById("IQ4c").checked == true)){
			InitDesc= stat + GAMsg + zz
		}

		}

		} else if (b == "" && (i==true || c=="is in stand-by")) {
		InitDesc = "Select Single/Multi Node";
		}
		
		if (document.getElementById("IQ6a").checked == true) {
		//InitDesc = "This outage has cleared before testing. Impacted devices are back online and alarm has cleared."
		//InitDesc = "This outage has cleared before technician engagement. Impacted devices are back online and alarm has cleared."
		InitDesc = "This outage has cleared before testing. Impacted devices are back online and alarm has cleared."
		}

		if (document.getElementById("PSCheckbox").checked == true) {
			InitDesc = techDeets + b + " node outage." + e + f + pc + c + ". However, it has a runtime of less than 60 min." + GAMsg + techETA
		} 

		if (document.getElementById("PSLessThanStandby").checked == true) {
			InitDesc = techDeets + b + " node outage." + e + f + pc + c + ". However, it has a runtime of less than 64-72 hours." + GAMsg + techETA
		} 

		
		
		//document.getElementById("Desc").innerHTML = InitDesc + "\n\n" + document.getElementById("Ping").value;
		document.getElementById("Desc").innerHTML = InitDesc

		
	
	
	} else if (document.getElementById("NoteType").value == "Update Before" || document.getElementById("NoteType").value == "Update After" ) {

		//UD1 = "Maintenance tech " + a;
//		UD1 = a + " ";
		UD1 = a;
		UD2 = " Onsite Info/ETR";
		UD3 = "Plant Type / Outage Type / Sub Type Info";
		UD4 = "Cause Info";
		UD5 = "ETR Info";
		
		UA0 = document.getElementById("UA0").checked //Outage Resolved (True/False)
		UA1 = document.getElementById("UA1").value //Tech Update: What did the technicia do?
		UA2 = document.getElementById("UA2").value //Tech Update: where was the work done?
		UA3 = document.getElementById("UA3").value //Tech Update: Next Steps?
		UA3 = " and will continue to " + UA3 + ". "
		UA4 = document.getElementById("UA4").value //Resolution Time
		var iswas = "is "

		DD2 = document.getElementById("DualCheck").checked
		LBI2 = document.getElementById("ElBeeEye").checked
		HOWM2 = document.getElementById("HowMany2").value
		var EBTimeStamp = "";

		var CPOT = document.getElementById("CPOT").value;

		 // add time stamp to begining of notification in ebmode
			const d = new Date();
			let dait = d.toLocaleDateString();
			TStamp = dait + " " + FormatTime(new Date())
			
			if (EBMode == true){
				EBTimeStamp = TStamp + " MT - " 
				if (document.getElementById("CPO1").value == "Restored" || document.getElementById("GEN1").value == "PickupComplete" || document.getElementById("PS1").value == "OnRest" || document.getElementById("QMTA1").value == "Online" || UA0 == true){
					UpdateChange = ""
				} else if (hourly == true){
					UpdateChange = " The ROC will send another update in one hour."
				} else {
					UpdateChange = " The ROC will send another update when there has been significant change or we are closing."
				}
			} else {
				EBTimeStamp = ""
				UpdateChange = ""
			}
		
		
		if (UA0 == true && (q != "cleared before testing" && q != "cleared while testing")) {

		UA3 = ". "
		iswas = "was "
		} else if (UA0 == true && (q == "cleared before testing" || q == "cleared while testing")) { 

		UA3 = ". ";
		iswas = "has "
		}
	

		if (z != "" && document.getElementById("NoteType").value == "Update Before"){
			if (z == "Yes" && document.getElementById("NoteType").value == "Update Before"){
				UD2 = " has arrived as of " + FormatTime(y,"Past") + " MT. " ;
			} else if (document.getElementById("NoteType").value == "Update After"){
				UD2 = " is working on this ";
			} else if (z == "No"){
				if (x == "No") {
					if(document.getElementById("CBTB4").checked == true) {
						UD2 = " has not arrived on site and will disengage as the outage has cleared before testing."
					} else if(document.getElementById("CBTB4").checked == false) {
						UD2 = " has not arrived on site and is expected to arrive at approximately " + FormatTime(u) + " MT. ";
						if (document.getElementById("UNETA").checked == true) {
							UD2 =  " has not arrived on site and ETA is unknown."
						}
					}
					
					
				} else if (x == "Yes") {
					UD2 = " has arrived, however, " + v + " is preventing them from getting to the site. Access ETA is " + FormatTime(w) + " MT. "
					UD5 = ". "
					if (document.getElementById("UNAccess").checked == true) {
						UD2 = " has arrived, however, " + v + " is preventing them from getting to the site. Access ETA is unknown."
					}
				}
			}
		}


		if ( r == "coaxial and fiber lines " && q != "due to commercial power") {
			t = "both " + t;
		} 

		UD3 = "This outage " + iswas + "impacting " + t + r + s

		if (document.getElementById("UQ5a").checked==false) {

			UD5 = ". Estimated time of repair is " + FormatTime(l) + " MT. ";
			if (document.getElementById("UA0").checked == true) {


		if (UA0 == true && (q != "cleared before testing" && q != "cleared while testing")) {

				var permtemp="";
				if (document.getElementById("UA5").checked == true) permtemp="permanent";
				if (document.getElementById("UA6").checked == true) permtemp="temporary";

			var RezTime = FormatTime(document.getElementById("UA4").value) 
								
				UD5 = ". " + a + " has resolved this outage with a " + permtemp + " fix at " + RezTime + " MT.";
		} else if (UA0 == true && (q == "cleared before testing" || q == "cleared while testing")) { 
		UD5 = " and is resolved. ";
		}

				
			}
			
		} else if (document.getElementById("UQ5a").checked==true) {

			if(x == "Yes"){

					UD5 = ". ";
			} else if (document.getElementById("UA0").checked == true) {
				var permtemp="";
				if (document.getElementById("UA5").checked == true) permtemp="permanent";
				if (document.getElementById("UA6").checked == true) permtemp="temporary";

			var RezTime = FormatTime(document.getElementById("UA4").value) 
								
				UD5 = ". " + a + " has resolved this outage with a " + permtemp + " fix at " + RezTime + " MT.";
				
			} else {

				UD5 = ". Estimated time of repair is unknown. ";
			}
		}

		UD4 = " The outage " + iswas + q;
		if (q == "being investigated") {
			UD4 = " The root cause of the outage is unknown at this time";
		}


// Dual dispatch Mod:

if(DD2 == true) {
	DualDisp="Dual dispatch to ISP has been initiated. "
	if(LBI2 == true){
		if(HOWM2 > 1) {
			DualDisp = DualDisp + HOWM2 + " LBI customers are impacted. "
		} else if(HOWM2 == 1) {
			DualDisp = DualDisp + HOWM2 + " LBI customer is impacted. "
		} else if(HOWM2 < 1) {
			DualDisp = DualDisp + "No LBI customers are impacted. "
		}
	} else if(LBI2 == false){
		DualDisp = DualDisp + "No LBI customers are impacted. "
	}
} else { 
	DualDisp = ""
}





		//Voicemail modifications
		
		if (document.getElementById("IQ1-VM").checked == true) {

			UpdateDesc = "A voicemail was left for " + UD1 + ". The ROC will attempt to get an update again in 15 minutes. "
		} else if (document.getElementById("IQ1-VM").checked == false) {


			if (document.getElementById("NoteType").value == "Update Before"){

				if (z == "Yes"){
					if (q == "cleared before testing" || q == "cleared while testing"){
					UpdateDesc = UD1 + UD2 + DualDisp + "They have " + UA1 + " at " + UA2 + UD4 + UD5
					} else {
					UpdateDesc = UD1 + UD2 + DualDisp + "They have " + UA1 + " at " + UA2 + UA3 + UD3 + UD4 + UD5
					//OLD moved to z == ""
				}} else if (z == "") {
					UpdateDesc = UD1 + UD2 + UD3 + UD4 + UD5;
				} else if (z == "No") {
					UpdateDesc = UD1 + UD2;
				} 
				
			} else if (document.getElementById("NoteType").value == "Update After"){
				UD1 = UD1 + OR
				UpdateDesc = UD1 + DualDisp + "They have " + UA1 + " at " + UA2 + UA3 + UD4 + UD5
				
			}
		}

		

		//Commercial power: Start
		
		if(q == "due to commercial power" || q == "due to a power issue at the location" || q == "due to a power supply fault"){

			if (nb == true) {
				var pcoetr = "unknown. "

			} else if (nb == false) {

				var pcotr = FormatTime(n)
				var pcoetr = pcotr + " MT. "

			}

		if (s!=".") {  //was "plant" for n/a
			r = r + s;
			
		}	
		
		if(document.getElementById("UA0").checked == true) {
			rez = "Power has been restored and the outage was resolved at " + FormatTime(UA4) + " MT. "
			rezetr = ""
		} else if(document.getElementById("UA0").checked == false) {
			rez = "The ROC will continue to monitor the outage. "
			rezetr = "ETR is " + pcoetr
		}

	var ReVB = document.getElementById("GENAddy").value;

//ONLY Applies to end of statement IF a generator WAS deployed		
			genstatus = "Plant is unaffected which has been verified at " + m + ". "
		if (document.getElementById("UQ4e").value == "Yes") {
			genstatus = "Plant is no longer affected as a generator has been placed at " + ReVB + ". "
			//etr is x... 
			rez = "The generator will need to be refueled at " + FormatTime(document.getElementById("GENRefuel").value) + " MT. " + rez
			
		} else if (document.getElementById("UQ4e").value == "YesTI") {
			genstatus = "Plant is no longer affected as a the power supply is running on a truck inverter. "
			rez = rez
		} else if (document.getElementById("UQ4e").value == "No") {
			genstatus = ""
			rez = "A generator is not available to power the node at this time. " + rez
		} else if (document.getElementById("UQ4e").value == "NA") {
			if (document.getElementById("UQ4").value == "due to a power supply fault"){
				genstatus = ""
			}else{
			genstatus = "Plant is unaffected which has been verified at " + m + ". "
		} }
		//get GENERATOR ADDRESS?
		if(CPOT == "6 Hour Re-Verification due at " || CPOT == "Power company website ETR is " || CPOT == "The ETR is provided by the technician is at ") {
			UpdateDesc ="They have verified that this issue is caused by a commercial power outage. Power company " + p + " is " + o + " site. " + genstatus + CPOT + pcoetr + rez
		}else if (CPOT != "6 Hour Re-Verification due at " || CPOT != "Power company website ETR is " || CPOT != "The ETR is provided by the technician is at ") {
	
			UpdateDesc = "They have verified that this issue is caused by a commercial power outage. Power company " + p + " is " + o + " site. " + genstatus + rezetr + rez
		}
				

			if(document.getElementById("UQ4").value == "due to a power issue at the location") {
			
				UpdateDesc = "They have verified that this issue is due to a power issue at the location. Plant verified as unaffected at " + m + "." + rezetr + rez
			} else if (document.getElementById("UQ4").value == "due to a power supply fault"){
				UpdateDesc = "They have verified that this issue is due to a power supply fault. The power supply " + PSFR + ". " + genstatus + rez
			}

			if(document.getElementById("NoteType").value == "Update Before") {
			UpdateDesc = (UD1+UD2+UpdateDesc)
			//UpdateDesc = (UD1+UD2+UD3+UpdateDesc)
			} else if (document.getElementById("NoteType").value == "Update After") {
						UpdateDesc = UD1 + UpdateDesc;
			} 

	
		}
		//Commercial power: End

			document.getElementById("Desc").innerHTML = EBTimeStamp + UpdateDesc + GAMsg + UpdateChange
		
		
			
		

		
		
		
		
		
	}else if (document.getElementById("NoteType").value == "CBT") {
		
		//document.getElementById("Desc").innerHTML = "This outage has cleared before technician engagement. Impacted devices are back online and alarm has cleared."
		document.getElementById("Desc").innerHTML = "This outage has cleared before testing. Impacted devices are back online and alarm has cleared."  + GAMsg
	} else if (document.getElementById("NoteType").value == "EBTechNot" || (document.getElementById("NoteType").value == "Update After" && EBMode == true ))  {
		if (document.getElementById("UQ1b").value == "Yes"){
			const d = new Date();
			let dait = d.toLocaleDateString();
			TStamp = dait + " " + FormatTime(new Date())
			EBDesc = TStamp + " MT - " + a + " has arrived, however, " + v + " is preventing them from getting to the site due to " + preAccess + ". Access ETA is " + FormatTime(w) + " MT. " + GAMsg
			document.getElementById("Desc").innerHTML = EBDesc
		} else if (document.getElementById("UQ1b").value == "No") {
			const d = new Date();
			let dait = d.toLocaleDateString();
			TStamp = dait + " " + FormatTime(new Date())
			EBDesc = TStamp + " MT - " + a + " is enroute. ETA is " + FormatTime(w) + " MT. " + GAMsg
			document.getElementById("Desc").innerHTML = EBDesc
		}
	} 
if (document.getElementById("UQ4e").value == "Yes"){
	var GenInfoTemplate = "";
	GenInfoTemplate = 
	"Generator Serial Num - " + GENSerial + "\r"
	+ "Next Refuel Time - " + FormatTime(GENRefuel) + " MT" + "\r"
	+ "POC - " + GENPOC + "\r"
	+ "Currently Powering - " + GENNodes + "\r"
	+ "Generator Location - " + GENAddy + "\r"
	
	document.getElementById("GENTemp").innerHTML = GenInfoTemplate	
}
	if (document.getElementById("NoteType").value == "Monitoring") {
		for (let el of document.querySelectorAll('.Monitoring')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.mon')) el.classList.remove("displayNone");
		var Monitor = "";
		if (document.getElementById("Mon").value == "due to no access at the location") {
			Monitor ="We are monitoring this outage " + Mon + ". We will gain access at " + FormatTime(w) + " and the POC will be " + GENPOC
		} else if (document.getElementById("MonRes").checked == true) {
			Monitor = "HFC function confirmed, Alarm is clear closing ticket" 
		} else {
			Monitor = "We are monitoring this outage " + Mon + ". We will update this ticket as new information comes in or at 9:00 AM MNT tomorrow. "
		}
		document.getElementById("Desc").innerHTML = Monitor
	}

	if (document.getElementById("NoteType").value == "IRIS"){
		for (let el of document.querySelectorAll('.IRIS')) el.classList.remove("displayNone");
	}

}


function REPeatFun() {
REPeatType = document.getElementById("REPeatType").value;
	return REPeatType;
}

function timediff(){
	var startTime = new Date(document.getElementById("startTime").value);
	var now = new Date();
	var nowMill = now.getTime();
	var startTimeMill = startTime.getTime();
	var diff = nowMill - startTimeMill;
	var TiemSec= millisToMinutesAndSeconds(diff);
	var TiemSecMin = secondsToDhms(TiemSec);
	document.getElementById("TimeDifferance").innerHTML = TiemSecMin;
}

function millisToMinutesAndSeconds(millis) {
	var seconds = (millis / 1000).toFixed(0);
	return seconds;
  }

function secondsToDhms(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600*24));
	var h = Math.floor(seconds % (3600*24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	
	var dDisplay = d > 0 ? d + (d == 1 ? "d:" : "d:") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? "h:, " : "h:") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? "m: " : "m:") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
	}

function UnkNow(UnkBOX, ValU) {
	if(EBMode == true) {

	var ETRETA = "ETA!"
		if (UnkBOX == "UQ5a"){
			ETRETA = "ETR!"
		}
		
	document.getElementById(UnkBOX).checked = false
	if(ETRcount==0){
		alert("DO NOT SEND EVERBRIDGE WITHOUT " + ETRETA)
		ETRcount=1
		} 
		else if(ETRcount==1){
			alert("SERIOUSLY, DO NOT SEND EVERBRIDGE WITHOUT " + ETRETA)
			ETRcount=2
		} 
		else {
			alert("BRUH!! DO NOT SEND EVERBRIDGE WITHOUT " + ETRETA + " GO TALK TO SHANNON!!")
		}
	}
	else{
		if (document.getElementById(UnkBOX).checked==true){

			document.getElementById(ValU).disabled=true;
	
		} else if (document.getElementById(UnkBOX).checked==false){
	
			document.getElementById(ValU).disabled=false;
	
		}	
	}

	

myUpdate();
}


function HowMany(velu){
//check all , set to 0 if below 0

	if ((document.getElementById(velu).value < 1) && (document.getElementById(velu).value != "")) {
		document.getElementById(velu).value = "";
	}

	myUpdate();
}

function SingleMulti() {

	if (document.getElementById("IQ3").value == "single" || document.getElementById("IQ3").value == "") {
		for (let el of document.querySelectorAll('.MULTI')) el.classList.add("displayNone");	
		for (let el of document.querySelectorAll('.MULTI2')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.LBI')) el.classList.add("displayNone");
		CPOETR();
	} else if (document.getElementById("IQ3").value == "multiple") {
		for (let el of document.querySelectorAll('.MULTI')) el.classList.remove("displayNone");
		DualDisp();
		LBI();
		
		
	}

	myUpdate();
				if (document.getElementById("IQ3").value == "multiple" && document.getElementById("IQ5").checked == true){
			for (let el of document.querySelectorAll('.MULTIQMTA')) el.classList.remove("displayNone");
		} else if (document.getElementById("IQ3").value != "multiple" || document.getElementById("IQ5").checked == false){
			for (let el of document.querySelectorAll('.MULTIQMTA')) el.classList.add("displayNone");
				document.getElementById("IQ5b").checked = false //clear QMTA for all
		}
		
				if (document.getElementById("IQ3").value == "multiple" && document.getElementById("IQ4").value == "is in stand-by"){
			for (let el of document.querySelectorAll('.MULTIPS')) el.classList.remove("displayNone");
		} else if (document.getElementById("IQ3").value != "multiple" || document.getElementById("IQ4").value == "is in stand-by"){
			for (let el of document.querySelectorAll('.MULTIPS')) el.classList.add("displayNone");
				document.getElementById("IQ5b").checked = false //clear QMTA for all
		}
}

function InitUpdate() {

	//Initial Notification only - clear check when not Initial
	if (document.getElementById("NoteType").value == "Initial") {
		for (let el of document.querySelectorAll('.CBT1')) el.classList.remove("displayNone");
	} else if (document.getElementById("NoteType").value != "Initial") {
		document.getElementById("IQ6").checked = false;
		document.getElementById("IQ6b").checked = false;
		document.getElementById("IQ6a").checked = false;
		for (let el of document.querySelectorAll('.CBT1')) el.classList.add("displayNone");	
		for (let el of document.querySelectorAll('.CBT2')) el.classList.add("displayNone");		
	}


if (document.getElementById("NoteType").value == "Initial") {

	//QMTA Address and MAC
	if (document.getElementById("IQ5").checked == true){
		for (let el of document.querySelectorAll('.QMTAAddressMac')) el.classList.remove("displayNone");
	}
	
//	Clear Input Values for ALL Items
if (document.getElementById("IQ2").value == "1969-01-01T00:00") {
	document.getElementById("IQ2").value = currentTIME("Yes");
}
	

//	document.getElementById("IQ3").value = "";
//	document.getElementById("IQ3a").value = "";
//	document.getElementById("IQ3b").value = "";
//	document.getElementById("IQ3bi").value = "";
//	document.getElementById("IQ4").value = "";
//	document.getElementById("UQ5").value = currentTIME("Yes");
//	document.getElementById("UQ4c").value = currentTIME("Yes");

	//Final
	for (let el of document.querySelectorAll('.FINAL')) el.classList.add("displayNone"); 
	
	//Tech Name
	for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone"); //tech name

	//INIT vs UPDATE
	for (let el of document.querySelectorAll('.INIT')) el.classList.remove("displayNone"); //Default INIT Questions (IQ2 IQ3 IQ4)
	for (let el of document.querySelectorAll('.UPDATE')) el.classList.add("displayNone"); //Default UPDATE Questions (UQ2 UQ3 UQ4)

	//INIT Sub Menus
	for (let el of document.querySelectorAll('.ISUB')) el.classList.add("displayNone"); //ISUB Update Sub items

	//UPDATE Sub Menus
	for (let el of document.querySelectorAll('.USUB')) el.classList.add("displayNone"); //USUB Update Sub items

	//Hide After Defaults

	for (let el of document.querySelectorAll('.AFTER')) el.classList.add("displayNone"); 

	//Hide PSQMTA
	for (let el of document.querySelectorAll('.PSH')) el.classList.add("displayNone"); 
	

	myUpdate();

} else if (document.getElementById("NoteType").value == "Update Before") {

	//Final
	for (let el of document.querySelectorAll('.FINAL')) el.classList.add("displayNone"); 
	
	//Tech Name
	for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone"); //tech name

	//INIT vs UPDATE
	for (let el of document.querySelectorAll('.INIT')) el.classList.add("displayNone"); //Default INIT Questions (IQ2 IQ3 IQ4)
	for (let el of document.querySelectorAll('.UPDATE')) el.classList.remove("displayNone"); //Default UPDATE Questions (UQ2 UQ3 UQ4)

	//INIT Sub Menus
	for (let el of document.querySelectorAll('.ISUB')) el.classList.add("displayNone"); //ISUB Update Sub items

	//UPDATE Sub Menus
	for (let el of document.querySelectorAll('.USUB')) el.classList.add("displayNone"); //USUB Update Sub items

	
	myUpdate();
	
	//Hide After Defaults

	for (let el of document.querySelectorAll('.AFTER')) el.classList.add("displayNone"); //Not Needed After
	
	//Hide PSQMTA
	for (let el of document.querySelectorAll('.PSH')) el.classList.add("displayNone");
	

} else if (document.getElementById("NoteType").value == "Update After") {

if (document.getElementById("IQ1a").value == "1969-01-01T00:00") {
	document.getElementById("UQ1a").value = currentTIME("Yes");
}
if (document.getElementById("IQ5").value == "1969-01-01T00:00") {
	document.getElementById("UQ5").value = currentTIME("Yes");
}
if (document.getElementById("IQ4c").value == "1969-01-01T00:00") {	
	document.getElementById("UQ4c").value = currentTIME("Yes");
}
	
	//Final
	for (let el of document.querySelectorAll('.FINAL')) el.classList.add("displayNone"); 
	
	//Tech Name
	for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone"); //tech name

	//INIT vs UPDATE
	for (let el of document.querySelectorAll('.FINAL')) el.classList.add("displayNone"); //Final
	for (let el of document.querySelectorAll('.INIT')) el.classList.add("displayNone"); //Default INIT Questions (IQ2 IQ3 IQ4)
	for (let el of document.querySelectorAll('.UPDATE')) el.classList.remove("displayNone"); //Default UPDATE Questions (UQ2 UQ3 UQ4)
	for (let el of document.querySelectorAll('.ETRETR')) el.classList.remove("displayNone"); //Update After ETR

	//INIT Sub Menus
	for (let el of document.querySelectorAll('.ISUB')) el.classList.add("displayNone"); //ISUB Update Sub items

	//UPDATE Sub Menus
	for (let el of document.querySelectorAll('.USUB')) el.classList.add("displayNone"); //USUB Update Sub items
	
	//Hide NonAfter items
	for (let el of document.querySelectorAll('.NAFTER')) el.classList.add("displayNone"); //Not Needed After

	//Hide PSQMTA
	for (let el of document.querySelectorAll('.PSH')) el.classList.add("displayNone"); 
	
	//Show After Defaults

	for (let el of document.querySelectorAll('.AFTER')) el.classList.remove("displayNone"); //Not Needed After

	//Show on site or not on site in update after 
	for (let el of document.querySelectorAll('.ONsiteNot')) el.classList.remove("displayNone");


	
	

} else if (document.getElementById("NoteType").value == "PSQMTA") {
	//Power Supply, QMTA, Generator Tracking, Commercial Power Outage (hourly updates)
	
//Clear the board...	

	//Tech Name
	for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.add("displayNone"); //tech name
	//INIT vs UPDATE
	for (let el of document.querySelectorAll('.INIT')) el.classList.add("displayNone"); //Default INIT Questions (IQ2 IQ3 IQ4)
	for (let el of document.querySelectorAll('.UPDATE')) el.classList.add("displayNone"); //Default UPDATE Questions (UQ2 UQ3 UQ4)
	//INIT Sub Menus
	for (let el of document.querySelectorAll('.ISUB')) el.classList.add("displayNone"); //ISUB Update Sub items
	//UPDATE Sub Menus
	for (let el of document.querySelectorAll('.USUB')) el.classList.add("displayNone"); //USUB Update Sub items
	//AFTER

	for (let el of document.querySelectorAll('.AFTER')) el.classList.add("displayNone"); //USUB Update Sub items
	
	//Hide PSQMTA
	for (let el of document.querySelectorAll('.PSH')) el.classList.add("displayNone"); 

	//Final
	for (let el of document.querySelectorAll('.FINAL')) el.classList.add("displayNone"); 
	
	
	
//Show power issue options
	for (let el of document.querySelectorAll('.PSQMTA')) el.classList.remove("displayNone"); //tech name
//	document.getElementById("CPUETA").value = currentTIME("Yes");
//	document.getElementById("GENRefuel").value = currentTIME("Yes");
//	document.getElementById("PTechN").value = "";
//	document.getElementById("ZX").value = "";

} else {

	//Tech Name
	for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.add("displayNone"); //tech name

	//Final
	for (let el of document.querySelectorAll('.FINAL')) el.classList.add("displayNone"); 

	//INIT vs UPDATE
	for (let el of document.querySelectorAll('.INIT')) el.classList.add("displayNone"); //Default INIT Questions (IQ2 IQ3 IQ4)
	for (let el of document.querySelectorAll('.UPDATE')) el.classList.add("displayNone"); //Default UPDATE Questions (UQ2 UQ3 UQ4)

	//INIT Sub Menus
	for (let el of document.querySelectorAll('.ISUB')) el.classList.add("displayNone"); //ISUB Update Sub items

	//UPDATE Sub Menus
	for (let el of document.querySelectorAll('.USUB')) el.classList.add("displayNone"); //USUB Update Sub items
	
	//Hide PSQMTA
	for (let el of document.querySelectorAll('.PSH')) el.classList.add("displayNone"); 
	
	//AFTER

	for (let el of document.querySelectorAll('.AFTER')) el.classList.add("displayNone"); //USUB Update Sub items
 }


 
}

function currentTIME(plus2) {

		//Enter Current Date/Time +2 hours as default
		//need to only do once
			var np = new Date();
			var np1 = np.getFullYear();
			var np2 = np.getMonth()+1;

			if (np2.toString() < 10){
				var np2 = "0" + np2.toString();
			} else {
				var np2 = np2.toString();
			}

			if (np.getDate() < 10) {
				var np3 = "0" + np.getDate();
			} else {
				var np3 = np.getDate();
			}

if (plus2 == "Yes") {  //disabled, all times should be current time...
	
			if ((np.getHours()+2) < 10) {  
				np4 = "0" + (np.getHours()+2);
			} else {
				np4 = (np.getHours()+2);
			}
			
			if ((np.getHours()) < 10) {  
				np4 = "0" + (np.getHours());
			} else {
				np4 = np.getHours();
			}	
} else {
			if ((np.getHours()) < 10) {  
				np4 = "0" + (np.getHours());
			} else {
				np4 = np.getHours();
			}	
}

			if (np.getMinutes() < 10) {
				np5 = "0" + np.getMinutes();
			} else {
				np5 = np.getMinutes();
			}
		
			var NPP = np1.toString() + "-" + np2.toString() + "-" + np3.toString() + "T" + np4.toString() + ":" + np5.toString();
//			document.getElementById("IQ4a").value = NPP.toString();

return NPP			
			}

function CPOETR() {
	var sm =  document.getElementById("IQ3").value; // Single/Mult

	//qmta IQ5 
		if (document.getElementById("IQ5").checked == true){  //if QMTA? Checked - works
			for (let el of document.querySelectorAll('.QMTA')) el.classList.remove("displayNone");
			for (let el of document.querySelectorAll('.QMTAAddressMac')) el.classList.remove("displayNone");
			for (let el of document.querySelectorAll('.QMTA2')) {
				if (document.getElementById("IQ4a").value == "1969-01-01T00:00") {
					document.getElementById("IQ4a").value = currentTIME("Yes");
				}
				el.classList.remove("displayNone");			
			}
			for (let el of document.querySelectorAll('.NSTANDBY')) el.classList.add("displayNone");
			
									
		} else if (document.getElementById("IQ5").checked == false){ //if QMTA? unChecked - works
			document.getElementById("IQ5b").checked = false //clear QMTA for all
			for (let el of document.querySelectorAll('.QMTA')) el.classList.add("displayNone"); //Remove QMTA Address Line
			for (let el of document.querySelectorAll('.QMTAAddressMac')) el.classList.add("displayNone");
			for (let el of document.querySelectorAll('.NSTANDBY')) el.classList.remove("displayNone"); //add Non Standby items Tech Name and ETA (init)
		} 
			
		if(document.getElementById("IQ4").value != "is in stand-by"){  //if PS not in standby
			document.getElementById("IQ4c").checked = false //clear standby for all
			for (let el of document.querySelectorAll('.QMTA2')) el.classList.add("displayNone");  //remove QMTA Address line
		}

		
	if (document.getElementById("IQ4").value == "is in stand-by") {
		for (let el of document.querySelectorAll('.PSLessThan')) el.classList.remove("displayNone"); 
	}

	
	

		if (sm == "multiple" && document.getElementById("IQ4").value == "is in stand-by"){
			for (let el of document.querySelectorAll('.MULTIPS')) el.classList.remove("displayNone");
		} else if (sm != "multiple" || document.getElementById("IQ4").value != "is in stand-by"){
			for (let el of document.querySelectorAll('.MULTIPS')) el.classList.add("displayNone");
					document.getElementById("IQ4c").checked = false //clear standby for all
		}


		
		
		
		
		

		if (sm == "multiple" && document.getElementById("IQ5").checked == true){
			for (let el of document.querySelectorAll('.MULTIQMTA')) el.classList.remove("displayNone");
		} else if (sm != "multiple" || document.getElementById("IQ5").checked == false){
			for (let el of document.querySelectorAll('.MULTIQMTA')) el.classList.add("displayNone");
				document.getElementById("IQ5b").checked = false //clear QMTA for all
				
		}




		//IF Either Standby and/or QMTA selected, CBT is no longer a valid option.
		if(document.getElementById("IQ4").value == "is in stand-by" || document.getElementById("IQ5").checked == true){
			for (let el of document.querySelectorAll('.CBT1')) el.classList.add("displayNone");
			for (let el of document.querySelectorAll('.CBT2')) el.classList.add("displayNone");
		document.getElementById("IQ6").checked = false
		document.getElementById("IQ6b").checked = false
		document.getElementById("IQ6a").checked = false
		
		for (let el of document.querySelectorAll('.STANDBY')) el.classList.remove("displayNone");
		
		} else if(document.getElementById("IQ4").value != "is in stand-by" && document.getElementById("IQ5").checked == false){
			for (let el of document.querySelectorAll('.CBT1')) el.classList.remove("displayNone");	
			for (let el of document.querySelectorAll('.STANDBY')) el.classList.add("displayNone");
			CBT();
			
		}





	//If Single...
	if (sm == "single"){
		if (document.getElementById("IQ4").value == "is in stand-by" || document.getElementById("IQ5").checked == true) {
			for (let el of document.querySelectorAll('.STANDBY')) el.classList.remove("displayNone");
			for (let el of document.querySelectorAll('.NSTANDBY')) el.classList.add("displayNone");		
			if (document.getElementById("IQ4a").value == "1969-01-01T00:00") {
			document.getElementById("IQ4a").value = currentTIME("Yes");
			}
			
		} else if (document.getElementById("IQ4").value != "is in stand-by" && document.getElementById("IQ5").checked == false) {
			for (let el of document.querySelectorAll('.STANDBY')) el.classList.add("displayNone");
			for (let el of document.querySelectorAll('.NSTANDBY')) el.classList.remove("displayNone");
			document.getElementById("IQ4a").value = "";
		} 
	} else if (sm == "multiple"){
		if (document.getElementById("IQ4").value == "is in stand-by" || document.getElementById("IQ5").checked == true) {
			if (document.getElementById("IQ4a").value == "1969-01-01T00:00") {
			document.getElementById("IQ4a").value = currentTIME("Yes");
			}
			for (let el of document.querySelectorAll('.NSTANDBY')) el.classList.remove("displayNone");
			for (let el of document.querySelectorAll('.STANDBY')) el.classList.remove("displayNone");		
			if (document.getElementById("IQ5b").checked == true || document.getElementById("IQ4c").checked == true) {
					//One of the ALL NODES is checked, remove dumb stuff
				for (let el of document.querySelectorAll('.NSTANDBY')) el.classList.add("displayNone");
				for (let el of document.querySelectorAll('.NQMTAPS')) el.classList.add("displayNone");
				for (let el of document.querySelectorAll('.LBI')) el.classList.add("displayNone");
				
			} else if (document.getElementById("IQ5b").checked == false && document.getElementById("IQ4c").checked == false) {


				
				//BOTH of the ALL NODES are NOT checked, ADD dumb stuff
				for (let el of document.querySelectorAll('.NSTANDBY')) el.classList.remove("displayNone");
				SingleMulti(); //creating loop error 
				DualDisp();
				LBI();
			}
		} 	
	}


	if (document.getElementById("PSCheckbox").checked == true) {
		for (let el of document.querySelectorAll('.NSTANDBY')) el.classList.remove("displayNone"); 
	} 	
	if (document.getElementById("PSLessThanStandby").checked == true) {
		for (let el of document.querySelectorAll('.NSTANDBY')) el.classList.remove("displayNone"); 
	} 

//alert("1: " + bcountb)
bcountb=bcountb+1	
}


function PSFault() {
	if (document.getElementById("UQ4e").value == "Yes"){
		for (let el of document.querySelectorAll('.PSGEN')) el.classList.add("displayNone");
	}
	if (document.getElementById("UQ4e").value == "YesTI"){
		for (let el of document.querySelectorAll('.PSGEN')) el.classList.add("displayNone");
	}
}

function MonitoringNAccess(){
	if (document.getElementById("Mon").value == "due to no access at the location"){
		for (let el of document.querySelectorAll('.NOAccess')) el.classList.remove("displayNone");
	}
}


function LBI() {
//LBI Impacted?	

	if (document.getElementById("IQ3b").value == "Yes" && document.getElementById("IQ3").value == "multiple" && document.getElementById("IQ3a").value == "Yes") {

		for (let el of document.querySelectorAll('.LBI')) el.classList.remove("displayNone");
	} 

	if (document.getElementById("IQ3b").value != "Yes" || document.getElementById("IQ3").value != "multiple"||document.getElementById("IQ3a").value != "Yes") {
		
		for (let el of document.querySelectorAll('.LBI')) el.classList.add("displayNone");
	} 	
	
}

function OnSite() {
//Update: Tech On Site - Yes or No	
		
	if (document.getElementById("UQ1").value == "Yes") {		
		//if Before and On Site = YES ON SITE
		
		if (document.getElementById("UQ1a").value == "1969-01-01T00:00") {
			document.getElementById("UQ1a").value = currentTIME("No"); //add onsite time
		}
		document.getElementById("UQ1b").value = " "; //clear "Access Issue?"
		
		if(document.getElementById("UQ1bi").value == "1969-01-01T00:00") {
		   document.getElementById("UQ1bi").value = currentTIME("No"); 
		}			//clear access time 
		if(document.getElementById("UQ1c").value == "1969-01-01T00:00") {
		   document.getElementById("UQ1c").value = currentTIME("No")
		}; //Clear ETA
		if(document.getElementById("UQ5").value == "1969-01-01T00:00") {
		   document.getElementById("UQ5").value = currentTIME("Yes")
		}; //Clear ETA
		
	
		document.getElementById("UQ1bii").value = ""; //clear "Who's preventing"
		

		for (let el of document.querySelectorAll('.ONSITE')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.AFTER')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NONSITE')) el.classList.add("displayNone");		
		
		for (let el of document.querySelectorAll('.NACCESS')) el.classList.add("displayNone");	
		
		

	} else 	if (document.getElementById("UQ1").value == "No" || document.getElementById("UQ1").value == "") {
		for (let el of document.querySelectorAll('.FIORM')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.BEFORE')) el.classList.remove("displayNone");


		if (document.getElementById("UQ1a").value == "1969-01-01T00:00") {
			document.getElementById("UQ1a").value = currentTIME("No");
		}
		//document.getElementById("UQ1b").value = "";
		if (document.getElementById("UQ1bi").value == "1969-01-01T00:00") {
			document.getElementById("UQ1bi").value = currentTIME("No");
		}
		document.getElementById("UQ1bii").value = "";
		if (document.getElementById("UQ1c").value == "1969-01-01T00:00") {
			document.getElementById("UQ1c").value = currentTIME("Yes");
		}

		for (let el of document.querySelectorAll('.ONSITE')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NONSITE')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.SUBTYPE')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.AFTER')) el.classList.add("displayNone");
	} 
}

function AccessIssue() {
//Update: Tech On Site - Yes - Access Issue Yes/No
	
	if (document.getElementById("UQ1b").value == "No" ) {

		//document.getElementById("UQ1bi").value = "1969-01-01T00:00";
		document.getElementById("UQ1bii").value = "";
		if (document.getElementById("UQ1c").value == "1969-01-01T00:00") {
		document.getElementById("UQ1c").value = currentTIME("Yes");
		}
		for (let el of document.querySelectorAll('.NACCESS')) el.classList.add("displayNone");		
		for (let el of document.querySelectorAll('.ACCESS')) el.classList.remove("displayNone");
		if (EBMode == true){
			for (let el of document.querySelectorAll('.NoEBMode')) el.classList.add("displayNone");
		}
		
	} else 	if (document.getElementById("UQ1b").value == "Yes") {

		document.getElementById("UQ5a").checked = true;
		document.getElementById("UQ4").value = "being investigated";
		if (document.getElementById("UQ1bi").value == "1969-01-01T00:00") {
		document.getElementById("UQ1bi").value = currentTIME("Yes");
		}
		document.getElementById("UQ1bii").value = "";
		document.getElementById("UQ1c").value = "1969-01-01T00:00";
		for (let el of document.querySelectorAll('.NACCESS')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.ACCESS')) el.classList.add("displayNone");

	} else {

if (document.getElementById("UQ1bi").value == "1969-01-01T00:00") {
		document.getElementById("UQ1bi").value = currentTIME("Yes");
}
		document.getElementById("UQ1bii").value = "";
		for (let el of document.querySelectorAll('.NACCESS')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.ACCESS')) el.classList.add("displayNone");
		
	}

}

function CBTBefore() {

	if (document.getElementById("CBTB4").checked == true) {
		document.getElementById("UQ1c").disabled = true;
	} else if (document.getElementById("CBTB4").checked == false) {
		document.getElementById("UQ1c").disabled = false;
	}

}

function FormatTime(xyz,pf,eta) {
//xyz = provided time
//pf = past / future? (unused) originally to check if time provided was Before/After NOW
//eta = is this for an eta, unused

//Concept:
//zz = FormatTime(ThisHere,"Future")
//Time provided (ThisHere etc...from Form DateTime-Local) and Future or Past
//Compare Time Provided to Today's Date - if Date = Today, omit DATE portion and return time.
//don't forget that the Month needs to +1 for correct month from "New Date()"
//Extract Hour/Minute, add 0's for units < 10

var RightNow = new Date();

var ThisHere = new Date(xyz);
if (eta > 1) {
	
}
var xx = RightNow.toString();
var yy = ThisHere.toString();

var xx = xx.substring(0,15);
var yy = yy.substring(0,15);

	if (ThisHere.getHours() < 10) {
		var ww1 = "0" + ThisHere.getHours()
	} else {
		var ww1 = ThisHere.getHours()
	}

	if (ThisHere.getMinutes() < 10) {
		var ww2 = "0" + ThisHere.getMinutes()
	} else { 
		var ww2 = ThisHere.getMinutes()
	}
	
if (xx == yy) {
var TheTime = ww1 + ":" + ww2;
} else {
var TheTime = (ThisHere.getMonth()+1) +"/"+ ThisHere.getDate() +"/"+ ThisHere.getFullYear() + " " + ww1 + ":" + ww2;
}


return TheTime;
}

function PlantType() {
//Update: Tech On Site - Yes - Access Issue Yes/No
	if (document.getElementById("UQ2").value != "") {

		for (let el of document.querySelectorAll('.SUBTYPE')) el.classList.remove("displayNone");		

	} else 	if (document.getElementById("UQ2").value == "") {

		for (let el of document.querySelectorAll('.SUBTYPE')) el.classList.add("displayNone");		
	}
}

function etaTime(minutes) {
var Tyme = new Date();
var d1 = Tyme.getFullYear()
var d2 = Tyme.getMonth()+1
var d3 = Tyme.getDate()
var d4 = Tyme.getHour()
var d5 = Tyme.getMinutes


return Tyme	
}

function VM(){
	//Just override the message - 
	
if (EBMode != true) {
	
	
if (document.getElementById("IQ1-VM").checked==false) {
	if (document.getElementById("NoteType").value=="Initial") {
		document.getElementById("IQ2").disabled = false;
		document.getElementById("IQ3").disabled = false;
		document.getElementById("IQ3").disabled = false;
		document.getElementById("IQ3a").disabled = false;
		document.getElementById("IQ3b").disabled = false;
		document.getElementById("IQ3bi").disabled = false;		
		document.getElementById("IQ4").disabled = false;
		document.getElementById("IQ4a").disabled = false;
		
	} else if (document.getElementById("NoteType").value=="Update Before"||document.getElementById("NoteType").value=="Update After") { 
		document.getElementById("UQ1").disabled = false;
		document.getElementById("UQ1a").disabled = false;
		document.getElementById("UQ1b").disabled = false;
		document.getElementById("UQ1bi").disabled = false;
		document.getElementById("UQ1bii").disabled = false;		
		document.getElementById("UQ1c").disabled = false;		
		document.getElementById("UQ1").disabled = false;
		document.getElementById("UQ2").disabled = false;
		document.getElementById("UQ2a").disabled = false;
		document.getElementById("UQ3").disabled = false;		
		document.getElementById("UQ4").disabled = false;				
		document.getElementById("UQ4a").disabled = false;				
		document.getElementById("UQ4b").disabled = false;				
		document.getElementById("UQ4c").disabled = false;				
		document.getElementById("UQ4d").disabled = false;				
		document.getElementById("UQ5").disabled = false;				
		document.getElementById("UQ5a").disabled = false;				
	} else {
		
	}
} else if (document.getElementById("IQ1-VM").checked==true) {
	if (document.getElementById("NoteType").value=="Initial") {
		document.getElementById("IQ2").disabled = true;

	} else if (document.getElementById("NoteType").value=="Update Before"||document.getElementById("NoteType").value=="Update After") { 
		document.getElementById("UQ1").disabled = true;
		document.getElementById("UQ1a").disabled = true;
		document.getElementById("UQ1b").disabled = true;
		document.getElementById("UQ1bi").disabled = true;
		document.getElementById("UQ1bii").disabled = true;		
		document.getElementById("UQ1c").disabled = true;		
		document.getElementById("UQ1").disabled = true;
		document.getElementById("UQ2").disabled = true;
		document.getElementById("UQ2a").disabled = true;
		document.getElementById("UQ3").disabled = true;		
		document.getElementById("UQ4").disabled = true;				
		document.getElementById("UQ4a").disabled = true;				
		document.getElementById("UQ4b").disabled = true;				
		document.getElementById("UQ4c").disabled = true;				
		document.getElementById("UQ4d").disabled = true;				
		document.getElementById("UQ5").disabled = true;				
		document.getElementById("UQ5a").disabled = true;	
	} else {
	//do nothing
	}
}

//myUpdate() //needs to be checked if NEEDED
} else if(EBMode == true) {

	document.getElementById("IQ1-VM").checked = false
	if(vmcount==0){
		alert("DO NOT SEND EVERBRIDGE WITHOUT MAKING POSITIVE CONTACT!")
		vmcount=1
	} else if(vmcount==1){
		alert("SERIOUSLY, DO NOT SEND EVERBRIDGE WITHOUT MAKING POSITIVE CONTACT!")
		vmcount=2
	} else {
		alert("BRUH!! DO NOT SEND EVERBRIDGE WITHOUT MAKING POSITIVE CONTACT! GO TALK TO SHANNON!!")
	}

}

}

function PSVM() {
if(EBMode != true) {
	if (document.getElementById("PS1-VM").checked == true) {

		for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.PSQMTAopt5')) el.classList.add("displayNone");
		
	} else if (document.getElementById("PS1-VM").checked == false) {
		
		if(document.getElementById("CPO1").value != "Reverified" && document.getElementById("PSQMTA1").value != "CPO") {
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone");
		}	
		
		if(document.getElementById("PSQMTA1").value == "PS" && (document.getElementById("PS1").value == "Offline" || document.getElementById("PS1").value == "Less")) {		
			for (let el of document.querySelectorAll('.PSQMTAopt5')) el.classList.remove("displayNone");
		}

	}

} else if(EBMode == true) {

	document.getElementById("PS1-VM").checked = false
	if(vmcount==0){
		alert("DO NOT SEND EVERBRIDGE WITHOUT MAKING POSITIVE CONTACT!")
		vmcount=1
	} else {
		alert("SERIOUSLY, DO NOT SEND EVERBRIDGE WITHOUT MAKING POSITIVE CONTACT!")
	}

}

}


function CommPwr(){
	
	if (document.getElementById("UQ4c").value == "1969-01-01T00:00") {
		document.getElementById("UQ4c").value = currentTIME("Yes")
	}

	if (document.getElementById("UQ4").value == "due to commercial power") {
		//Commercial Power Issue
		for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NLP')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.LP')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.F22')) el.classList.add("displayNone");

		
	} else if (document.getElementById("UQ4").value == "due to a power issue at the location") {
		//Local Power Issue
		for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NLP')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.LP')) el.classList.remove("displayNone");
		
		
		for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.F22')) el.classList.add("displayNone");
				
	} else if (document.getElementById("UQ4").value == "due to a power supply fault") {
		//PS Fault
		for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NLP')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.LP')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.F22')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.PSF')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NPSF')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NoPSF')) el.classList.add("displayNone");
	} if (document.getElementById("UQ4").value != "due to commercial power" && document.getElementById("UQ4").value != "due to a power issue at the location" && document.getElementById("UQ4").value != "due to a power supply fault") {

		for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.remove("displayNone");
		
		if(document.getElementById("UA0").checked == false){
			for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.remove("displayNone");
		} else if(document.getElementById("UA0").checked == true){
			for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.add("displayNone");
		}
		

		if (document.getElementById("NoteType").value=="Update Before"){
			PlantType();
		} else if (document.getElementById("NoteType").value=="Update After"){
			for (let el of document.querySelectorAll('.ptype')) el.classList.add("displayNone");
			//Show on site or not on site in update after 
			for (let el of document.querySelectoAll('.ONsiteNot')) el.classList.remove("displayNone");
		}

		if (document.getElementById("UQ1").value == "No") {
			for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone");
		} else if (document.getElementById("UQ1").value == "Yes" && document.getElementById("UA0").checked == false) {
			for (let el of document.querySelectorAll('.ETRETR')) el.classList.remove("displayNone");
		}

		if (document.getElementById("NoteType").value=="Update After" && (document.getElementById("UQ4").value != "due to commercial power" || document.getElementById("UQ4").value != "due to a power issue at the location")) {
			for (let el of document.querySelectorAll('.ETRETR')) el.classList.remove("displayNone");
		} 

		
		
		
	} 
}

function DualTwo(){
checkit = document.getElementById("DualCheck").checked
checkit2 = document.getElementById("ElBeeEye").checked

	if(checkit == true) {
		
		for (let el of document.querySelectorAll('.LBI2')) el.classList.remove("displayNone");
	} else if(checkit == false) {
		for (let el of document.querySelectorAll('.LBI2')) el.classList.add("displayNone");
	}

	if(checkit2 == false || checkit== false) {
		for (let el of document.querySelectorAll('.Howm')) el.classList.add("displayNone");
	} else if(checkit2 == true && checkit == true) {
		
		for (let el of document.querySelectorAll('.Howm')) el.classList.remove("displayNone");
}



}


function CBT() {
 //CBT? Radio Buttons
	//Add if CBT is checked, remove if not
	if (document.getElementById("IQ6").checked == true) {

		for (let el of document.querySelectorAll('.CBT2')) el.classList.remove("displayNone");	
	} else if (document.getElementById("IQ6").checked == false) {

		for (let el of document.querySelectorAll('.CBT2')) el.classList.add("displayNone");	
		document.getElementById("IQ6b").checked = false
		document.getElementById("IQ6a").checked = false
	}

//if CBT (Single, no tech, cleared before testing)
	if (document.getElementById("IQ6a").checked == true) {
				//hide everything else

	//Tech Name
	for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.add("displayNone"); //tech name

	//Final
	for (let el of document.querySelectorAll('.FINAL')) el.classList.add("displayNone"); 

	//INIT & UPDATE
	for (let el of document.querySelectorAll('.INIT')) el.classList.add("displayNone"); 
	for (let el of document.querySelectorAll('.UPDATE')) el.classList.add("displayNone"); 

	//INIT Sub Menus
	for (let el of document.querySelectorAll('.ISUB')) el.classList.add("displayNone"); //ISUB Update Sub items

	//UPDATE Sub Menus
	for (let el of document.querySelectorAll('.USUB')) el.classList.add("displayNone"); //USUB Update Sub items
	
	//AFTER

	for (let el of document.querySelectorAll('.AFTER')) el.classList.add("displayNone"); //USUB Update Sub items

	for (let el of document.querySelectorAll('.NoNote')) el.classList.remove("displayNone"); //add no notification reminder
	
	} else if (document.getElementById("IQ6a").checked == false) {

	for (let el of document.querySelectorAll('.INIT')) el.classList.remove("displayNone"); 
	for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone"); 

	if (document.getElementById("IQ3").value == "single" || document.getElementById("IQ3").value == "") {
		//document.getElementById("IQ3a").value = "";
		//document.getElementById("IQ3b").value = "";
		//document.getElementById("IQ3bi").value = "";
		for (let el of document.querySelectorAll('.MULTI')) el.classList.add("displayNone");	
		for (let el of document.querySelectorAll('.LBI')) el.classList.add("displayNone");
	} else if (document.getElementById("IQ3").value == "multiple") {
		for (let el of document.querySelectorAll('.MULTI')) el.classList.remove("displayNone");
	}

	LBI();

	}

}


function Final(){

	//When Outage Resolved is checked - indicating Final Notification
	//Can Be Before Tech Arrived (If so, should be CBT)
	//Can Be without a Tech (Commercial Power, PS Standby, QMTA)
	//Can Be with a tech after on site.
	
	if (document.getElementById("NoteType").value != "PSQMTA") {
		if(document.getElementById("UA0").checked == true) {
			for (let el of document.querySelectorAll('.WASIS')) el.classList.remove("displayNone");
			for (let el of document.querySelectorAll('.ISWAS')) el.classList.add("displayNone");
			for (let el of document.querySelectorAll('.NFINAL')) el.classList.add("displayNone");
			
			for (let el of document.querySelectorAll('.FINAL')) el.classList.remove("displayNone");
			if (document.getElementById("UA4").value == "1969-01-01T00:00") {
			document.getElementById("UA4").value = currentTIME("No")
			}

			if(document.getElementById("UQ4").value == "due to commercial power" || document.getElementById("UQ4").value == "due to a power issue at the location"){
			
			for (let el of document.querySelectorAll('.F22')) el.classList.add("displayNone");	
			
			}
			for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.add("displayNone");	
		
			
		} else if(document.getElementById("UA0").checked == false) {

			for (let el of document.querySelectorAll('.WASIS')) el.classList.add("displayNone");
			for (let el of document.querySelectorAll('.ISWAS')) el.classList.remove("displayNone");
			for (let el of document.querySelectorAll('.NFINAL')) el.classList.remove("displayNone");
			for (let el of document.querySelectorAll('.FINAL')) el.classList.add("displayNone");
			
		
		document.getElementById("UA5").checked = false
		document.getElementById("UA6").checked = false
			
		}
	} else if (document.getElementById("NoteType").value == "PSQMTA") {
		
	}

CommPwr();

	if (document.getElementById("NoteType").value == "Update After") {
			for (let el of document.querySelectorAll('.ptype')) el.classList.add("displayNone");//ptype hide
			if (document.getElementById("UA0").checked == true){
				for (let el of document.querySelectorAll('.RES')) el.classList.add("displayNone");
			}
	}

}

function Power(uhh) {

var CPU = document.getElementById("PSQMTA1").value

//hide all power options
		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone");
		
//clear sub item selection
if (uhh != "Keep") {
	document.getElementById("CPO1").value = "";
	document.getElementById("GEN1").value = "";
	document.getElementById("PS1").value = "";
	document.getElementById("QMTA1").value = "";
	
}

	
switch(CPU) {
	case "CPO":
		for (let el of document.querySelectorAll('.CPO')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.GEN')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.PS')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.QMTAUPDATE')) el.classList.add("displayNone");	
	
break;
	case "GEN":
		for (let el of document.querySelectorAll('.CPO')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.GEN')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.PS')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.QMTAUPDATE')) el.classList.add("displayNone");		
break;
	case "PS":
		for (let el of document.querySelectorAll('.CPO')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.GEN')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.PS')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.QMTAUPDATE')) el.classList.add("displayNone");		
break;
	case "QMTAUPDATE":
		for (let el of document.querySelectorAll('.CPO')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.GEN')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.PS')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.QMTAUPDATE')) el.classList.remove("displayNone");		
break;
	default:
		AO = '<option label=" "></option>'
		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.PSH')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.PSQMTA')) el.classList.remove("displayNone");
		
}

	if (uhh == "Keep") {
		KType = document.getElementById("PSQMTA1").value
		CPUExec(KType)
	}
	
}

function IRIS () {


	if (document.getElementById("AN").value == "Yes"){
		for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.INIT')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.BCBC')) el.classList.remove("displayNone");
		myUpdate();
	}else if (document.getElementById("AN").value == "No"){
		for (let el of document.querySelectorAll('.USDS')) el.classList.remove("displayNone");
	}

	if (document.getElementById("USDSA").value == "Yes"){
		for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.INIT')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.BCBC')) el.classList.remove("displayNone");
		myUpdate();
	}else if (document.getElementById("USDSA").value == "No"){
		for (let el of document.querySelectorAll('.Dispatch')) el.classList.remove("displayNone");
	}

	if (document.getElementById("common").value == "Yes"){
		for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.INIT')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.BCBC')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.IRISDispatch')) el.classList.add("displayNone");
		myUpdate();
	}else if (document.getElementById("common").value == "No"){
		document.getElementById("Desc").innerHTML = "This outage is single customer issues. No plant is affected."
	}

	var a =  document.getElementById("Q1").value;
	var c =  document.getElementById("Q2").value;
	var d =  document.getElementById("Q3").value;
	var e =  document.getElementById("Q4").value;
	var f =  document.getElementById("Q5").value;
	var g =  document.getElementById("Q6").value;
	var h =  document.getElementById("Q7").value;
	var i =  document.getElementById("Q8").value;
	var j =  document.getElementById("Q9").value;
	var k =  document.getElementById("Q10").value;
	var u =  document.getElementById("Q11a").value;
	var v =  document.getElementById("Q11b").value;
	var w =  document.getElementById("Q11c").value;
	var x = document.getElementById("CBTReason").value;

	document.getElementById("AddressBlockIRIS").innerHTML = 
		
		  "Node " + a + "\r"
		+ "Customer #1 " + "\r"
		+		"Account Number " + c +"\r"
		+ 		"Address " + d + "\r"
		+ 		"Biller Notes " + e + "\r"
		+		"Upstream and Downstream Issues " + u + "\r"
		+ "Customer #2 " + "\r"
		+ 		"Account Number " + f + "\r"
		+ 		"Address "   + g + "\r"
		+ 		"Biller Notes " + h + "\r"
		+		"Upstream and Downstream Issues " + v + "\r"
		+ "Customer #3 " + "\r"
        + 		"Account Number " + i + "\r"
        + 		"Addresses " + j + "\r"
		+ 		"Biller Notes " + k + "\r"
		+		"Upstream and Downstream Issues " + w + "\r"
		+ "CBT Reason " + x;
				
	

	


}


/* //Get the modal
var modal = document.getElementById('myModal');

//Get Remedy Work Log image
var img = document.getElementById('DMGuidelines');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = 'Images/DMGuidelines.png';
	captionText.innerHTML = 'Guidelines for planned maintenance approval.';
} */

//Allows Modal to be closed using close button

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

function ClearCopy() {
for (let el of document.querySelectorAll('.COPYGOOD')) el.classList.add("displayNone");
}

function CPU1() {  ///Commercial Power Outage
var IteM = document.getElementById("CPO1").value;
for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //CPO Reverify time
document.getElementById("PS1-VM").disabled=false;
for (let el of document.querySelectorAll('.CPOR')) el.classList.add("displayNone"); //CPO Reverify time
for (let el of document.querySelectorAll('.NCPOR')) el.classList.remove("displayNone"); //CPO Reverify time
document.getElementById("CPUETAa").disabled=false;
//Hide optional elements
var CPOT = document.getElementById("CPOT").value;

switch(IteM) {

	case "No Change":
				
		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //PS Options
		for (let el of document.querySelectorAll('.CPOR')) el.classList.remove("displayNone"); //CPO Reverify time
		for (let el of document.querySelectorAll('.NCPOR')) el.classList.add("displayNone"); //CPO Reverify time
		for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.CPOTNS')) el.classList.add("displayNone");
		document.getElementById("CPUETAa").disabled=true;
	
	UpdateDesc = "Commercial power outage is still impacting the node. There has been no significant change in online device count. The ROC will continue to monitor this outage for any changes. " + CPOT + FormatTime(document.getElementById("CPUETA").value) + " MT.";

break;
	case "More Devices":

		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //PS Options
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		//for (let el of document.querySelectorAll('.PSQMTAopt2')) el.classList.remove("displayNone"); //ZX

		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone"); //ETA
		}
		//for (let el of document.querySelectorAll('.YD')) el.classList.remove("displayNone"); //YD
		var TechN = document.getElementById("PTechN").value;
		var TechE = document.getElementById("CPUETA").value;
		var TechVM = document.getElementById("PS1-VM").checked;

		if (document.getElementById("CPUETAa").checked == false) {
			TechE = FormatTime(TechE) + " MT."
		} else if (document.getElementById("CPUETAa").checked == true) {
			TechE = "unknown."
		}

		var ZX = document.getElementById("ZX").value;
		
		if (TechVM == false){
		UpdateDesc = "Additional devices have fallen offline since the last update. Technician " + TechN + " has been dispatched to investigate the outage. Their ETA is " + TechE
		} else if (TechVM == true){
		UpdateDesc = "Additional devices have fallen offline since the last update. A voicemail was left for " + TechN + ". The ROC will attempt dispatch again in 15 minutes."
		}

break;
	case "Partial":
		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //PS Options
	
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		//for (let el of document.querySelectorAll('.PSQMTAopt2')) el.classList.remove("displayNone"); //ZX
		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone"); //ETA
		}
		//for (let el of document.querySelectorAll('.YD')) el.classList.remove("displayNone"); //YD
		var TechN = document.getElementById("PTechN").value;
		var TechE = document.getElementById("CPUETA").value;
		var ZX = document.getElementById("ZX").value;
		var TechVM = document.getElementById("PS1-VM").checked;
		
		if (document.getElementById("CPUETAa").checked == false) {
			TechE = FormatTime(TechE) + " MT."
		} else if (document.getElementById("CPUETAa").checked == true) {
			TechE = "unknown."
		}		
		
			
		if (TechVM == false){
		UpdateDesc = "A portion of the outage remains offline after a partial recovery. Technician " + TechN + " has been dispatched to investigate the outage. Their ETA is " + TechE
		} else if (TechVM == true){
		UpdateDesc = "A portion of the outage remains offline after a partial recovery. A voicemail was left for " + TechN + ". The ROC will attempt dispatch again in 15 minutes."
		}

break;
	case "6HourOut":
		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //PS Options
	
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		//for (let el of document.querySelectorAll('.PSQMTAopt2')) el.classList.remove("displayNone"); //ZX
		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone"); //ETA
		}
		for (let el of document.querySelectorAll('.YD')) el.classList.remove("displayNone"); //YD
		var TechN = document.getElementById("PTechN").value;
		var TechE = document.getElementById("CPUETA").value;
		var TechVM = document.getElementById("PS1-VM").checked;
		
		if (document.getElementById("CPUETAa").checked == false) {
			TechE = FormatTime(TechE) + " MT."
		} else if (document.getElementById("CPUETAa").checked == true) {
			TechE = "unknown."
		}
		
		var ZX = document.getElementById("ZX").value;
		 
		  
		if (TechVM == false){
		UpdateDesc = "Technician " + TechN + " has been dispatched to reverify if commercial power outage is still impacting the node 6-hours after verification. Their ETA is " + TechE
		} else if (TechVM == true){
		UpdateDesc = "A technician will need to reverify if commercial power outage is still impacting the node 6-hours after verification. A voicemail was left for " + TechN + ". The ROC will attempt dispatch again in 15 minutes."
		}
 break;
 	case "IRIS":
		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //PS Options
	
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		//for (let el of document.querySelectorAll('.PSQMTAopt2')) el.classList.remove("displayNone"); //ZX
		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone"); //ETA
		}
		//for (let el of document.querySelectorAll('.YD')) el.classList.remove("displayNone"); //YD
		var TechN = document.getElementById("PTechN").value;
		var TechE = document.getElementById("CPUETA").value;

		
		if (document.getElementById("CPUETAa").checked == false) {
			TechE = FormatTime(TechE) + " MT."
		} else if (document.getElementById("CPUETAa").checked == true) {
			TechE = "unknown."
		}
		var ZX = document.getElementById("ZX").value;
		
var TechVM = document.getElementById("PS1-VM").checked;		  
		if (TechVM == false){
		 UpdateDesc = "An IRIS Event has occurred during a commercial power outage. Technician " + TechN + " has been dispatched to investigate additional impact to the node. Their ETA is " + TechE
		} else if (TechVM == true){
		UpdateDesc = "An IRIS Event has occurred during a commercial power outage. A voicemail was left for " + TechN + ". The ROC will attempt dispatch again in 15 minutes."
		}
break;
 	case "Reverified":
		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //PS Options
		for (let el of document.querySelectorAll('.GeN')) el.classList.add("displayNone"); //Genn Address		
		for (let el of document.querySelectorAll('.ReV')) el.classList.remove("displayNone"); //Verification Address
		for (let el of document.querySelectorAll('.PSQMTAopt6')) el.classList.remove("displayNone"); //Verification Address
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		for (let el of document.querySelectorAll('.CPOR')) el.classList.remove("displayNone"); //CPO Reverify time
		for (let el of document.querySelectorAll('.NCPOR')) el.classList.add("displayNone"); //CPO Reverify time
		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone"); //ETA
		}
		document.getElementById("CPUETAa").disabled=true;
		
		document.getElementById("PS1-VM").checked=false;//Disable VM Option
		document.getElementById("PS1-VM").disabled=true;//Disable VM Option
		
		

		var ReVA = document.getElementById("GENAddy").value;
		var TechN = document.getElementById("PTechN").value;

		 UpdateDesc = TechN + " has reverified that commercial power outage is still impacting this node. Plant was verified as unaffected at " + ReVA + ". The ROC will continue to monitor this outage for any changes. 6-hour reverification due at " + FormatTime(document.getElementById("CPUETA").value) + " MT.";
break;

 	case "Restored":
		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //PS Options
		
		 UpdateDesc = "Commercial power has been restored in the area. Impacted devices have recovered and alarms have cleared."
break;

	case "Power Restored but Monitoring":
		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //PS Options
		for (let el of document.querySelectorAll('.CPOR')) el.classList.add("displayNone"); //CPO Reverify time
		for (let el of document.querySelectorAll('.NCPOR')) el.classList.add("displayNone"); //CPO Reverify time
		for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.PSM')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.CPOTNS')) el.classList.add("displayNone");

		var TechE = document.getElementById("CPUETA").value;
			if (document.getElementById("CPUETAa").checked == false) {
				TechE = FormatTime(TechE) + " MT."
			} else if (document.getElementById("CPUETAa").checked == true) {
				TechE = "unknown."
			}
			
			UpdateDesc = "Commercial power has been restored in the area. Impacted devices have recovered and alarms have cleared. However, we are monitoring this outage until " + TechE
	break;
	default:
		UpdateDesc = " "
}
 // add time stamp to begining of notification in ebmode
 const d = new Date();
 let dait = d.toLocaleDateString();
 TStamp = dait + " " + FormatTime(new Date())
 
 if (EBMode == true){
	EBTimeStamp = TStamp + " MT - " 
	if (document.getElementById("CPO1").value == "Restored" || document.getElementById("GEN1").value == "PickupComplete" || document.getElementById("PS1").value == "OnRest" || document.getElementById("QMTA1").value == "Online" || UA0 == true){
		UpdateChange = ""
	}else {
		UpdateChange = " The ROC will send another update when there has been significant change or we are closing."
	}
} else {
	EBTimeStamp = ""
	UpdateChange = ""
}


document.getElementById("Desc").innerHTML = EBTimeStamp + UpdateDesc + UpdateChange;
}

function CPOType() { //For show hid of CPOT

	if (document.getElementById("CPOT").value == "6 Hour Re-Verification due at " || document.getElementById("CPOT").value == "Power company website ETR is " || document.getElementById("CPOT").value == "The ETR is provided by the technician is at "){

		if (document.getElementById("CPO1").value == "No Change"){

		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //PS Options
		for (let el of document.querySelectorAll('.CPOR')) el.classList.remove("displayNone"); //CPO Reverify time
		for (let el of document.querySelectorAll('.NCPOR')) el.classList.add("displayNone"); //CPO Reverify time
		for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.CPOTNS')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.CPOTy')) el.classList.add("displayNone");
		document.getElementById("CPUETAa").disabled=true;
	
	UpdateDesc = "Commercial power outage is still impacting the node. There has been no significant change in online device count. The ROC will continue to monitor this outage for any changes. " + CPOT + FormatTime(document.getElementById("CPUETA").value) + " MT.";
	}
	
	}
}




function CPU2() { ///Generator Tracking Ticket
var IteM = document.getElementById("GEN1").value
for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //CPO Reverify time
document.getElementById("PS1-VM").disabled=false;
for (let el of document.querySelectorAll('.CPOR')) el.classList.add("displayNone"); //CPO Reverify time
for (let el of document.querySelectorAll('.NCPOR')) el.classList.remove("displayNone"); //CPO Reverify time
document.getElementById("CPUETAa").disabled=false;
//Hide optional elements
		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //PS Options

		
switch(IteM) {
	case "No Change":
		for (let el of document.querySelectorAll('.PSQMTAopt4')) el.classList.remove("displayNone"); //GEN Refuel Time
		for (let el of document.querySelectorAll('.PSQMTAopt6')) el.classList.remove("displayNone"); //GEN Address		
		for (let el of document.querySelectorAll('.GeN')) el.classList.remove("displayNone"); //Genn Address	


		var GenAddress = document.getElementById("GENAddy").value

		var GenRefuel = document.getElementById("GENRefuel").value;
		var POCR = document.getElementById("POCR").value;
		
		UpdateDesc = "There has been no significant change in online device count. The ROC will continue to monitor this outage for any changes. Generator is located at " + GenAddress + ". The next refuel time is " + FormatTime(GenRefuel) + " MT. The POC will be " + POCR
break;
	case "Refuel":
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		for (let el of document.querySelectorAll('.PSQMTAopt2')) el.classList.remove("displayNone"); //ZX
		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone"); //ETA
		}
		for (let el of document.querySelectorAll('.PSQMTAopt6')) el.classList.remove("displayNone"); //Gen Address
		for (let el of document.querySelectorAll('.GeN')) el.classList.remove("displayNone"); //Genn Address			
		var TechN = document.getElementById("PTechN").value;
		var TechE = document.getElementById("CPUETA").value;
		if (document.getElementById("CPUETAa").checked == false) {
			TechE = FormatTime(TechE) + " MT."
		} else if (document.getElementById("CPUETAa").checked == true) {
			TechE = "unknown."
		}
		var ZX = document.getElementById("ZX").value;
		var GenAddress = document.getElementById("GENAddy").value
		
		
		var TechVM = document.getElementById("PS1-VM").checked;		  
		if (TechVM == false){
			UpdateDesc = "Technician " + TechN + " has been dispatched to refuel the generator at " + GenAddress + ". Their ETA is " + TechE
		} else if (TechVM == true){
		UpdateDesc = "A technician will need to refuel the generator at " + GenAddress + ". A voicemail was left for " + TechN + ". The ROC will attempt dispatch again in 15 minutes."
		}

break;
	case "Refuel Complete":

		var POCR = document.getElementById("POCR").value;
		
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		
		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt4')) el.classList.remove("displayNone"); //Refuel Time
			//for (let el of document.querySelectorAll('.PSQMTAopt2')) el.classList.remove("displayNone"); //LH#
		}
		for (let el of document.querySelectorAll('.PSQMTAopt6')) el.classList.remove("displayNone"); //Gen Address
		for (let el of document.querySelectorAll('.GeN')) el.classList.remove("displayNone"); //Genn Address			
		var TechN = document.getElementById("PTechN").value;
		var GenRefuel = document.getElementById("GENRefuel").value;
		if (document.getElementById("CPUETAa").checked == false) {
			TechE = FormatTime(TechE) + " MT."
		} else if (document.getElementById("CPUETAa").checked == true) {
			TechE = "unknown."
		}
		var GenAddress = document.getElementById("GENAddy").value
		document.getElementById("PS1-VM").checked=false;//Disable VM Option
		document.getElementById("PS1-VM").disabled=true;//Disable VM Option
		
		var TechVM = document.getElementById("PS1-VM").checked;		  
		

			UpdateDesc = TechN + " has complete refueling the generator at " + GenAddress + ". The next refuel time is " + FormatTime(GenRefuel) + " MT. The POC will be " + POCR

break;	

	case "Pickup":
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		for (let el of document.querySelectorAll('.PSQMTAopt2')) el.classList.remove("displayNone"); //ZX
		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone"); //ETA
		}
		for (let el of document.querySelectorAll('.PSQMTAopt6')) el.classList.remove("displayNone"); //Genn Address
		for (let el of document.querySelectorAll('.GeN')) el.classList.remove("displayNone"); //Genn Address
		var TechN = document.getElementById("PTechN").value;
		var TechE = document.getElementById("CPUETA").value;
		if (document.getElementById("CPUETAa").checked == false) {
			TechE = FormatTime(TechE) + " MT."
		} else if (document.getElementById("CPUETAa").checked == true) {
			TechE = "unknown."
		}
		var ZX = document.getElementById("ZX").value;
		var GenAddress = document.getElementById("GENAddy").value
		
		
var TechVM = document.getElementById("PS1-VM").checked;		  
		if (TechVM == false){
		UpdateDesc = "Job LH" + ZX + " has been created and assigned to " + TechN + " to pick up the generator located at " + GenAddress + ". Their ETA is " + TechE
		} else if (TechVM == true){
		UpdateDesc = "Job LH" + ZX + " has been created for a technician to pick up the generator located at " + GenAddress + ". A voicemail was left for " + TechN + ". The ROC will attempt dispatch again in 15 minutes."
		}
		
break;

case "PickupComplete":
		
		UpdateDesc = "Commercial power has been restored and the technician has picked up the generator."
		
break;

	default:
		UpdateDesc = " "
}
 // add time stamp to begining of notification in ebmode
 const d = new Date();
 let dait = d.toLocaleDateString();
 TStamp = dait + " " + FormatTime(new Date())
 
 if (EBMode == true){
	EBTimeStamp = TStamp + " MT - " 
	if (document.getElementById("CPO1").value == "Restored" || document.getElementById("GEN1").value == "PickupComplete" || document.getElementById("PS1").value == "OnRest" || document.getElementById("QMTA1").value == "Online" || UA0 == true){
		UpdateChange = ""
	}else {
		UpdateChange = " The ROC will send another update when there has been significant change or we are closing."
	}
} else {
	EBTimeStamp = ""
	UpdateChange = ""
}


document.getElementById("Desc").innerHTML = EBTimeStamp + UpdateDesc + UpdateChange;
}

function CPU3() {  ///Power Supply in Standby 
var IteM = document.getElementById("PS1").value
for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //CPO Reverify time
document.getElementById("PS1-VM").disabled=false;
for (let el of document.querySelectorAll('.CPOR')) el.classList.add("displayNone"); //CPO Reverify time
for (let el of document.querySelectorAll('.NCPOR')) el.classList.remove("displayNone"); //CPO Reverify time
document.getElementById("CPUETAa").disabled=false;
//Hide optional elements
		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //PS Options
		
switch(IteM) {
	case "Standby":
		UpdateDesc = "Commercial power outage is still impacting the node. The power supply remains in stand-by with at least 1-hour of runtime remaining. There has been no significant change in online device count. The ROC will continue to monitor this outage for any changes."
		
		
break;
	case "Less":
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		//for (let el of document.querySelectorAll('.PSQMTAopt2')) el.classList.remove("displayNone"); //ZX
		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone"); //ETA
			for (let el of document.querySelectorAll('.PSQMTAopt5')) el.classList.remove("displayNone");
		}

		var TechN = document.getElementById("PTechN").value;
		var TechE = document.getElementById("CPUETA").value;
		if (document.getElementById("CPUETAa").checked == false) {
			TechE = FormatTime(TechE) + " MT."
		} else if (document.getElementById("CPUETAa").checked == true) {
			TechE = "unknown."
		}
		var ZX = document.getElementById("ZX").value;
		var NoGenerator = document.getElementById("NoGen").checked;
		
var TechVM = document.getElementById("PS1-VM").checked;		  
		if (TechVM == false){
				UpdateDesc = "Commercial power outage is still impacting the node. Less than 1-hour of runtime remains for the power supply in standby. Technician " + TechN + " has been dispatched to deploy a generator to the power supply. Their ETA is " + TechE

			if (NoGenerator == true) {
				UpdateDesc = "Commercial power outage is still impacting the node. Less than 1-hour of runtime remains for the power supply in standby. " + TechN + " has advised that there are no generators available to power the node. Call deflection will remain on the outage."
			}		 

		} else if (TechVM == true){
		UpdateDesc = "Commercial power outage is still impacting the node. Less than 1-hour of runtime remains for the power supply in standby. A voicemail was left for " + TechN + ". The ROC will attempt dispatch again in 15 minutes."
		}
		
break;
	case "Offline":
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		//for (let el of document.querySelectorAll('.PSQMTAopt2')) el.classList.remove("displayNone"); //ZX
		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone"); //ETA
			for (let el of document.querySelectorAll('.PSQMTAopt5')) el.classList.remove("displayNone"); //NoGen
		}
		
		var TechN = document.getElementById("PTechN").value;
		var TechE = document.getElementById("CPUETA").value;
		if (document.getElementById("CPUETAa").checked == false) {
			TechE = FormatTime(TechE) + " MT."
		} else if (document.getElementById("CPUETAa").checked == true) {
			TechE = "unknown."
		}
		var ZX = document.getElementById("ZX").value;
		var NoGenerator = document.getElementById("NoGen").checked;
	

var TechVM = document.getElementById("PS1-VM").checked;		  
		if (TechVM == false){
		UpdateDesc = "The power supply has gone offline. Technician " + TechN + " has been dispatched to investigate the outage. Their ETA is " + TechE

		if (NoGenerator == true) {
			UpdateDesc = "The power supply has gone offline. " + TechN + " has advised that there are no generators available to power the node. Call deflection will remain on the outage."
		}

		} else if (TechVM == true){
		UpdateDesc = "The power supply has gone offline. A voicemail was left for " + TechN + ". The ROC will attempt dispatch again in 15 minutes."
		}		

break;
	case "OnOut":
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		//for (let el of document.querySelectorAll('.PSQMTAopt2')) el.classList.remove("displayNone"); //ZX
		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone"); //ETA
		}
		var TechN = document.getElementById("PTechN").value;
		var TechE = document.getElementById("CPUETA").value;
		if (document.getElementById("CPUETAa").checked == false) {
			TechE = FormatTime(TechE) + " MT."
		} else if (document.getElementById("CPUETAa").checked == true) {
			TechE = "unknown."
		}
		var ZX = document.getElementById("ZX").value;
				
var TechVM = document.getElementById("PS1-VM").checked;		  
		if (TechVM == false){
			UpdateDesc = "The power supply is online and devices remain offline in the node. Technician " + TechN + " has been dispatched to investigate the remaining outage. Their ETA is " + TechE
		} else if (TechVM == true){
		UpdateDesc = "The power supply is online and devices remain offline in the node. A voicemail was left for " + TechN + ". The ROC will attempt dispatch again in 15 minutes."
		}

break;
	case "OnRest":
		UpdateDesc = "Commercial power has been restored in the area. The power supply is now online. Impacted devices have recovered and alarms have cleared."

break;
	default:
		UpdateDesc = " "
}
 // add time stamp to begining of notification in ebmode
 const d = new Date();
 let dait = d.toLocaleDateString();
 TStamp = dait + " " + FormatTime(new Date())
 
 if (EBMode == true){
	EBTimeStamp = TStamp + " MT - " 
	if (document.getElementById("CPO1").value == "Restored" || document.getElementById("GEN1").value == "PickupComplete" || document.getElementById("PS1").value == "OnRest" || document.getElementById("QMTA1").value == "Online" || UA0 == true){
		UpdateChange = ""
	}else {
		UpdateChange = " The ROC will send another update when there has been significant change or we are closing."
	}
} else {
	EBTimeStamp = ""
	UpdateChange = ""
}


document.getElementById("Desc").innerHTML = EBTimeStamp + UpdateDesc + UpdateChange;
}

function CPU4() {   ///QMTA
var IteM = document.getElementById("QMTA1").value

for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //CPO Reverify time
if (IteM == "Valid") {
	//QMTA address and mac
	for (let el of document.querySelectorAll('.QMTAAddressMac')) el.classList.remove("displayNone");
}
else {
	for (let el of document.querySelectorAll('.QMTAAddressMac')) el.classList.add("displayNone");
}
document.getElementById("PS1-VM").disabled=false;
for (let el of document.querySelectorAll('.CPOR')) el.classList.add("displayNone"); //CPO Reverify time
for (let el of document.querySelectorAll('.NCPOR')) el.classList.remove("displayNone"); //CPO Reverify time
document.getElementById("CPUETAa").disabled=false;
//Hide optional elements
		for (let el of document.querySelectorAll('.PSo')) el.classList.add("displayNone"); //PS Options
		
switch(IteM) {
	case "Valid":

		UpdateDesc = "Commercial power outage is still impacting the node. The QMTA is still operating on battery backup. There has been no significant change in online device count. The ROC will continue to monitor this outage for any changes."
		
break;
	case "Failed":
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		//for (let el of document.querySelectorAll('.PSQMTAopt2')) el.classList.remove("displayNone"); //ZX
		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone"); //ETA
		}

		var TechN = document.getElementById("PTechN").value;
		var TechE = document.getElementById("CPUETA").value;
		if (document.getElementById("CPUETAa").checked == false) {
			TechE = FormatTime(TechE) + " MT."
		} else if (document.getElementById("CPUETAa").checked == true) {
			TechE = "unknown."
		}
		var ZX = document.getElementById("ZX").value;

			
var TechVM = document.getElementById("PS1-VM").checked;		  
		if (TechVM == false){
			UpdateDesc = "The QMTA has fallen offline and no other QMTA could be identified. Technician " + TechN + " has been dispatched to investigate the outage. Their ETA is " + TechE
		} else if (TechVM == true){
		UpdateDesc = "The QMTA has fallen offline and no other QMTA could be identified. A voicemail was left for " + TechN + ". The ROC will attempt dispatch again in 15 minutes."
		}
		
break;
	case "Outage":
		for (let el of document.querySelectorAll('.PSQMTAopt1')) el.classList.remove("displayNone"); //Tech Name
		//for (let el of document.querySelectorAll('.PSQMTAopt2')) el.classList.remove("displayNone"); //ZX
		if(document.getElementById("PS1-VM").checked==false) {;
			for (let el of document.querySelectorAll('.PSQMTAopt3')) el.classList.remove("displayNone"); //ETA
		}

		var TechN = document.getElementById("PTechN").value;
		var TechE = document.getElementById("CPUETA").value;
		if (document.getElementById("CPUETAa").checked == false) {
			TechE = FormatTime(TechE) + " MT."
		} else if (document.getElementById("CPUETAa").checked == true) {
			TechE = "unknown."
		}		
		var ZX = document.getElementById("ZX").value;

		
		var TechVM = document.getElementById("PS1-VM").checked;		  
		if (TechVM == false){
			UpdateDesc = "The QMTA is no longer on battery backup and devices remain offline in the node. Technician " + TechN + " has been dispatched to investigate the remaining outage. Their ETA is " + TechE
		} else if (TechVM == true){
				UpdateDesc = "The QMTA is no longer on battery backup and devices remain offline in the node. A voicemail was left for " + TechN + ". The ROC will attempt dispatch again in 15 minutes."
		}

break;
	case "Online":

		UpdateDesc = "Commercial power has been restored in the area. The QMTA is online and no longer on battery backup. Impacted devices have recovered and alarms have cleared."

break;
	default:
		UpdateDesc = " "
}
 // add time stamp to begining of notification in ebmode
 const d = new Date();
 let dait = d.toLocaleDateString();
 TStamp = dait + " " + FormatTime(new Date())
 
 if (EBMode == true){
	EBTimeStamp = TStamp + " MT - " 
	if (document.getElementById("CPO1").value == "Restored" || document.getElementById("GEN1").value == "PickupComplete" || document.getElementById("PS1").value == "OnRest" || document.getElementById("QMTA1").value == "Online" || UA0 == true){
		UpdateChange = ""
	}else {
		UpdateChange = " The ROC will send another update when there has been significant change or we are closing."
	}
} else {
	EBTimeStamp = ""
	UpdateChange = ""
}


document.getElementById("Desc").innerHTML = EBTimeStamp + UpdateDesc + UpdateChange;
}


function TimeUp(pastfuture,tyme,EyeD) {

NowCheck = new Date();
ThisCheck = new Date(tyme);

ThisCheck.setHours(ThisCheck.getHours()+1) //check past/future



	if (pastfuture == "future") {

		if(NowCheck > ThisCheck) {

			//document.getElementById(EyeD).value = currentTIME("No");
		}
	
	} else if (pastfuture == "past") {

		if(NowCheck < ThisCheck) {

			//document.getElementById(EyeD).value = currentTIME("No");
		} 
	}
}

function CPUExec(witch) {

	switch(witch) {
		case "CPO":
			CPU1()
		break;
		case "GEN":
			CPU2()		
		break;
		case "PS":
			CPU3()
		break;
		case "QMTAUPDATE":
			CPU4()
		break;
	}

}

function DualDisp() {
//Dual Dispatch has been initiated, reveal LBI question
	if(document.getElementById("IQ3a").value == "Yes" && document.getElementById("IQ3").value == "multiple") {
		//Unhide LBI, run LBI()
		for (let el of document.querySelectorAll('.MULTI2')) el.classList.remove("displayNone"); 
		LBI();
	} else if(document.getElementById("IQ3a").value == "No" || document.getElementById("IQ3a").value == "" || document.getElementById("IQ3").value != "multiple") {
		//hide LBI and # of LBI
		document.getElementById("IQ3b").value = ""

		for (let el of document.querySelectorAll('.LBI')) el.classList.add("displayNone"); 
	
		for (let el of document.querySelectorAll('.MULTI2')) el.classList.add("displayNone"); 
	}
}

function ReVis(){
	//call this to CLEAR ALL items (except NoteType)
	//Then Run each sub-function based on NoteType selected
	//ie: change from Update to Initial
	//-remove all items *ALL*
	//-run InitUpdate, Run SingleMulti(), run DualDisp(), run LBI(), run CommPwr(), Clear QMTA/CBT Checkboxes and Radio Buttons
	//setup for Each of the NoteTypes
	//Use this function for everything?
	//alert("ReVis Start...")

//remove ALL
for (let el of document.querySelectorAll('.Fiorm')) el.classList.add("displayNone"); 
for (let el of document.querySelectorAll('.GA')) el.classList.add("displayNone"); 
NType = document.getElementById("NoteType").value

AllTimes()



	switch(NType) {
		case "Initial":
			//Always init: Technician Name, ETA?, Single Multi, PS Status, QMTA, CBT
			for (let el of document.querySelectorAll('.NOTIFICATIONS')) el.classList.remove("displayNone");
			for (let el of document.querySelectorAll('.EMAIL')) el.classList.add("displayNone");			
			for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone"); 
			for (let el of document.querySelectorAll('.INIT')) el.classList.remove("displayNone"); 
			for (let el of document.querySelectorAll('.CBT1')) el.classList.remove("displayNone"); 
			for (let el of document.querySelectorAll('.GA')) el.classList.remove("displayNone"); 
			for (let el of document.querySelectorAll('.BOTOTBoxSH')) el.classList.remove("displayNone");//For BOTOT

			//Then the What IFs:
			//Single/Multi
			if(document.getElementById("IQ3").value == "multiple") {
				for (let el of document.querySelectorAll('.MULTI')) el.classList.remove("displayNone"); 
				if(document.getElementById("IQ3a").value == "Yes") {
					for (let el of document.querySelectorAll('.MULTI2')) el.classList.remove("displayNone"); 
					if(document.getElementById("IQ3b").value == "Yes") {
						for (let el of document.querySelectorAll('.LBI')) el.classList.remove("displayNone"); 
					} else if(document.getElementById("IQ3b").value != "Yes") { 
						for (let el of document.querySelectorAll('.LBI')) el.classList.add("displayNone"); 
					}
				} else if(document.getElementById("IQ3a").value != "Yes") {
				for (let el of document.querySelectorAll('.MULTI2')) el.classList.add("displayNone"); 
				}
			} else if(document.getElementById("IQ3").value != "multiple") {
				for (let el of document.querySelectorAll('.MULTI')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.MULTI2')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.LBI')) el.classList.add("displayNone"); 
			}
		
	//Power Supply Status
		if(document.getElementById("IQ4").value == "is in stand-by") {
			for (let el of document.querySelectorAll('.STANDBY')) el.classList.remove("displayNone"); 
			if(document.getElementById("IQ3").value == "multiple") {
				for (let el of document.querySelectorAll('.MULTIPS')) el.classList.remove("displayNone"); 
			} else if(document.getElementById("IQ4").value != "is in stand-by") {
			for (let el of document.querySelectorAll('.MULTIPS')) el.classList.add("displayNone"); 
			}
		} else if(document.getElementById("IQ4").value != "is in stand-by") {
			for (let el of document.querySelectorAll('.STANDBY')) el.classList.add("displayNone");
			for (let el of document.querySelectorAll('.MULTIPS')) el.classList.add("displayNone"); 			
		}
	
	//	QMTA? Checkbox
		if(document.getElementById("IQ5").checked == true) {
			for (let el of document.querySelectorAll('.NSTANDBY')) el.classList.add("displayNone");
			for (let el of document.querySelectorAll('.CBT1')) el.classList.add("displayNone");
			for (let el of document.querySelectorAll('.MAC')) el.classList.remove("displayNone");
		} else if(document.getElementById("IQ5").checked == false) {
			//na just shouldn't have to do anything...
		}
			


break;
	case "Update Before":
	
//Always Update Before: Tech Name, is tech on site
for (let el of document.querySelectorAll('.NOTIFICATIONS')) el.classList.remove("displayNone");
for (let el of document.querySelectorAll('.EMAIL')) el.classList.add("displayNone");			
for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone"); 
for (let el of document.querySelectorAll('.BEFORE')) el.classList.remove("displayNone"); 
for (let el of document.querySelectorAll('.GA')) el.classList.remove("displayNone"); 
document.getElementById("UQ1b").value = ""


//Then the What IFs:
	//On Site:
		if(document.getElementById("UQ1").value == "Yes") { //OnSite: Yes
			for (let el of document.querySelectorAll('.ONSITE')) el.classList.remove("displayNone"); 
			for (let el of document.querySelectorAll('.AFTER')) el.classList.remove("displayNone"); 

			if(document.getElementById("UQ2").value != "") { //Plant Type: Any
				for (let el of document.querySelectorAll('.SUBTYPE')) el.classList.remove("displayNone"); 
			} 				
			
			if(document.getElementById("UQ4").value == "due to commercial power") { //Cause: Comm Pwr
				for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.NLP')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.LP')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone"); 
				
				if(document.getElementById("UQ4e").value == "Yes") { //Generator Deployed
					for (let el of document.querySelectorAll('.PSQMTAopt4')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.GENInfo')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.PSGEN')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone"); 
				} 
				if(document.getElementById("UQ4e").value == "YesTI") { //Truck INverter
					for (let el of document.querySelectorAll('.PSQMTAopt4')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.GENInfo')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.PSGEN')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.GENTI')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.NLP')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.LP')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone");  
					for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone"); 
				} 
			} else if(document.getElementById("UQ4").value == "due to a power issue at the location") { //Cause: Local Pwr
				for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.NLP')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.LP')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone"); 

			} else if(document.getElementById("UQ4").value == "due to a power supply fault") { 
			//Cause: PS Fault
				for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.NLP')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.LP')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.PSGEN')) el.classList.add("displayNone");
				if(document.getElementById("UQ4e").value == "Yes") { //Generator Deployed
					for (let el of document.querySelectorAll('.PSQMTAopt4')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.GENInfo')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.PSGEN')) el.classList.add("displayNone");
				} else if(document.getElementById("UQ4e").value != "Yes") {
					//What to do with "Not Needed"/"Not Available"?
				}
				
			} else if(document.getElementById("UQ4").value != "due to commercial power" || document.getElementById("UQ4").value != "due to a power issue at the location" || document.getElementById("UQ4").value == "due to a power supply fault") { //Cause: NOT Power
			//shouldn't have to do anything for Cause changes
			}
			
			//[√] Outage Resolved
			if(document.getElementById("UA0").checked == true) { //Resolved
				for (let el of document.querySelectorAll('.FINAL')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.NFINAL')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone");
				for (let el of document.querySelectorAll('.WASIS')) el.classList.remove("displayNone");
				for (let el of document.querySelectorAll('.ISWAS')) el.classList.add("displayNone");

			} else if(document.getElementById("UA0").checked == false) { 
				for (let el of document.querySelectorAll('.FINAL')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.NFINAL')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.ETRETR')) el.classList.remove("displayNone");
			for (let el of document.querySelectorAll('.WASIS')) el.classList.add("displayNone");
			for (let el of document.querySelectorAll('.ISWAS')) el.classList.remove("displayNone");					
			}
		} else if(document.getElementById("UQ1").value == "No") {  //OnSite: NO
			for (let el of document.querySelectorAll('.NONSITE')) el.classList.remove("displayNone"); 
			if(document.getElementById("UQ1b").value == "Yes") {
				for (let el of document.querySelectorAll('.NACCESS')) el.classList.remove("displayNone"); 
			} else if(document.getElementById("UQ1b").value == "No") {
				for (let el of document.querySelectorAll('.ACCESS')) el.classList.remove("displayNone"); 
			} if(document.getElementById("UQ1b").value == "") { 
				//do nothing
			}
		} else if(document.getElementById("UQ1").value == "") {
			for (let el of document.querySelectorAll('.Fiorm')) el.classList.add("displayNone"); 
			for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone"); 
			for (let el of document.querySelectorAll('.BEFORE')) el.classList.remove("displayNone"); 
		}






break;
	case "Update After":
//Always: Update After
	for (let el of document.querySelectorAll('.NOTIFICATIONS')) el.classList.remove("displayNone");
	for (let el of document.querySelectorAll('.EMAIL')) el.classList.add("displayNone");			
	for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone"); 
	for (let el of document.querySelectorAll('.AFTER')) el.classList.remove("displayNone"); 
	for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.remove("displayNone"); 
	for (let el of document.querySelectorAll('.GA')) el.classList.remove("displayNone");
	//Show on site or not on site in update after 
	for (let el of document.querySelectorAll('.ONsiteNot')) el.classList.remove("displayNone");
		
			if(document.getElementById("UQ4").value == "due to commercial power") { //Cause: Comm Pwr
				for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.NLP')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.LP')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.add("displayNone"); 
				if(document.getElementById("UQ4e").value == "Yes") { //Generator checkbox
					for (let el of document.querySelectorAll('.PSQMTAopt4')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.GENInfo')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.PSGEN')) el.classList.add("displayNone"); 
				} 
				if(document.getElementById("UQ4e").value == "YesTI") { //Truck INverter
					for (let el of document.querySelectorAll('.PSQMTAopt4')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.GENInfo')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.PSGEN')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.GENTI')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.NLP')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.LP')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone"); 
				} else if(document.getElementById("UQ4e").value != "Yes") {
					//What to do with "Not Needed"/"Not Available"?
				}
				
			} else if(document.getElementById("UQ4").value == "due to a power issue at the location") { //Cause: Local Pwr
				for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.NLP')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.LP')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.add("displayNone"); 
			} else if(document.getElementById("UQ4").value == "due to a power supply fault") { //Cause: Comm Pwr
				for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.NLP')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.LP')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.add("displayNone"); 
				if(document.getElementById("UQ4e").value == "Yes") { //Generator checkbox
					for (let el of document.querySelectorAll('.PSQMTAopt4')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.GENInfo')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.PSGEN')) el.classList.add("displayNone"); 
				}
				if(document.getElementById("UQ4e").value == "YesTI") { //Truck INverter
					for (let el of document.querySelectorAll('.PSQMTAopt4')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.GENInfo')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.PSGEN')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.GENTI')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.NLP')) el.classList.remove("displayNone"); 
					for (let el of document.querySelectorAll('.LP')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone"); 
					for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone"); 
				} else if(document.getElementById("UQ4e").value != "Yes") {
					//What to do with "Not Needed"/"Not Available"?
				}
				
			} else { 
				//Cause: NOT Power
			//shouldn't have to do anything for Cause changes 
			}
			
			
			//[√] Outage Resolved
			if(document.getElementById("UA0").checked == true) { //Resolved
				for (let el of document.querySelectorAll('.FINAL')) el.classList.remove("displayNone"); 
				for (let el of document.querySelectorAll('.NFINAL')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.NEXTSTEPS')) el.classList.add("displayNone"); 
				for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone");
				for (let el of document.querySelectorAll('.WASIS')) el.classList.remove("displayNone");
				for (let el of document.querySelectorAll('.ISWAS')) el.classList.add("displayNone");
				if(document.getElementById("UQ4").value == "due to commercial power" || document.getElementById("UQ4").value == "due to a power issue at the location") { //Cause: Power
				for (let el of document.querySelectorAll('.F22')) el.classList.add("displayNone");
			}

			}



		
break;
	case "PSQMTA":
//Always
		for (let el of document.querySelectorAll('.NOTIFICATIONS')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.EMAIL')) el.classList.add("displayNone");			
		for (let el of document.querySelectorAll('.NOTIFICATIONS')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.EMAIL')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.PSQMTA')) el.classList.remove("displayNone");
		Power("Keep")

if(document.getElementById("UA0").checked == true) {
		Final();
	}
	
break;
	case "CBT": //CBT Only
		for (let el of document.querySelectorAll('.NOTIFICATIONS')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.EMAIL')) el.classList.add("displayNone");			
		myUpdate();
break;
	case "RepY6":
		for (let el of document.querySelectorAll('.Reppy6')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NOTIFICATIONS')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EMAIL')) el.classList.remove("displayNone");
		
		if(document.getElementById("NumRepsY6").value>=1) {
			for (let el of document.querySelectorAll('.Reppy6a')) el.classList.remove("displayNone");
		}
break;	
	case "RepOut":
		for (let el of document.querySelectorAll('.RepZV')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.NOTIFICATIONS')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.EMAIL')) el.classList.remove("displayNone");
		
		tear = document.getElementById("NumRepsZV").value
		if(parseInt(tear.substring(4,5))>0) {
			for (let el of document.querySelectorAll('.RepZVa')) el.classList.remove("displayNone");
		}
break;
	case "EBTechNot":
		//Always Update Before: Tech Name, is tech on site
for (let el of document.querySelectorAll('.NOTIFICATIONS')) el.classList.remove("displayNone");
for (let el of document.querySelectorAll('.EMAIL')) el.classList.add("displayNone");			
for (let el of document.querySelectorAll('.INITUPDATE')) el.classList.remove("displayNone"); 
for (let el of document.querySelectorAll('.BEFORE')) el.classList.remove("displayNone"); 
for (let el of document.querySelectorAll('.GA')) el.classList.remove("displayNone"); 
for (let el of document.querySelectorAll('.WhyNoAccessP')) el.classList.remove("displayNone");



//Then the What IFs:
		if(document.getElementById("UQ1").value == "No") {  //OnSite: NO
			for (let el of document.querySelectorAll('.NONSITE')) el.classList.remove("displayNone"); 
			
		if(document.getElementById("UQ1b").value == "Yes") {
			for (let el of document.querySelectorAll('.NACCESS')) el.classList.remove("displayNone"); 
			for (let el of document.querySelectorAll('.WhyNoAccessP')) el.classList.remove("displayNone");
		} else  if(document.getElementById("UQ1b").value == "No") { 
			for (let el of document.querySelectorAll('.NoEBMode')) el.classList.add("displayNone"); 
			for (let el of document.querySelectorAll('.WhyNoAccessN')) el.classList.remove("displayNone");
			}
		}
	break;

	}
myUpdate();		
}

function RepeatBreadCrumb(){
	tare = document.getElementById("NumRepsZV").value
	Tier = tare.substring(7,tare.length)
	TierLV = tare.substring(0,5)
	MA = document.getElementById("MA").value
	Hub = document.getElementById("HubHub").value
	Node = document.getElementById("RepNode").value
	Details = document.getElementById("RepZVComments").value


 	BC = "***Repeat Outage! " + Tier + "***" + "\n" + Details

	document.getElementById("RepeatBCBox").innerHTML = BC
}



function RepUpdate(){
Stile = document.getElementById("NoteType").value
	MA = document.getElementById("MA").value
	Hub = document.getElementById("HubHub").value
	Node = document.getElementById("RepNode").value
	LH = document.getElementById("RepLH").value
	Acct = document.getElementById("RepCustAcct").value
	Addy = document.getElementById("RepCustAddy").value
	tare = document.getElementById("NumRepsZV").value
	Tier = tare.substring(7,tare.length)
	TierLV = tare.substring(0,5)
	RepTech = document.getElementById("RepTech").value
	Details = document.getElementById("RepZVComments").value
	PWOTotalY6Format = document.getElementById("PWOTotalY6Format").value
	PWOTotalFormat = document.getElementById("PWOTotalFormat").value
	RepOutages = document.getElementById("RepOutages").value
	RepY6 = document.getElementById("RepY6").value
	RepY7 = document.getElementById("RepY7").value
	RepZZ = document.getElementById("RepZZ").value



if(Stile == "RepY6"){	

	document.getElementById("RepeatNote").innerHTML = "Subject:\nRepeat Y6 Created! " + MA + " > " + Hub + " > " + Node + "\n\nBody:\nRepeat Y6 Created for " + Acct + " @ " + Addy + "\n\t• https://lighthouse.charter.com/#/order/" + LH + "\n\n" + "[Paste Previous WO Info Here]\n\n"
} else if(Stile == "RepOut"){	

	document.getElementById("RepeatNote").innerHTML = 
	"Subject:\n" + TierLV + " >" + " Repeat Outage! Northwest > " + MA + " > " + Hub + " > " + Node + "\n\nBody:\n\t• Northwest > " + MA + " > " + Hub + " > " + Node + "\n\t• " + Tier + "\n\t• https://lighthouse.charter.com/#/order/" + LH + "\n\n" + RepTech + " has been dispatched to investigate. " + Details + "\r\r" + "Orders in the last 10 days" + "\n" + "Outages: " + RepOutages + "\nY6's: " + RepY6 + "\nY7's: " + RepY7 + "\nZZ's: " + RepZZ + "\n\n[Paste Triage Screenshot Here]"
	

	
}
}

function ETS(){

	ETSTotal = document.getElementById("ETSTotal").value
	ETSCount = document.getElementById("ETSCount").value
	ETSCaused = document.getElementById("ETSCaused").value
	ETSNumLoc = document.getElementById("ETSNumLoc").value
	ETSAdd = document.getElementById("ETSAdd").value
	ETSCx = document.getElementById("ETSCx").value
	ETSChallenges = document.getElementById("ETSChallenges").value
	ETSETR = document.getElementById("ETSETR").value
	ETSCurrent = document.getElementById("ETSCurrent").value

 if (document.getElementById("NoteType").value == "ENOC/ETS"){

	for (let el of document.querySelectorAll('.ETS')) el.classList.remove("displayNone");


	var ArielUnder="";
	if (document.getElementById("ETSAriel").checked == true) ArielUnder="Ariel";
	if (document.getElementById("ETSUnder").checked == true) ArielUnder="Underground";

	var PermTemp="";
	if (document.getElementById("ETSPerm").checked == true) PermTemp="Permanent";
	if (document.getElementById("ETSTemp").checked == true) PermTemp="Temporary";


	document.getElementById("Desc").innerHTML = 

	  "- Fiber Count Total: " + ETSTotal + "\r"
	+ "		- # of /bundles and count: " + ETSCount + "\r"
	+ "- Type of Damage/Cause: " + ETSCaused + "\r"
	+ "		- # of damage locations: " + ETSNumLoc + "\r"
	+ "- Damage Location (Address): " + ETSAdd + "\r"
	+ "		- Aerial/Underground: " + ArielUnder + "\r"
	+ "- Repair (Temp or Permanent): " + PermTemp + "\r"
	+ "- Ability to Prioritize/Reroute TSP or Premier/CTBH Customer Circuits? (if applicable): " + ETSCx + "\r"
	+ "- Challenges: " + ETSChallenges + "\r"
	+ "- ETR: " + FormatTime(document.getElementById("ETSETR").value) + " MT." + "\r"
	+ "- Current Status: " + ETSCurrent

 }
	


}

function HubLoad(value){
	
	MA=document.getElementById("MA").value;
document.getElementById("HubHub").innerHTML = "<option></option>";

	if (MA == "Mountain States") {
			var HubOptions = "";
			for (MAid in HubsByMA[value]) {
				HubOptions += "<option>" + HubsByMA[value][MAid] + "</option>";
				}
			document.getElementById("HubHub").innerHTML = HubOptions;
	}

	if (MA == "Pacific Northwest") {

			var HubOptions = "";
			for (MAid in HubsByMA[value]) {
				HubOptions += "<option>" + HubsByMA[value][MAid] + "</option>";
				}
			document.getElementById("HubHub").innerHTML = HubOptions;
	}

	if (MA == "Sierra Nevada") {		

			var HubOptions = "";
			for (MAid in HubsByMA[value]) {
				HubOptions += "<option>" + HubsByMA[value][MAid] + "</option>";
				}
				document.getElementById("HubHub").innerHTML = HubOptions;
	}
	
}


function PwrHub() {
	
	//ShowHide for Power Company Hub Link
	PHub = "." + document.getElementById("PowerHub").value
	
	for (let el of document.querySelectorAll('.HUBB')) el.classList.add("displayNone"); 
	for (let el of document.querySelectorAll(PHub)) el.classList.remove("displayNone"); 
	
	
	
}

function GenDep(){
	
	if(document.getElementById("GENRefuel").value == "1969-01-01T00:00") {
		document.getElementById("GENRefuel").value = currentTIME("Yes")
	}
	
	if(document.getElementById("UQ4e").value == "Yes"){
		for (let el of document.querySelectorAll(".PSQMTAopt4")) el.classList.remove("displayNone"); 	
		for (let el of document.querySelectorAll(".PSQMTAopt6")) el.classList.remove("displayNone"); 	
		for (let el of document.querySelectorAll('.GeN')) el.classList.remove("displayNone"); //Genn Address
		for (let el of document.querySelectorAll(".GENInfo")) el.classList.remove("displayNone"); //add in Generator Template "SN" and "POC" etc...
		for (let el of document.querySelectorAll('.PSGEN')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.GENTI')) el.classList.add("displayNone");
	} 
	if(document.getElementById("UQ4e").value == "YesTI") { //Truck INverter
		for (let el of document.querySelectorAll('.PSQMTAopt4')) el.classList.add("displayNone"); 
		for (let el of document.querySelectorAll('.GENInfo')) el.classList.add("displayNone"); 
		for (let el of document.querySelectorAll('.PSGEN')) el.classList.add("displayNone"); 
		for (let el of document.querySelectorAll('.GENTI')) el.classList.add("displayNone"); 
		for (let el of document.querySelectorAll('.COMMPOWER')) el.classList.remove("displayNone"); 
		for (let el of document.querySelectorAll('.NLP')) el.classList.remove("displayNone"); 
		for (let el of document.querySelectorAll('.LP')) el.classList.add("displayNone"); 
		for (let el of document.querySelectorAll('.NCOMMPOWER')) el.classList.add("displayNone"); 
		for (let el of document.querySelectorAll('.ETRETR')) el.classList.add("displayNone");  
	} else if(document.getElementById("UQ4e").value == "No" || document.getElementById("UQ4e").value == "NA"){
		for (let el of document.querySelectorAll(".PSQMTAopt4")) el.classList.add("displayNone");	
		for (let el of document.querySelectorAll(".PSQMTAopt6")) el.classList.add("displayNone");		
		for (let el of document.querySelectorAll('.GeN')) el.classList.add("displayNone"); //Genn Address		
		for (let el of document.querySelectorAll('.GENInfo')) el.classList.add("displayNone");
	}
myUpdate();
}
function AllTimes(){

	if (document.getElementById("IQ2").value == "1969-01-01T00:00"){
		document.getElementById("IQ2").value = currentTIME("No");
	}

	if (document.getElementById("IQ4a").value == "1969-01-01T00:00"){
		document.getElementById("IQ4a").value = currentTIME("No");
	}

	if (document.getElementById("UQ1a").value == "1969-01-01T00:00"){
		document.getElementById("UQ1a").value = currentTIME("No");
	}

	if (document.getElementById("UQ1bi").value == "1969-01-01T00:00"){
		document.getElementById("UQ1bi").value = currentTIME("No");
	}	

	if (document.getElementById("UQ1c").value == "1969-01-01T00:00"){
		document.getElementById("UQ1c").value = currentTIME("No");
	}	

	if (document.getElementById("CPUETA").value == "1969-01-01T00:00"){
		document.getElementById("CPUETA").value = currentTIME("No");
	}	

	if (document.getElementById("UQ4c").value == "1969-01-01T00:00"){
		document.getElementById("UQ4c").value = currentTIME("No");
	}		

	if (document.getElementById("GENRefuel").value == "1969-01-01T00:00"){
		document.getElementById("GENRefuel").value = currentTIME("No");
	}	

	if (document.getElementById("UQ5").value == "1969-01-01T00:00"){
		document.getElementById("UQ5").value = currentTIME("No");
	}

	if (document.getElementById("UA4").value == "1969-01-01T00:00"){
		document.getElementById("UA4").value = currentTIME("No");
	}
	if (document.getElementById("startTime").value == "1969-01-01T00:00"){
		document.getElementById("startTime").value = currentTIME("No");
	}
	if (document.getElementById("ETSETR").value == "1969-01-01T00:00"){
		document.getElementById("ETSETR").value = currentTIME("No");
	}
	
	
myUpdate()	
}
function Califunction(){

	CaliCheck = document.getElementById("Cali").checked

	if (CaliCheck == true) { //show "how many?"
		for (let el of document.querySelectorAll('.GAC')) el.classList.remove("displayNone");
	} else if (CaliCheck != true) { //hide "how many?"
		for (let el of document.querySelectorAll('.GAC')) el.classList.add("displayNone");
	}
}

function GA(){

	GACheck = document.getElementById("GAA").checked

	if (GACheck == true) { //show "how many?"
		for (let el of document.querySelectorAll('.GA2')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.GAStandby')) el.classList.remove("displayNone");
	} else if (GACheck != true) { //hide "how many?"
		for (let el of document.querySelectorAll('.GA2')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.GAStandby')) el.classList.add("displayNone");
	}
}


function Everbridge(){
EBMode = document.getElementById("EverbridgeMode").checked
//off
if(EBMode == true) {
	document.getElementById("EverButton").value = "Everbridge? [ ]"
	document.getElementById("EverbridgeMode").checked = false
	document.getElementById("NoteType").value = ""
	document.getElementById("UQ1").disabled = false
	document.getElementById("UQ1").value = " "
	document.getElementById("UQ1b").value = " "
	ReVis();

	for (let el of document.querySelectorAll('.EBLink')) el.classList.add("displayNone");

	for (let el of document.querySelectorAll('.menuTu')) el.classList.add("menu");
	for (let el of document.querySelectorAll('.menuTu')) el.classList.remove("menuTu");
	
	for (let el of document.querySelectorAll('.mainTu')) el.classList.add("main");
	for (let el of document.querySelectorAll('.mainTu')) el.classList.remove("mainTu");
	for (let el of document.querySelectorAll('.NoEBMode')) el.classList.remove("displayNone");
	for (let el of document.querySelectorAll('.YesEBMode')) el.classList.add("displayNone");

}//on
 else if(EBMode == false) {
	document.getElementById("EverButton").value = "Everbridge? [√]"
	document.getElementById("EverbridgeMode").checked = true
	document.getElementById("IQ1-VM").checked = false
	document.getElementById("PS1-VM").checked = false
	document.getElementById("NoteType").value = ""
	document.getElementById("UQ1").disabled = true
	document.getElementById("UQ1").value = "No"
	document.getElementById("UQ1b").value = ""
	ReVis();
	myUpdate();

	for (let el of document.querySelectorAll('.EBLink')) el.classList.remove("displayNone");
	
	for (let el of document.querySelectorAll('.menu')) el.classList.add("menuTu");
	for (let el of document.querySelectorAll('.menu')) el.classList.remove("menu");
	
	for (let el of document.querySelectorAll('.main')) el.classList.add("mainTu");
	for (let el of document.querySelectorAll('.main')) el.classList.remove("main");	
	for (let el of document.querySelectorAll('.NoEBMode')) el.classList.add("displayNone");
	for (let el of document.querySelectorAll('.YesEBMode')) el.classList.remove("displayNone");

}

EBMode = document.getElementById("EverbridgeMode").checked


}

