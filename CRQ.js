var copyBtn = document.querySelector(".Copy");

copyBtn.addEventListener("click", function(event) {
  var copyCRQ = document.querySelector("#CopyCRQ");
   copyCRQ.select();           
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

function myCRQDesc() {
    E911fun();

    if (document.getElementById("OorC").value == "Open"){

    if (document.getElementById("LBIYN").value == "Yes"){
        for (let el of document.querySelectorAll('.LBI')) el.classList.remove("displayNone");
    }else if (document.getElementById("LBIYN").value == "No"){
        for (let el of document.querySelectorAll('.LBI')) el.classList.add("displayNone");
    }

    for (let el of document.querySelectorAll('.OpenDis')) el.classList.remove("displayNone");

    if (document.getElementById("TimeFrame").value == "Yes"){
        for (let el of document.querySelectorAll('.Overrun')) el.classList.add("displayNone");
    }else  if (document.getElementById("TimeFrame").value == "No"){
        for (let el of document.querySelectorAll('.Overrun')) el.classList.add("displayNone");
    }

    
    var TorC = document.getElementById("TorC").value;
    var Node = document.getElementById("Node").value;
    var PlannedOutage = document.getElementById("PlannedOutage").value;
    var LHNum = document.getElementById("LHNum").value;
    var CRQNum = document.getElementById("CRQNum").value;
    var TimeFrame = document.getElementById("TimeFrame").value;
    var TechName = document.getElementById("TechName").value;
    var TechPhone = document.getElementById("TechPhone").value;
    var LBINum = document.getElementById("LBINum").value;
    var E911 = document.getElementById("E911").value;
    var PingStats = document.getElementById("PingStats").value;
    var E911C = document.getElementById("E911C").value;

        if (document.getElementById("LBIYN").value == "Yes"){
            document.getElementById("CopyCRQ").innerHTML = 
        
                  "In house Tech or Contractor: " + TorC + "\r"
                + "Who is the tech working the planned outage?: " + TechName + "\r"
                + "What is the techs phone number?: " + TechPhone + "\r"
                + "What is the CRQ#?: " + CRQNum + "\r"
                + "What node(s) were they working in: " + Node + "\r"
                + "What is the LH Order#?: " + LHNum + "\r"
                + "Was there a Planned Outage order in LH?: " + PlannedOutage + "\r"
                + "Are they within the time frame?: " + TimeFrame + "\r"
                + "There is LBI inpact of " + LBINum + "\r"
                + "Are there any E911 calls in progress?:" + E911 + "\r"
                + "E911 confirmation: " + E911C + "\r"
                + "Ping Stats: " + "\r" + PingStats
        
        }else {
            document.getElementById("CopyCRQ").innerHTML = 
        
                  "In house Tech or Contractor: " + TorC + "\r"
                + "Who is the tech working the planned outage?: " + TechName + "\r"
                + "What is the techs phone number?: " + TechPhone + "\r"
                + "What is the CRQ#?: " + CRQNum + "\r"
                + "What node(s) were they working in: " + Node + "\r"
                + "What is the LH Order#?: " + LHNum + "\r"
                + "Was there a Planned Outage order in LH?: " + PlannedOutage + "\r"
                + "Are they within the time frame?: " + TimeFrame + "\r"
                + "Are there any E911 calls in progress?:" + E911 + "\r"
                + "E911 confirmation: " + E911C + "\r"
                + "Ping Stats: " + "\r" + PingStats
        }
    }else if (document.getElementById("OorC").value == "Close"){

        

    if (document.getElementById("LBIYN").value == "Yes"){
        for (let el of document.querySelectorAll('.LBI')) el.classList.remove("displayNone");
    }else if (document.getElementById("LBIYN").value == "No"){
        for (let el of document.querySelectorAll('.LBI')) el.classList.add("displayNone");
    }

   
    for (let el of document.querySelectorAll('.CloseDis')) el.classList.remove("displayNone");

    if (document.getElementById("TimeFrame").value == "Yes"){
        for (let el of document.querySelectorAll('.Overrun')) el.classList.add("displayNone");
    }else  if (document.getElementById("TimeFrame").value == "No"){
        for (let el of document.querySelectorAll('.Overrun')) el.classList.remove("displayNone");
    }    

    var TorC =  document.getElementById("TorC").value;
    var Node =  document.getElementById("Node").value;
    var LHNum =  document.getElementById("LHNum").value;
    var CRQNum = document.getElementById("CRQNum").value;
    var TimeFrame =  document.getElementById("TimeFrame").value;
    var TechName =  document.getElementById("TechName").value;
    var TechPhone =  document.getElementById("TechPhone").value;
    var LBINum =  document.getElementById("LBINum").value;
    var PingStats =  document.getElementById("PingStats").value;
    var ClosePO = document.getElementById("ClosePO").value;
    var OverrunINC = document.getElementById("OverrunINC").value;

    

    if (document.getElementById("TimeFrame").value == "No"){
    if (document.getElementById("LBIYN").value == "Yes"){
       
        document.getElementById("CopyCRQ").innerHTML = 
    
    
              "In house Tech or Contractor: " + TorC + "\r"
            + "Who is the tech working the planned outage?: " + TechName + "\r"
            + "What is the techs phone number?: " + TechPhone + "\r"
            + "What is the CRQ#?: " + CRQNum + "\r"
            + "What node(s) were they working in: " + Node + "\r"
            + "What is the LH Order#?: " + LHNum + "\r"
            + "Did you close the Planned Outage order in LH?: " + ClosePO + "\r"
            + "Are they within the time frame?: " + TimeFrame + "\r"
            + "What is the Overrun INC? " + OverrunINC + "\r"
            + "There is LBI inpact of " + LBINum + "\r"
            + "Ping Stats: " + "\r" + PingStats
    } else if (document.getElementById("LBIYN") == "No") {
      
        document.getElementById("CopyCRQ").innerHTML = 
    
    
              "In house Tech or Contractor: " + TorC + "\r"
            + "Who is the tech working the planned outage?: " + TechName + "\r"
            + "What is the techs phone number?: " + TechPhone + "\r"
            + "What is the CRQ#?: " + CRQNum + "\r"
            + "What node(s) were they working in: " + Node + "\r"
            + "What is the LH Order#?: " + LHNum + "\r"
            + "Did you close the Planned Outage order in LH?: " + ClosePO + "\r"
            + "Are they within the time frame?: " + TimeFrame + "\r"
            + "What is the Overrun INC? " + OverrunINC + "\r"
            + "Ping Stats: " + "\r" + PingStats
    
    } else {
        document.getElementById("CopyCRQ").innerHTML = 
    
    
              "In house Tech or Contractor: " + TorC + "\r"
            + "Who is the tech working the planned outage?: " + TechName + "\r"
            + "What is the techs phone number?: " + TechPhone + "\r"
            + "What is the CRQ#?: " + CRQNum + "\r"
            + "What node(s) were they working in: " + Node + "\r"
            + "What is the LH Order#?: " + LHNum + "\r"
            + "Did you close the Planned Outage order in LH?: " + ClosePO + "\r"
            + "Are they within the time frame?: " + TimeFrame + "\r"
            + "Ping Stats: " + "\r" + PingStats
    }
    } else if (document.getElementById("TimeFrame").value == "Yes"){

        if (document.getElementById("LBIYN").value == "Yes"){
       
            document.getElementById("CopyCRQ").innerHTML = 
        
        
                  "In house Tech or Contractor: " + TorC + "\r"
                + "Who is the tech working the planned outage?: " + TechName + "\r"
                + "What is the techs phone number?: " + TechPhone + "\r"
                + "What is the CRQ#?: " + CRQNum + "\r"
                + "What node(s) were they working in: " + Node + "\r"
                + "What is the LH Order#?: " + LHNum + "\r"
                + "Did you close the Planned Outage order in LH?: " + ClosePO + "\r"
                + "Are they within the time frame?: " + TimeFrame + "\r"
                + "There is LBI inpact of " + LBINum + "\r"
                + "Ping Stats: " + "\r" + PingStats
        }else if (document.getElementById("LBIYN") == "No") {
      
            document.getElementById("CopyCRQ").innerHTML = 
        
        
                  "In house Tech or Contractor: " + TorC + "\r"
                + "Who is the tech working the planned outage?: " + TechName + "\r"
                + "What is the techs phone number?: " + TechPhone + "\r"
                + "What is the CRQ#?: " + CRQNum + "\r"
                + "What node(s) were they working in: " + Node + "\r"
                + "What is the LH Order#?: " + LHNum + "\r"
                + "Did you close the Planned Outage order in LH?: " + ClosePO + "\r"
                + "Are they within the time frame?: " + TimeFrame + "\r"
                + "Ping Stats: " + "\r" + PingStats
        
        }else {
            document.getElementById("CopyCRQ").innerHTML = 
        
        
                  "In house Tech or Contractor: " + TorC + "\r"
                + "Who is the tech working the planned outage?: " + TechName + "\r"
                + "What is the techs phone number?: " + TechPhone + "\r"
                + "What is the CRQ#?: " + CRQNum + "\r"
                + "What node(s) were they working in: " + Node + "\r"
                + "What is the LH Order#?: " + LHNum + "\r"
                + "Did you close the Planned Outage order in LH?: " + ClosePO + "\r"
                + "Are they within the time frame?: " + TimeFrame + "\r"
                + "Ping Stats: " + "\r" + PingStats
        }
    }
}

function E911fun() {
    if (document.getElementById("E911").value == "Yes") {
        alert("DO NOT PROCCED IF THERE ARE 911 CALLS IN PROGRESS")
    } else{

    }
} 



}
function TimeFramefun() {

    
    if (document.getElementById("TimeFrame").value == "No" && document.getElementById("OorC").value == "Open") {
        alert("DO NOT PROCCED IF IT IS NOT TIME YET")
    } else if (document.getElementById("TimeFrame").value == "No" && document.getElementById("OorC").value == "Close") { 
        alert("GET THE OVERRUN INC")
    } else if (document.getElementById("TimeFrame").value == "Yes" && (document.getElementById("OorC").value == "Open" || document.getElementById("OorC").value == "Close")) {
}
}
