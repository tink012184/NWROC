function showhide() {

    if (document.getElementById("typeoforder").value == "Initial") {

        for (let el of document.querySelectorAll('.section1')) el.classList.add("displayNone");
        for (let el of document.querySelectorAll('.section2')) el.classList.remove("displayNone");
    } else if (document.getElementById("typeoforder").value == "Close") {

        for (let el of document.querySelectorAll('.section1')) el.classList.remove("displayNone");
        for (let el of document.querySelectorAll('.section2')) el.classList.add("displayNone");
    } 



}

function Node() {
    
    var node = document.getElementById("node").value;

    return String(node);

}  

function CreateNoteCopy() {

    let notes = 
    `This REACT job has been closed.`
    return notes;


 
}

function CreateNote() {

    var alarmcount = document.getElementById("count-alarm").value;
    let alarmScore = document.getElementById("score-alarm").value;
    var LHWocount = document.getElementById("count-LHWO").value;
    let LHWoScore = document.getElementById("score-LHWO").value;
    var IVRcount = document.getElementById("count-IVR").value;
    let IVRscore = document.getElementById("score-IVR").value;
    var TCcount = document.getElementById("count-TC").value;
    var TCscore = document.getElementById("score-TC").value;
    var activity = document.getElementById("activity").value;
    var LHlink = document.getElementById("LH-link").value;
    var SSlink = "https://app.smartsheet.com/sheets/Hhcx52fJxxMPP77C6HvmjM2VfXjc3C34vX3VWCq1?view=grid&filterId=8651333020110724";

    
    let notes = `This notification is to alert you to a node driving high activity in your area. This node will need to be certified/optimized/swept. Once node certification/optimization/sweeping has been completed, the ROC will provide targets, as needed.
    Alarm count: ${alarmcount}
    Alarm score: ${alarmScore}
    LHWO count: ${LHWocount}
    LHWO score: ${LHWoScore}
    IVR calls: ${IVRcount}
    IVR calls score: ${IVRscore}
    TC count: ${TCcount}
    TC score: ${TCscore}
    ART Demand Score: ${activity}
    `
    /* LHWO Link: ${LHlink}
    Smartsheet Link: ${SSlink} */
 return notes;
}


var MA = document.getElementById("MA").value;
var hub = document.getElementById("hub").value;


/* var copyBtn = document.querySelector(".CopyBtn");

copyBtn.addEventListener("click", function(event) {
    CreateNote();
});
 */
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

    var management = "Shannon.Chapman@charter.com; ROC-NW-IV@charter.com; DL-Field-Ops-Eng-ROC-NW-Mgmt@charter.com;";

    var TechEmail = TechLoad(hub);

    let mailTo = "";
	 
	mailTo = "mailto:" + management + TechEmail + "?subject=" + MA + " - High Demand/REACT Node - Hub: " + hub + " - Node: " + node + "&body=" + encodeURIComponent("This email is to alert you to a node driving high activity in your area. This node will need to be certified/optimized/swept. Once node certification/optimization/sweeping has been completed, the ROC will provide targets, as needed.") + encodeURIComponent(CreateNoteEmail());

    document.location.href = mailTo;
}

function copyBtn2() {
        navigator.clipboard.writeText(CreateNoteCopy());
}

function copyBtn() {
    navigator.clipboard.writeText(CreateNote());
}




