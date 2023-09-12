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
/*     var l =  document.getElementById("Q11").value;
    var m =  document.getElementById("Q12").value; */
	var n =  document.getElementById("Q13").value;
	var o =  document.getElementById("Q14").value;
	var t =  document.getElementById("Q19").value;
	var u =  document.getElementById("Q11a").value;
	var v =  document.getElementById("Q11b").value;
	var w =  document.getElementById("Q11c").value;

	if(document.getElementById("Q18").checked){
	document.getElementById("LHDesc").innerHTML = 
		
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
		+ "Ping Stats" + "\r" + n + "\r"
		+ "SNR " + "\r" + o + "\r"
		+ "CBT Reason " + t + "\r"

	}
else{
		document.getElementById("LHDesc").innerHTML = 
		
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
		+ "Ping Stats" + "\r" + n + "\r"
		+ "SNR " + "\r" + o + "\r"
				
	}

	if (document.getElementById("AN").value == "Yes"){
		alert = ("Please Dispatch Immediately")
	}else if (document.getElementById("AN").value == "No"){
		for (let el of document.querySelectorAll('.USDS')) el.classList.remove("displayNone");
	}

	if (document.getElementById("USDSA").value == "Yes"){
		alert = ("Please Dispatch Immediately")
	}else if (document.getElementById("USDSA").value == "No"){
		for (let el of document.querySelectorAll('.Dispatch')) el.classList.remove("displayNone");
	}



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