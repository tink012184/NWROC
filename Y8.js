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

var copyLHDescBtn = document.querySelector(".CopyDesc5");

copyLHDescBtn.addEventListener("click", function(event) {
  var copyLHDesc = document.querySelector("#LHDesc5");
   copyLHDesc.select();           
 try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Copying text command was " + msg);
 } catch (err) {
    console.log("Oops, unable to copy");
  }
});

function clearForm() {
  document.getElementById("myForm").reset();
}

function myLHDesc() {

    var Y8a =  document.getElementById("Y8a").value;
    var Y8b =  document.getElementById("Y8b").value;
    var Y8c =  document.getElementById("Y8c").value;
    

document.getElementById("LHDesc4").innerHTML = 
                    
  "Job # " + Y8a + "\r"
+ "Account # " + Y8b + "\r"
+ "Address " + Y8c 

}
