var copyBtn = document.querySelector(".Copy");

copyBtn.addEventListener("click", function(event) {
  var copyCRQ = document.querySelector("#Copy811");
   copyCRQ.select();           
 try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Copying text command was " + msg);
 } catch (err) {
    console.log("Oops, unable to copy");
  }
});

function my811 () {

  var Node = document.getElementById("Node").value;
  var Address = document.getElementById("Address").value;
  var Where = document.getElementById("Where").value;
  var What = document.getElementById("What").value;
  var Exposed = document.getElementById("Exposed").value;
  var CharterYN = document.getElementById("CharterYN").value;
  var POC = document.getElementById("POC").value;
  var POCNum = document.getElementById("POCNum").value;
  var How = document.getElementById("How").value;

  document.getElementById("Copy811").innerHTML = 

    "Node " + Node + "\r"
  + "What is the address or location of damage? " + Address + "\r"
  + "Where on the property is the damage? " + Where + "\r"
  + "What is damaged? " + What + "\r"
  + "Is the damaged area still exposed/unburied? " + Exposed + "\r"
  + "Is this a verified Charter owned asset? " + CharterYN + "\r"
  + "Who is the point of contact? " + POC + "\r"
  + "What is the point of contacts phone# " + POCNum + "\r"
  + "How was it damaged? " + How


}