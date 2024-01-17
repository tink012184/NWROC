function setVisibility() {
	document.getElementById("sss").classList.remove("displayNone");
	//document.getElementById("ttt").classList.remove("displayNone");
			
		if (document.getElementById("NotificationType").value == "Initial Notification") {
				document.getElementById("sss").classList.add("displayNone");
				document.getElementById("ETRSH").classList.remove("displayNone");
				//document.getElementById("ttt").classList.add("displayNone");
		} 
	
		if (document.getElementByID("NotificationType").value == "Final Notification") {
				document.getElementById("sss").classList.remove("displayNone");
				document.getElementById("ETRSH").classList.add("displayNone");
				//document.getElementById("ttt").classList.remove("displayNone");
		} 
	
	}


//Script to create email template to NV PUC
function sendMail() {

	let ETRTime = new Date(document.getElementById("ETR").value);
	ETRTime.setHours(ETRTime.getHours() - 1);

	let restoral = new Date(document.getElementById("ATR").value);
	restoral.setHours(restoral.getHours() - 1);

	
	

	
	
	let began = new Date(document.getElementById("OutageBegan").value);
	began.setHours(began.getHours() - 1);
	
	let discovered = new Date(document.getElementById("OutageDiscovered").value);
	discovered.setHours(discovered.getHours() - 1);
	
	let test = new Date()
		test.setHours(test.getHours() - 1);
	
	let recipient = "";
	
	let mailTo = "";
	
	let impact = "";
	
	let cc = "";
	
	let conf = "";
	
	if (document.getElementById("NotificationType").value == "Initial Notification") {
		recipient = "lopez@puc.nv.gov";
		impact = document.getElementById("SubImpact").value;
		cc = document.getElementById("CCLine2").value + "; " + document.getElementById("CCLine").value;
		restoral = formatDate(ETRTime, "MM/dd/yyyy h:mmtt") + " PT (UTC−08:00)";
		conf = "CONFIDENTIAL - DO NOT DISCLOSE.\r\nPursuant to Nevada Administrative Code 704.258 the information provided in this initial outage notification is confidential and must be treated confidentially."

		
	} else if (document.getElementById("NotificationType").value == "Final Notification") {
		recipient = recipient = "lopez@puc.nv.gov";
		impact = document.getElementById("SubImpact").value;
		cc = document.getElementById("CCLine2").value + "; " + document.getElementById("CCLine").value;
		restoral = formatDate(restoral, "MM/dd/yyyy h:mmtt") + " PT (UTC−08:00)"
		conf = "CONFIDENTIAL - DO NOT DISCLOSE.\r\nPursuant to Nevada Administrative Code 704.258 the information provided in this final outage notification is confidential and must be treated confidentially."
	}

if 	(document.getElementById("NotificationType").value == "Initial Notification"){
	//  NV Service Outage Report – Charter Communications – [Tracking Identifier] [Date]  
	mailTo = "mailto:" + recipient + "?cc=" + cc
	+ "&subject=" 
		+ "NV Service Outage Event Notification – Charter Communications – " 
		+ encodeURIComponent( document.getElementById("IncidentId").value + " – " 
		+ formatDate(test, "dddd MM/dd/yyyy") + " - "
		+ document.getElementById("NotificationType").value.toUpperCase())
	+ "&body="
		+ encodeURIComponent(conf)
		+ encodeURIComponent("Utility/Operator Type: Telecom\r\n")
		+ encodeURIComponent("Utility/Operator Name: Charter Communications\r\n")
		+ encodeURIComponent("Follow-Up Contact Name: " + document.getElementById("EmpName").value + "     Job Title: " + document.getElementById("EmpTitle").value + "     Telephone#: 1-(844)-849-7831 Opt. 4\r\n\r\n")
		+ encodeURIComponent("Type of Event: " + document.getElementById("EventType").value + "\r\n")
		+ encodeURIComponent("Start Date/Time of Event: " + formatDate(began, "MM/dd/yyyy h:mmtt") + " PT (UTC−08:00)\r\n")		
		+ encodeURIComponent("Discovery Date/Time: " + formatDate(discovered, "MM/dd/yyyy h:mmtt") + " PT (UTC−08:00)\r\n")
		+ encodeURIComponent("Preliminary Indication of Cause: " + document.getElementById("OutageCause").value + "\r\n")
		+ encodeURIComponent("Number of Customers Impacted: " + impact + "\r\n")
		+ encodeURIComponent("ETR Date/Time: " + restoral + "\r\n")
		+ encodeURIComponent("Areas Impacted: " + document.getElementById("CitiesAreasImpacted").value + "\r\n\r\n") 
		
		+ encodeURIComponent("Please contact the Northwest ROC at 1-844-849-7831 Opt. 4 and/or ROC-NW@Charter.com if you have any questions.");
} else {
	//  NV Service Outage Report – Charter Communications – [Tracking Identifier] [Date]  
	mailTo = "mailto:" + recipient + "?cc=" + cc
	+ "&subject=" 
		+ "NV Service Outage Event Notification – Charter Communications – " 
		+ encodeURIComponent( document.getElementById("IncidentId").value + " – " 
		+ formatDate(test, "dddd MM/dd/yyyy") + " - "
		+ document.getElementById("NotificationType").value.toUpperCase())
	+ "&body="
		+ encodeURIComponent(conf)
		+ encodeURIComponent("Utility/Operator Type: Telecom\r\n")
		+ encodeURIComponent("Utility/Operator Name: Charter Communications\r\n")
		+ encodeURIComponent("Follow-Up Contact Name: " + document.getElementById("EmpName").value + "     Job Title: " + document.getElementById("EmpTitle").value + "     Telephone#: 1-(844)-849-7831 Opt. 4\r\n\r\n")
		+ encodeURIComponent("Type of Event: " + document.getElementById("EventType").value + "\r\n")
		+ encodeURIComponent("Start Date/Time of Event: " + formatDate(began, "MM/dd/yyyy h:mmtt") + " PT (UTC−08:00)\r\n")		
		+ encodeURIComponent("Discovery Date/Time: " + formatDate(discovered, "MM/dd/yyyy h:mmtt") + " PT (UTC−08:00)\r\n")
		+ encodeURIComponent("Preliminary Indication of Cause: " + document.getElementById("OutageCause").value + "\r\n")
		+ encodeURIComponent("Number of Customers Impacted: " + impact + "\r\n")
		+ encodeURIComponent("Restoral Date/Time: " + restoral + "\r\n")
		+ encodeURIComponent("Areas Impacted: " + document.getElementById("CitiesAreasImpacted").value + "\r\n\r\n") 
		
		+ encodeURIComponent("Please contact the Northwest ROC at 1-844-849-7831 Opt. 4 and/or ROC-NW@Charter.com if you have any questions.");
}
	document.location.href = mailTo;
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


function setDateTimeFieldDefaults() {
	let etr = new Date();
	etr.setHours(etr.getHours() + 6);
	
	document.getElementById('OutageBegan').value = formatDate(new Date(), "yyyy-MM-dd") + "T00:00";
	document.getElementById('OutageDiscovered').value = formatDate(new Date(), "yyyy-MM-dd") + "T00:00";
	document.getElementById('ETR').value = formatDate(etr, "yyyy-MM-dd") + "T" + formatDate(etr, "HH:mm");
	document.getElementById('ATR').value = formatDate(new Date(), "yyyy-MM-dd") + "T00:00";
}

function defaultForm() {
	
	document.getElementById('IncidentId').value = "";
	document.getElementById('OutageCause').value = "Unknown";
	document.getElementById('SubImpact').value = "";
	document.getElementById('ZipCodes').value = "";
	document.getElementById('CitiesAreasImpacted').value = "";

	setDateTimeFieldDefaults();
	//setVisibility();
	//myWorkLog();
	setOutageCauses();
}

function setOutageCauses() {
	
	let outageCauseOptions = "<option label=\" \">&nbsp;</option>";
	
	//if (document.getElementById("NotificationType").value == "Initial Notification") {
	//	outageCauseOptions += "<option value=\"Unknown/Other\">Unknown/Other</option>";
	//}

	outageCauseOptions += "<option value=\"Unknown/Other\">Unknown/Other</option>";

	outageCauseOptions +=
	"<option value=\"Equipment Malfunction\">Equipment Malfunction</option>" +
	"<option value=\"Power Outage\">Power Outage</option>" +
	"<option value=\"Natural Forces Damage\">Natural Forces Damage (Weather/Fire)</option>";
	
	
	document.getElementById("OutageCause").innerHTML = outageCauseOptions;
}

/* function setVisibility() {
document.getElementById("sss").classList.remove("displayNone");
//document.getElementById("ttt").classList.remove("displayNone");
		
	if (document.getElementById("NotificationType").value == "Initial Notification") {
			document.getElementById("sss").classList.add("displayNone");
			document.getElementById("ETRSH").classList.remove("displayNone");
			//document.getElementById("ttt").classList.add("displayNone");
	} 

	if (document.getElementByID("NotificationType").value == "Final Notification") {
			document.getElementById("sss").classList.remove("displayNone");
			document.getElementById("ETRSH").classList.add("displayNone");
			//document.getElementById("ttt").classList.remove("displayNone");
	} 

} */

//function setOutageCauses() {
	
//	let outageCauseOptions = "<option label=\" \">&nbsp;</option>";
//	
//	if (document.getElementById("NotificationType").value == "Initial Notification") {
//		outageCauseOptions += "<option value=\"Unknown\">Unknown</option>";
//		document.getElementById('OutageCause').option = "Unknown";
//
//	} else {
//
//	outageCauseOptions +=
//	"<option value=\"Charter Network Fault\">Charter Network Fault</option>" +
//	"<option value=\"Power Outage\">Power Outage</option>" +
//	"<option value=\"Fire\">Fire</option>" +
//	"<option value=\"Other\">Other</option>";
//	}
//	
//	document.getElementById("OutageCause").innerHTML = outageCauseOptions;
///if (document.getElementById("NotificationType").value == "Initial Notification") {
///		document.getElementById('OutageCause').value = "Unknown";
///	}
//}

document.addEventListener('DOMContentLoaded', function() {
    defaultForm();
	populateEmployeeNames();
}, false);