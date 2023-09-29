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

function clearForm() {
  document.getElementById("myForm").reset();
}

function myLHDesc() {

    var name =  document.getElementById("name").value;
    var address =  document.getElementById("address").value;
    var MAC =  document.getElementById("MAC").value;
    var reason =  document.getElementById("reason").value;
    var IDNum = document.getElementById("IDNum").value;

document.getElementById("LHDesc4").innerHTML = 
   
    
      "Power Supply: " + name + "\r"
    + "Address: " + address + "\r"
    + "MAC ID: " + MAC + "\r"
    + "Reason for Dispatch: " + reason + "\r" 
    + "Unique ID: " + IDNum + "\r"

}
