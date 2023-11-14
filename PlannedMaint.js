function chngApprover() {
	//Variables
	MA = document.getElementById("Q0").value;			//MA
	Valu = document.getElementById("Q1").value;			//Option Selected: FECC etc...
	Why7 = document.getElementById("CritY7").checked;	//Y7 Checkbox
	AO = " ";											//Blank String to fill in
	

	if (Valu == "Cash Pass") {
		if (MA == "Sierra Nevada" || MA == "Pacific Northwest" || MA == "Mountain States") {
			AO = '<option label=" "></option><option value="Cash Pass">Cash Pass</option>'
		}
	}else if (Valu == Why7 == true)  { //Critical Y7
		if (MA == "Mountain States") {
			AO = '<option label=" "></option><option value="AVP">AVP</option><option value="DFE">DFE</option>';
		}
		if (MA == "Pacific Northwest") {
			AO = '<option label=" "></option><option value="AVP">AVP</option><option value="DFE">DFE</option>';
		}
		if (MA == "Sierra Nevada") {
			AO = '<option label=" "></option><option value="AVP">AVP</option><option value="DFE">DFE</option>';
		}
	} else if (Valu != "Fast Pass" && Why7 != true) { //No Fastpass/Y7 Critical
		if (MA == "Mountain States") { 
			AO = '<option label=" "></option><option value="AVP">AVP</option><option value="DFE">DFE</option>';
		}
		if (MA == "Pacific Northwest") { 
			AO = '<option label=" "></option><option value="AVP">AVP</option><option value="DFE">DFE</option>';
		}		
		if (MA == "Sierra Nevada") { 
			AO = '<option label=" "></option><option value="AVP">AVP</option><option value="DFE">DFE</option>';
		}
	} else if (Valu == "Fast Pass") {// Fast Pass
		if (MA == "Mountain States") {
			AO = '<option label=" "></option><option value="DFE">DFE</option>';
		}
		if (MA == "Pacific Northwest") {
			AO = '<option label=" "></option><option value="DFE">DFE</option>';
		}
		if (MA == "Sierra Nevada") {
			AO = '<option label=" "></option><option value="DFE">DFE</option>';
		}}

	//either way, if NO MA or no Value selected, keep it blank
	if (MA == "" || Valu == "") {
		AO = " ";
	}

	//write to the options	
	document.getElementById("Q7").innerHTML = AO;
	myLHDesc();
}

//Copy to clipboard Scripts

//Copy Lighthouse Description
var copyLHDescBtn = document.querySelector(".CopyDesc");

copyLHDescBtn.addEventListener("click", function(event) {
   var copyLHDesc = document.querySelector("#LHDesc");

                var x;
    x = document.getElementById("rep").value;
                if (x == "") {
        alert("Please select your name");
                                document.getElementById("rep").focus()
                }
                else{
                                copyLHDesc.select();
                }
	try {
	   var successful = document.execCommand("copy");
	   var msg = successful ? "successful" : "unsuccessful";
	   console.log("Copying text command was " + msg);
	} catch (err) {
	   console.log("Oops, unable to copy");
   }
});

//to unhide questions if Override is selected
document.getElementById('Q1').addEventListener('change', function() {



 var Y7orBOTOT = this.value == 'BOTOT' || this.value == 'Overrun' ? true : false;

 
  
  var overr = this.value == 'Override' ? false : true;

  if (document.getElementById('Q1').value != 'Override') {
		
		document.getElementById('ORide').checked = false;
  }
  
  
  document.getElementById('ORide').disabled = Y7orBOTOT; 
  document.getElementById('Q8').disabled = true;
  document.getElementById('Q8').value = "";
  document.getElementById('Q9').disabled = true;
  document.getElementById('Q9').value = "";
    
  document.getElementById('Q3').disabled = Y7orBOTOT;
  document.getElementById('Q4').disabled = Y7orBOTOT;
  document.getElementById('Q5').disabled = Y7orBOTOT;
  document.getElementById('Q6').disabled = Y7orBOTOT;
  document.getElementById('Q7').disabled = Y7orBOTOT;
  
  document.getElementById('Q10').disabled = Y7orBOTOT; 
  document.getElementById('Q11').disabled = Y7orBOTOT; 
  
  
   if (overr == false) {
		
        document.getElementById('ORide').checked = true;
        document.getElementById('ORide').disabled = overr; 
        OvRide();
	}
  
});
  
  
function OvRide(){

	//False if Either Override Option/Checkbox is selected - to disable Override Only items

	var style = document.getElementById('ORide').checked == true || document.getElementById('Q1').value == 'Override' ? false : true;

	var Reezon = "Override";
	var ApprovalOptions = "";

	if (document.getElementById("Q0").value == 'Mountain States') {
	
		for (ApproveId in MTSApprovedBy["DFE"]) {
			ApprovalOptions += "<option>" + MTSApprovedBy["DFE"][ApproveId] + "</option>";
		}
		for (ApproveId in MTSApprovedBy["MT Manager"]) {
			ApprovalOptions += "<option>" + MTSApprovedBy["MT Manager"][ApproveId] + "</option>";
		}
		for (ApproveId in MTSApprovedBy["MT Supervisor"]) {
			ApprovalOptions += "<option>" + MTSApprovedBy["MT Supervisor"][ApproveId] + "</option>";
		}
	}

	if (document.getElementById("Q0").value == 'Pacific Northwest') {
	
		for (ApproveId in PNWApprovedBy["DFE"]) {
			ApprovalOptions += "<option>" + PNWApprovedBy["DFE"][ApproveId] + "</option>";
		}
		for (ApproveId in PNWApprovedBy["MT Manager"]) {
			ApprovalOptions += "<option>" + PNWApprovedBy["MT Manager"][ApproveId] + "</option>";
		}
		for (ApproveId in PNWApprovedBy["MT Supervisor"]) {
			ApprovalOptions += "<option>" + PNWApprovedBy["MT Supervisor"][ApproveId] + "</option>";
		}
	}
  
	if (document.getElementById("Q0").value == 'Sierra Nevada') {
	
		for (ApproveId in SNVApprovedBy["DFE"]) {
			ApprovalOptions += "<option>" + SNVApprovedBy["DFE"][ApproveId] + "</option>";
		}
		for (ApproveId in SNVApprovedBy["MT Manager"]) {
			ApprovalOptions += "<option>" + SNVApprovedBy["MT Manager"][ApproveId] + "</option>";
		}
		for (ApproveId in SNVApprovedBy["MT Supervisor"]) {
			ApprovalOptions += "<option>" + SNVApprovedBy["MT Supervisor"][ApproveId] + "</option>";
		}		
	}

	document.getElementById("Q8").innerHTML = ApprovalOptions;

	if(document.getElementById('ORide').checked == false)  {
		style = true;
		if(document.getElementById('Q1').value != 'Override'){
			var Reezon = document.getElementById('Q1').value;
		} else { 
			var Reezon = ""
		}
	}

	document.getElementById('Q8').disabled = style;
	document.getElementById('Q9').disabled = style;
	document.getElementById('Q8').value = "";
	document.getElementById('Q9').value = ""; 
	document.getElementById('Q1').value = Reezon;  
	document.getElementById('ORide').checked = !style; 
}

