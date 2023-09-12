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
var copyLHDescBtn = document.querySelector(".CopyDesc2");

copyLHDescBtn.addEventListener("click", function(event) {
   var copyLHDesc = document.querySelector("#LHDesc2");
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
	var q =  document.getElementById("Q16").value; 
    

	document.getElementById("LHDesc").innerHTML = 
		
		  "MT Name " + a + "\r"
		+ "MT Phone # " + c +"\r"
		+ "MT Contact Time " + d + "\r"
		+ "ROC Supervisor " + e + "\r"
        + "ROC Contact Time " + f + "\r"
		+ "MT Supervisor " + g +"\r"
		+ "MT Sup Phone # " + h + "\r"
		+ "Contact Time " + i + "\r"
        + "POC " + j + "\r"
		+ "POC Phone # " + k +"\r"
		+ "Austin NOC Contact Time " + l + "\r"
		+ "Austin NOC Alarms " + m + "\r"
        + "SE NOC Contact Time " + n + "\r"
		+ "SE NOC Alarms " + o +"\r"
		+ "ROC to NOC Dual Dispatch # " + q + "\r"
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