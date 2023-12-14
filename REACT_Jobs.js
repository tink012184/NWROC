function showhide() {

    if (document.getElementById("typeoforder").value == "Initial") {

        for (let el of document.querySelectorAll('.section1')) el.classList.add("displayNone");
        for (let el of document.querySelectorAll('.section2')) el.classList.remove("displayNone");
    } else if (document.getElementById("typeoforder").value == "Update") {

        for (let el of document.querySelectorAll('.section1')) el.classList.remove("displayNone");
        for (let el of document.querySelectorAll('.section2')) el.classList.add("displayNone");
    } 



}

function Node() {
    
    var node = document.getElementById("node").value;

    return String(node);

}  

function CreateNoteCopy() {

    let node = document.getElementById("node").value;
    let Rank100 = document.getElementById("Rank100").value;
    let score = document.getElementById("score").value;
    let nodeHealth = document.getElementById("nodeHealth").value;
    let status = document.getElementById("status").value;
    let supApproval = document.getElementById("supApproval").value;
    let MGRDFE = document.getElementById("MGRDFE").value;
    let SP = document.getElementById("SP").value;


    if (document.getElementById("SP").value == "No"){
    let notes = 
    `    Node: ${node}
    ART Demand Top 100 Rank: ${Rank100}
        ART Demand Score: ${score}
    Node Health: ${nodeHealth}
    Order Status: ${status}
    Sup Approval(Email): ${supApproval}
    Manager/DFE Approval(Smartsheet): ${MGRDFE}
    Update: Please provide and update and/or approvals when available
    Is tech in Supervisor Project for entire shift: ${SP}
        Supervisor please place your REACT tech in supervisor project for the day to prevent other jobs from being routed to the tech. Exception for areas with only one tech.`;
    
    return notes;
    }else {
        let notes = 
    `    Node: ${node}
    ART Demand Top 100 Rank: ${Rank100}
        ART Demand Score: ${score}
    Node Health: ${nodeHealth}
    Order Status: ${status}
    Sup Approval(Email): ${supApproval}
    Manager/DFE Approval(Smartsheet): ${MGRDFE}
    Update: Please provide and update and/or approvals when available
    Is tech in Special Project for entire shift: ${SP}`;
    
    return notes;
    }

 
}

function CreateNoteEmail() {

    var alarmcount = document.getElementById("count-alarm").value;
    var LHWocount = document.getElementById("count-LHWO").value;
    var IVRcount = document.getElementById("count-IVR").value;
    var TCcount = document.getElementById("count-TC").value;
    var TCpercount = document.getElementById("count-TCper").value;
    var activity = document.getElementById("activity").value;
    var LHlink = document.getElementById("LH-link").value;
    var SSlink = "https://app.smartsheet.com/sheets/Hhcx52fJxxMPP77C6HvmjM2VfXjc3C34vX3VWCq1?view=grid&filterId=8651333020110724";

    
    let notes = "\nAlarm Count: " + alarmcount + "\nLHWO count: " + LHWocount + "\nIVR Calls: " + IVRcount + "\nTC Count: " + TCcount + "\nTC Per Account: " + TCpercount + "\nCombined Activity Score: " + activity + "\nLink to Lighthouse work order: " + LHlink + "\nLink to Smartsheet: " + SSlink + "\n\nROC Triage: \n\n" + "\n\n" + "\"Screenshots to support the ROC Triage\"";

 return notes;
}


var MA = document.getElementById("MA").value;
var hub = document.getElementById("hub").value;




var copyBtn = document.querySelector(".CopyBtn");

copyBtn.addEventListener("click", function(event) {
    generate();
});

function HubLoad(value){
	
	MA=document.getElementById("MA").value;
document.getElementById("hub").innerHTML = "<option></option>";

	if (MA == "Mountain States") {
			var HubOptions = "";
			for (MAid in HubsByMA[value]) {
				HubOptions += "<option>" + HubsByMA[value][MAid] + "</option>";
				}
			document.getElementById("hub").innerHTML = HubOptions;
	}

	if (MA == "Pacific Northwest") {

			var HubOptions = "";
			for (MAid in HubsByMA[value]) {
				HubOptions += "<option>" + HubsByMA[value][MAid] + "</option>";
				}
			document.getElementById("hub").innerHTML = HubOptions;
	}

	if (MA == "Sierra Nevada") {		

			var HubOptions = "";
			for (MAid in HubsByMA[value]) {
				HubOptions += "<option>" + HubsByMA[value][MAid] + "</option>";
				}
				document.getElementById("hub").innerHTML = HubOptions;
	}
	
}


function TechLoad(value){
	
	hub=document.getElementById("hub").value;

const element = document.getElementById('hub')
if (element) {
	var TechOptions = "";
		for (Techid in TechsByHub[value]) {
			TechOptions += TechsByHub[value][Techid];
			}
        return TechOptions;
}}

function generate(){

    var node = document.getElementById("node").value;

    var management = "Shannon.Chapman@charter.com; Tyler.Olson@charter.com; DL-Field-Ops-Eng-ROC-NW-ROC-IV@charter.com; DL-Field-Ops-Eng-ROC-NW-Mgmt@charter.com;";

    var TechEmail = TechLoad(hub);

    let mailTo = "";
	 
	mailTo = "mailto:" + management + TechEmail + "?subject=" + MA + " - High Demand/REACT Node - Hub: " + hub + " - Node: " + node + "&body=" + encodeURIComponent("This email is to alert you to a node driving high activity in your area. This node will need to be certified/optimized/swept. Once node certification/optimization/sweeping has been completed, the ROC will provide targets, as needed.") + encodeURIComponent(CreateNoteEmail());

    document.location.href = mailTo;
}

function copyBtn2() {
        navigator.clipboard.writeText(CreateNoteCopy());
}



function copyToClipboard() {
    var sentence = "1 hour of DM time per day outside of the maintenance window is permitted. DM work during the maintenance window on REACT jobs is BAU. Please utilize the “ART REACT” Webex chat for the enabling/disabling of deflection outside of maintenance ";
    var tempInput = document.createElement("input");
    tempInput.value = sentence;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

  }

  function copyToClipboard1() {
    var sentence = "window. Impairment Deflection will need to be enabled when this job is being worked (EN ROUTE/WIP). Impairment Deflection does not allow for plant to be taken down. Its purpose is to notify customers that there is a technician working in their area.";
    var tempInput = document.createElement("input");
    tempInput.value = sentence;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

  }

  function copyToClipboard2() {
    var sentence = " All updates need to be added to this thread daily. This includes what was swept, what has been replaced, what issues have been found, what improvements have been seen, where we left off, what the next steps are, etc.";
    var tempInput = document.createElement("input");
    tempInput.value = sentence;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

  }

  function copyToClipboard3() {
    var sentence = " Please feel free to reach out to the ROC 4 line if you need any assistance or have any questions or concerns. Thank you. ";
    var tempInput = document.createElement("input");
    tempInput.value = sentence;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