function store_value(value1,value2){
	sessionStorage.setItem(value1,value2);
}

function changeApproval(value) {
	MA = document.getElementById("Q0").value;

	if (MA == "Mountain States") {
		if (value.length == 0) {
			document.getElementById("Q6").innerHTML = "<option></option>";
		} else {
			var ApprovalOptions = "";
			for (ApproveId in MTSApprovedBy[value]) {
				ApprovalOptions += "<option>" + MTSApprovedBy[value][ApproveId] + "</option>";
			}
			document.getElementById("Q6").innerHTML = ApprovalOptions;
		}
	}

	if (MA == "Pacific Northwest") {
		if (value.length == 0) {
			document.getElementById("Q6").innerHTML = "<option></option>";
		} else {
			var ApprovalOptions = "";
			for (ApproveId in PNWApprovedBy[value]) {
				ApprovalOptions += "<option>" + PNWApprovedBy[value][ApproveId] + "</option>";
			}
			document.getElementById("Q6").innerHTML = ApprovalOptions;
		}
	}

	if (MA == "Sierra Nevada") {
		if (value.length == 0) {
			document.getElementById("Q6").innerHTML = "<option></option>";
		}else {
			var ApprovalOptions = "";
			for (ApproveId in SNVApprovedBy[value]) {
				ApprovalOptions += "<option>" + SNVApprovedBy[value][ApproveId] + "</option>";
			}
			document.getElementById("Q6").innerHTML = ApprovalOptions;
		}
	}	

}

function MAHIDE() {
document.getElementById("Q6").value = "";
AO = " ";
Why7 = " ";
document.getElementById("Q6").innerHTML = AO;
Why7 = document.getElementById("CritY7").checked ;
}




//Populates the Remedy Work Log
function myLHDesc() {
	
	var a =  document.getElementById("Q1").value;
	var b =  document.getElementById("rep").value;
	var c =  document.getElementById("Q3").value;
	var d =  document.getElementById("Q4").value;
	var e =  document.getElementById("Q5").value;
	var f =  document.getElementById("Q6").value;
	var g =  document.getElementById("Q7").value;
	var h =  document.getElementById("Q8").value;
	var i =  document.getElementById("Q9").value;
	var j =  "LH" + document.getElementById("Q10").value;
	var k =  " - " + document.getElementById("Q11").value;
	var l =  document.getElementById("Q12").value;
	var m =  document.getElementById("Q13").value;

	if (document.getElementById("Q1").value == "Cash Pass") {
		l = "Cash Pass"
	}
	
	if (a == "ROC Impairment Deflection" || a == "BOTOT" || a == "Overrun" || a == "REACT") {
		c=a;d=a;e=a;f=a;g=a;h=a;i=a;j=a;k="";l=a;m=a;
		
	}

	document.getElementById("LHDesc").innerHTML = 
		  "1. Reason for Interruption " + a + "\r"
		+ "2. Impairment Validated by " + b + "\r"
		+ "3. Plant Interruption Location " + c +"\r"
		+ "4. Customer Impact of Interruption " + d + "\r"
		+ "5. Planned Interruption Length " + e + "\r"
		+ "6. Interruption Approved by " + f + "\r"
		+ "7. Approved by Title " + g + "\r"
		+ "8. If Override, Override Approved By "  + h + "\r"
		+ "9. If Override, Reason for Override " + i + "\r"
		+ "10. LH Order # and Node: " + j + k + "\r"
		+ "11. COV Overridden: " + l + "\r"
		+ "12. Reason This Couldn't Be Done Inside The Maintenance Window: " + m

	

}


//Declare Global Variables for Help section in the footer

//Get the modal
var modal = document.getElementById('myModal');

//Get Remedy Work Log image
var img = document.getElementById('DMGuidelines');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = 'Images/DMGuidelines.png';
	captionText.innerHTML = 'Guidelines for planned maintenance approval.';
}

//Allows Modal to be closed using close button

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

function BlockCOV() {

Q1 = document.getElementById("Q1").value;

	if (Q1 == "Cash Pass") {
		document.getElementById("Q12").disabled = true;
	}
}