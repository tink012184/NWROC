//Dynamic Hub dropdown created based on MA choice selected

// MAs List Array

//Change Hubs based on MA chosen
function changeHubs(value) {
	if (value.length == 0) document.getElementById("Hub").innerHTML = "<option></option>";
		else {
			var HubOptions = "";
			for (HubId in HubsByMA[value]) {
				HubOptions += "<option>" + HubsByMA[value][HubId] + "</option>";
				}
			document.getElementById("Hub").innerHTML = HubOptions;
		}
}

//Dynamic Tech dropdown created based on MA choice selected

//Techs List Array

//Change Techs based on MA
function changeTechs(value) {
	if (value.length == 0) document.getElementById("TechInfo").innerHTML = "<option></option>";
		else {
			var TechInfoOptions = "";
			for (TechInfoId in TechsByMA[value]) {
				TechInfoOptions += "<option>" + TechsByMA[value][TechInfoId] + "</option>";
			}
			document.getElementById("TechInfo").innerHTML = TechInfoOptions;
		}
}