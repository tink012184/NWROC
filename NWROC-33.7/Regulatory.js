//Copy to clipboard Scripts

//Copy Telephone Script to Clipboard
var copyWorkLogBtn = document.querySelector(".CopyWorkLog");

copyWorkLogBtn.addEventListener("click", function(event) {
   var copyWorkLog = document.querySelector("#WorkLog");

   copyWorkLog.select();

	try {
	   var successful = document.execCommand("copy");
	   var msg = successful ? "successful" : "unsuccessful";
	   console.log("Copying text command was " + msg);
	} catch (err) {
	   console.log("Oops, unable to copy");
   }
});

var copyDisclaimerBtn = document.querySelector(".CopyDisclaimer");

copyDisclaimerBtn.addEventListener("click", function(event) {
	copyToClipboard(
		"CONFIDENTIAL – DO NOT PUBLICLY DISCLOSE [CA GOV’T CODE SECTIONS 53122(e) AND 6254(k)]\r\n" +
		"This report contains confidential information,  The Federal Communications Commission has stated that\r\n" +
		"telecommunications outage reports contain “sensitive data, which requires confidential treatment”\r\n" +
		"because the data “could be used by hostile parties to attack those [telecommunications] networks,\r\n" +
		"which are part of our Nation’s critical information infrastructure” (In the Matter of New Part 4 of the\r\n" +
		"Commission’s Rules Concerning Disruptions to Communications (Aug. 19, 2004, FCC 04-188)), and\r\n" +
		"the Public Utilities Commission already treats information regarding telecommunications outages\r\n" +
		"submitted to the commission as confidential.\r\n\r\n"
	);
});

//Populates the Telephone Script
function myWorkLog() {
	let outageCause = "";
	
	if (document.getElementById("OutageCause").value != "Unknown" && document.getElementById("OutageCause").value != "Other") {
		outageCause += "a ";
	}
	
	outageCause += document.getElementById("OutageCause").value;
	
	let began = new Date(document.getElementById("OutageBegan").value);
	began.setHours(began.getHours() - 2);
	
	let script = "No Phone Script Is Required.";

//	script = "• This is [Your Name] with the Charter Northwest ROC."
//	script += "\r\n\r\n• This is a confidential notification regarding a network outage " + document.getElementById("IncidentId").value + ".";
//	script += "\r\n\r\n• The outage is affecting approximately " + document.getElementById("SubImpact").value + " customers in " + document.getElementById("CitiesAreasImpacted").value + ".";
//	script += "\r\n\r\n• The outage began on " + formatDate(began, "MM/dd/yyyy h:mmtt") + " pacific time.";
//	script += "\r\n\r\n• The cause of the outage is " + outageCause.toLowerCase() + ".";
//	script += "\r\n\r\n• I can be reached at " + document.getElementById("PhoneNumber").value + " or " + document.getElementById("Email").value + " if you have any questions.";

	document.getElementById("WorkLog").innerHTML = script;
}

//Script to create email template to CAL OES
function sendMail() {
	
	let now = new Date();
	now.setHours(now.getHours() - 1);
	
	let began = new Date(document.getElementById("OutageBegan").value);
	began.setHours(began.getHours() - 2);
	
	let discovered = new Date(document.getElementById("OutageDiscovered").value);
	discovered.setHours(discovered.getHours() - 1);
	
	let mailTo = "";
	
	mailTo = "mailto:CA911outages@caloes.ca.gov?cc=" + document.getElementById("CCLine").value 
	+ "&subject=" 
		+ encodeURIComponent(document.getElementById("NotificationType").value.toUpperCase() + ": "
		+ "CA Service Outage Report – Charter Communications – " 
		+ document.getElementById("IncidentId").value + " – " 
		+ formatDate(now, "dddd MM/dd/yyyy"))
	+ "&body="
		+ encodeURIComponent("\r\n")
		+ encodeURIComponent("[Paste Disclaimer Here]")
		+ encodeURIComponent("\r\n\r\n")
		+ encodeURIComponent("Company Name: " + document.getElementById("CompanyName").value + "\r\n")
		+ encodeURIComponent("Point of Contact: Name and Title: " + document.getElementById("EmpName").value + ", " + document.getElementById("EmpTitle").value + "\r\n")
		+ encodeURIComponent("Company Contact#/Email: " + document.getElementById("PhoneNumber").value + " / " + document.getElementById("Email").value + "\r\n")
		+ encodeURIComponent("\r\n")
		+ encodeURIComponent("Outage Notification Type: " + document.getElementById("NotificationType").value + "\r\n")
		+ encodeURIComponent("Cause of Outage: " + document.getElementById("OutageCause").value + "\r\n")
		+ encodeURIComponent("Type of Outage: VoIP\r\n")
		+ encodeURIComponent("Outage Zip Code(s): " + document.getElementById("ZipCodes").value + "\r\n")
		+ encodeURIComponent("Approximate Areas Impacted: " + document.getElementById("CitiesAreasImpacted").value + "\r\n")
		+ encodeURIComponent("Estimated Number of Potentially Impacted End Users: " + document.getElementById("SubImpact").value + "\r\n")
		+ encodeURIComponent("\r\n")
		+ encodeURIComponent("Date/Time Outage Began: " + formatDate(began, "MM/dd/yyyy h:mmtt") + " PT (UTC−08:00)\r\n")		
		+ encodeURIComponent("Date/Time Outage Discovered: " + formatDate(discovered, "MM/dd/yyyy h:mmtt") + " PT (UTC−08:00)\r\n")
		+ encodeURIComponent("Date/Time of This Report: " + formatDate(now, "MM/dd/yyyy h:mmtt") + " PT (UTC−08:00)\r\n");
	
	if (document.getElementById("NotificationType").value == "Initial Notification" || document.getElementById("NotificationType").value == "Status Update") {
		let etr = new Date(document.getElementById("ETR").value);
		etr.setHours(etr.getHours() - 1);
		
		mailTo += encodeURIComponent("Date/Time of Estimated Restoration: " + formatDate(etr, "MM/dd/yyyy h:mmtt") + " PT (UTC−08:00)\r\n");
	}
	
	else {
		let atr = new Date(document.getElementById("ATR").value);
		atr.setHours(atr.getHours() - 1);
		mailTo += encodeURIComponent("Date/Time of Restoration: " + formatDate(atr, "MM/dd/yyyy h:mmtt") + " PT (UTC−08:00)\r\n");
	}
	
	mailTo += encodeURIComponent("\r\n");
	mailTo += encodeURIComponent("Report contains confidential information: Yes");
	mailTo += encodeURIComponent("\r\n");
	mailTo += encodeURIComponent("\r\n");
	
	document.location.href = mailTo;
}

