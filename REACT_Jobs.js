function showhide() {

    if (document.getElementById("typeoforder").value == "Initial") {
        for (let el of document.querySelectorAll('.section1')) el.classList.add("displayNone");
        for (let el of document.querySelectorAll('.section2')) el.classList.remove("displayNone");
        for (let el of document.querySelectorAll('.section3')) el.classList.add("displayNone");
        for (let el of document.querySelectorAll('.section4')) el.classList.add("displayNone");
    } else if (document.getElementById("typeoforder").value == "Close") {

        for (let el of document.querySelectorAll('.section1')) el.classList.remove("displayNone");
        for (let el of document.querySelectorAll('.section2')) el.classList.add("displayNone");
        for (let el of document.querySelectorAll('.section3')) el.classList.add("displayNone");
        for (let el of document.querySelectorAll('.section4')) el.classList.add("displayNone");
    } else if (document.getElementById("typeoforder").value == "Approval") {
        for (let el of document.querySelectorAll('.section1')) el.classList.add("displayNone");
        for (let el of document.querySelectorAll('.section2')) el.classList.add("displayNone");
        for (let el of document.querySelectorAll('.section3')) el.classList.remove("displayNone");
        for (let el of document.querySelectorAll('.section4')) el.classList.add("displayNone");
    } else if (document.getElementById("typeoforder").value == "Update") {
        for (let el of document.querySelectorAll('.section1')) el.classList.add("displayNone");
        for (let el of document.querySelectorAll('.section2')) el.classList.add("displayNone");
        for (let el of document.querySelectorAll('.section3')) el.classList.add("displayNone");
        for (let el of document.querySelectorAll('.section4')) el.classList.remove("displayNone");
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
 return notes;
}

function CreateNote2() {
    let who = document.getElementById("who").value;
    let deflections = document.getElementById("deflections").value;
    let why = document.getElementById("why").value;
    let Approved = document.getElementById("Approved").value;
    let node = document.getElementById("node").value;

    let notes = `At this time ${who} is requesting call deflection in node ${node}. There have been ${deflections} deflections for this ticket to date. They are requesting deflection this time for the purpose to ${why}. Please let us know if you approve or not.`

    return notes;
    
}

function CreateNote3() {
    let who = document.getElementById("who").value;
    let deflections = document.getElementById("deflections").value;
    let why = document.getElementById("why").value;
    let Approved = document.getElementById("Approved").value;
    let node = document.getElementById("node").value;

    let final = `Where: ${node}
Who: ${who}
Why: ${why}
Approved: ${Approved}`

    
    return final;
    
}

function CreateNote4() {
    let close = document.getElementById("closeDate").value;
    let health = document.getElementById("nodeHealth").value;
    let top5 = document.getElementById("top5").value;
    let approval = document.getElementById("DFEMGR").value;
    let note = document.getElementById("notes").value;

    let notes = `Closure Date: ${close}
Node Health Score: ${health}
Top 5%: ${top5}
Approval: ${approval}
Notes: ${note}`

    return notes
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

function copyBtn3() {
    navigator.clipboard.writeText(CreateNote2());
}

function copyBtn4() {
    navigator.clipboard.writeText(CreateNote3());
}

function copyBtn5() {
    navigator.clipboard.writeText(CreateNote4());
}




