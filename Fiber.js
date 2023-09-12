//Copy to clipboard Scripts

//Copy Lighthouse Description
var copyLHDescBtn = document.querySelector(".CopyDesc");

copyLHDescBtn.addEventListener("click", function(event) {
   var copyLHDesc = document.querySelector("#LHDesc");
   copyLHDesc.select();
  	try {
	   var successful = document.execCommand("copy");
	   var msg = successful ? "successful" : "unsuccessful";
	   console.log("Copying text command was " + msg);
	} catch (err) {
	   console.log("Oops, unable to copy");
   }
});
var copyLHDescBtn = document.querySelector(".CopyDesc4");

copyLHDescBtn.addEventListener("click", function(event) {
   var copyLHDesc = document.querySelector("#LHDesc4");
   copyLHDesc.select();
	try {
	   var successful = document.execCommand("copy");
	   var msg = successful ? "successful" : "unsuccessful";
	   console.log("Copying text command was " + msg);
	} catch (err) {
	   console.log("Oops, unable to copy");
   }
});

//Populates the Remedy Work Log
function myLHDesc() {
	
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
    var l =  document.getElementById("Q11").value; 
    var m =  document.getElementById("Q12").value; 
    var n =  document.getElementById("Q13").value; 
    var o =  document.getElementById("Q14").value; 
    var p =  document.getElementById("Q15").value; 
    var q =  document.getElementById("Q16").value; 
    var r =  document.getElementById("Q17").value; 
    var s =  document.getElementById("Q18").value; 
    var t =  document.getElementById("Q19").value; 
    var u =  document.getElementById("Q20").value; 
    var v =  document.getElementById("Q21").value; 
    var w =  document.getElementById("Q22").value; 
    var x =  document.getElementById("Q23").value; 
    var y =  document.getElementById("Q24").value; 
    var z =  document.getElementById("Q25").value; 
    var aa =  document.getElementById("Q26").value; 
    var ab =  document.getElementById("Q27").value; 
    var ax =  document.getElementById("Q49").value; 
    var ac =  document.getElementById("Q28").value; 
    var ad =  document.getElementById("Q29").value; 
    var ae =  document.getElementById("Q30").value; 
    var af =  document.getElementById("Q31").value;
    var ay =  document.getElementById("Q50").value;  
    var ag =  document.getElementById("Q32").value; 
    var ah =  document.getElementById("Q33").value; 
    var ai =  document.getElementById("Q34").value; 
    var aj =  document.getElementById("Q35").value; 
    var ak =  document.getElementById("Q36").value; 
    var al =  document.getElementById("Q37").value; 
    var am =  document.getElementById("Q38").value; 
    var an =  document.getElementById("Q39").value; 
    var ao =  document.getElementById("Q40").value; 
    var ap =  document.getElementById("Q41").value; 
    var aq =  document.getElementById("Q42").value; 
    var ar =  document.getElementById("Q43").value; 
    var as =  document.getElementById("Q44").value; 
    var at =  document.getElementById("Q45").value; 
    var au =  document.getElementById("Q46").value; 
    var av =  document.getElementById("Q47").value; 
    var aw =  document.getElementById("Q48").value; 


	document.getElementById("LHDesc").innerHTML = 
		
		  "***Fiber Template***" + "\r"
        + "Event POC " + a + "\r"
		+ "    Time Called " + c +"\r"
		+ "    Contact Time " + d + "\r"
		+ "    Arrival Time " + e + "\r"
        + "MT Engaged " + f + "\r"
		+ "    Time Called " + g +"\r"
		+ "    Contact Time " + h + "\r"
		+ "    Arrival Time " + i + "\r"
        + "ISP Tech " + j + "\r"
		+ "    Time Called " + k +"\r"
		+ "    Contact Time " + l + "\r"
		+ "    Arrival Time " + m + "\r"
        + "Splicer " + n + "\r"
		+ "    Time Called " + o +"\r"
		+ "    Contact Time " + p + "\r"
		+ "    Arrival Time " + q + "\r"
        + "Construction " + r + "\r"
		+ "    Time Called " + s +"\r"
		+ "    Contact Time " + t + "\r"
		+ "    Arrival Time " + u + "\r"
		+ "LBI Impact " + v + "\r"
		+ "LBI Customer Names " + w + "\r"
		+ "Carrier Backhaul Impact " + x + "\r"
        + "Is Coax Impacted " + y + "\r"
        + "What is the address of the fiber cut " + z + "\r"
        + "When was the fiber cut located " + aa + "\r"
        + "When was the fiber cut location site available " + ab + "\r"
        + "What is the count of hot (active) fibers? " + ax + "\r"
        + "What is the total fiber counts(s) " + ac + "\r"
        + "Estimated time of restoration " + ad + "\r"
        + "Restoration Plan Approved " + ae + "\r"
        + "First splice began " + af + "\r"
        + "First splice completed " + ay + "\r"
        + "    Additional timestamps if additional splicing occurs" + ag + "\r"
        + "Challenges faced " + ah +"\r"
        + "Plant recovery time " + ai + "\r"
        + "    Coax recovery " + aj + "\r"
        + "    Fiber recovery " + ak + "\r"
        + "Root cause of the fiber event " + al + "\r"
        + "    Why did this happen? " + am + "\r"
        + "Resolution " + an + "\r"
        + "    Temp or Permanent fix " + ao + "\r"
        + "(Underground only) Were locates performed and accurate?" + ap + "\r"
        + "(Aerial only) Did/Does the temporary fiber meet aerial clearance requirements? Can this span be moved underground? " + aq + "\r"
        + "(Third Party Damage/Vandalism only) Was PRG contacted? Claim number? " + ar + "\r"
        + "Were permanent repairs submitted via Prism? PRISM ID? " + as + "\r"
        + "Was there slack available prior to restoration? " + at + "\r"
        + "Is there slack available after restoration? " + au + "\r"
        + "Was an OTDR used, yes/no and by whom? " + av + "\r"
        + "Were we prepared to make all necessary repairs (test equipment, materials, etc.)? " + aw + "\r"

}
	//document.getElementById("Q11").value = style;


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