function setVisibility() {
	if (document.getElementById("NotificationType").value == "Initial Notification") {
		for (let el of document.querySelectorAll('.initialUpdate')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.statusUpdate')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.finalUpdate')) el.classList.add("displayNone");
	}
	
	if (document.getElementById("NotificationType").value == "Status Update") {
		for (let el of document.querySelectorAll('.initialUpdate')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.statusUpdate')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.finalUpdate')) el.classList.add("displayNone");
	}
	
	if (document.getElementById("NotificationType").value == "Final Notification") {
		for (let el of document.querySelectorAll('.initialUpdate')) el.classList.add("displayNone");
		for (let el of document.querySelectorAll('.finalUpdate')) el.classList.remove("displayNone");
		for (let el of document.querySelectorAll('.statusUpdate')) el.classList.add("displayNone");
	}
	
	if (document.getElementById("NotificationType").value == "Initial Notification") {
		if (document.getElementById("SubImpact").value >= 'SQURRL') {
			for (let el of document.querySelectorAll('.telephoneNotification')) el.classList.remove("displayNone");
		}
		else {
			for (let el of document.querySelectorAll('.telephoneNotification')) el.classList.add("displayNone");
		}
	}
}

function formatDate(date, format, utc) {
    var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function ii(i, len) {
        var s = i + "";
        len = len || 2;
        while (s.length < len) s = "0" + s;
        return s;
    }

    var y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);

    var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])M/g, "$1" + M);

    var d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);

    var H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);

    var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);

    var m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])m/g, "$1" + m);

    var s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);

    var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);

    var T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

    var t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

    var tz = -date.getTimezoneOffset();
    var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
        tz = Math.abs(tz);
        var tzHrs = Math.floor(tz / 60);
        var tzMin = tz % 60;
        K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);

    var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

    format = format.replace(/\\(.)/g, "$1");

    return format;
};

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function setDateTimeFieldDefaults() {
	let etr = new Date();
	etr.setHours(etr.getHours() + 6);
	
	document.getElementById('OutageBegan').value = formatDate(new Date(), "yyyy-MM-dd") + "T00:00";
	document.getElementById('OutageDiscovered').value = formatDate(new Date(), "yyyy-MM-dd") + "T00:00";
	document.getElementById('ETR').value = formatDate(etr, "yyyy-MM-dd") + "T" + formatDate(etr, "HH:mm");
	document.getElementById('ATR').value = formatDate(new Date(), "yyyy-MM-dd") + "T00:00";
}

function defaultForm() {
	document.getElementById('NotificationType').value = "";
	document.getElementById('IncidentId').value = "";
	document.getElementById('OutageCause').value = "";
	document.getElementById('SubImpact').value = "";
	document.getElementById('ZipCodes').value = "";
	document.getElementById('CitiesAreasImpacted').value = "";
	
	setDateTimeFieldDefaults();
	setVisibility();
	myWorkLog();
	setOutageCauses();
}

function setOutageCauses() {
	
	let outageCauseOptions = "<option label=\" \">&nbsp;</option>";
	
	if (document.getElementById("NotificationType").value == "Initial Notification") {
		outageCauseOptions += "<option value=\"Unknown\">Unknown</option>";
	}

	outageCauseOptions +=
	"<option value=\"Charter Network Fault\">Charter Network Fault</option>" +
	"<option value=\"Power Outage\">Power Outage</option>" +
	"<option value=\"Fire\">Fire</option>" +
	"<option value=\"Other\">Other</option>";
	
	document.getElementById("OutageCause").innerHTML = outageCauseOptions;
}

document.addEventListener('DOMContentLoaded', function() {
    defaultForm();
}, false);

function alertBox() {
	if (document.getElementById("NotificationType").value == "Initial Notification") {
		if (confirm("Are you sure you want to send an Inital")){
			sendMail();
		} else{

		}
	} else {
		sendMail();
	}
}
