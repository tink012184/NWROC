// Array of links
let links = [
    { section: "ROC Note", name: "ROC Note Template", url: "https://chartercom.sharepoint.com/sites/FO_ROC/Northwest/SitePages/ROC_Note/Notification.aspx" },
    { section: "ROC Note", name: "DM Template", url: "https://chartercom.sharepoint.com/sites/FO_ROC/Northwest/SitePages/ROC_Note/PlannedMaintenance.aspx" },
    { section: "ROC Note", name: "DM Chalk Process", url: "https://chalk.charter.com/display/NWROC/Demand+Maintenance+Chat+and+Ticket+Management" },
    { section: "ROC Note", name: "CalPUC", url: "https://chartercom.sharepoint.com/sites/FO_ROC/Northwest/SitePages/ROC_Note/CALPUC.aspx" },
    { section: "ROC Note", name: "CalPUC Chalk Process", url: "https://chalk.charter.com/display/NWROC/OES+Regulatory+Compliance+Process" },
    { section: "Power Supplies", name: "Continuity", url: "https://continuity-ncw-primary.chartercom.com/ContinuitySPS/" },
    { section: "Power Supplies", name: "Continuity PS Info Smartsheet to see not completed PS", url: "https://app.smartsheet.com/sheets/vCcP7jmPvq7R7hp5f8qHrjVWcFHcjR35H75RgHW1?view=grid" },
    { section: "Power Supplies", name: "Power Supply Info Smartsheet for PS's that need updating", url: "https://app.smartsheet.com/sheets/GFv4vH8qpvJP8jG4Mhw3Wr9pGGvGrjp9JrJhx9v1?view=grid" },
    { section: "Power Supplies", name: "Ready for Reroute Smartsheet", url: "https://app.smartsheet.com/sheets/vQHxWhP78RrqWHhqXrPvMwXM3f6pf7736JWQfQM1?view=grid" },
    { section: "Power Supplies", name: "TQA", url: "https://tqa.chartercom.com/login.php?refer=%2Findex.php%3Frefer%3D%252F" },
    { section: "Bulk", name: "Bulk Tools", url: "https://chartercom.sharepoint.com/sites/FO_ROC/Northwest/Shared%20Documents/Forms/AllItems.aspx?viewpath=%2Fsites%2FFO%5FROC%2FNorthwest%2FShared%20Documents%2FForms%2FAllItems%2Easpx&id=%2Fsites%2FFO%5FROC%2FNorthwest%2FShared%20Documents%2FBulk%20Upload%20Tools&viewid=55d99120%2D9f2c%2D408c%2Dbfff%2D8b4255924909" },
    { section: "Bulk", name: "Construction Smartsheet", url: "https://app.smartsheet.com/sheets/5VgqFFCv7HR8GqXQc4Jc77WPvGxGFQFGPxrH9f31?view=grid" },
    { section: "REACT", name: "REACT Job Creator Tableau", url: "https://tableau.chartercom.com/#/site/FieldEngineeringReporting/views/ARTDemandToolV2_17074123307180/ARTDemand/6fd5c3ae-f982-42e0-9203-e1df06e4fefb/NW?:iid=1" },
    { section: "REACT", name: "New Job Form", url: "https://app.smartsheet.com/b/form/28627f5cba8b48e983af20e8108544dc"},
    { section: "REACT", name: "Top 5% Report Tableau", url: "https://tableau.chartercom.com/#/site/FieldEngineeringReporting/views/ARTDemandTop5_17044078846380/MAHighest5ARTDemandRankNodes/803b7c5f-bd19-482d-94f9-7e15a9554d2f/Northwest?:iid=1" },
    { section: "REACT", name: "Node Watch Tableau", url: "https://tableau.chartercom.com/#/site/FieldEngineeringReporting/views/ARTDemandNodeWatch/ARTDemandNodeWatch?:iid=3" },
    { section: "REACT", name: "Outside MW EVT's Tableau", url: "https://tableau.chartercom.com/#/site/NWRegionOperationsAnalytics/views/REACTEVTsOutsideMW/REACTEVTsOutsideMW?:iid=1" },
    { section: "REACT", name: "REACT WO Report Tableau", url: "https://tableau.chartercom.com/#/site/FieldEngineeringReporting/views/REACTWOReport_16841611641550/REACT/36386ab2-338d-49e6-9cb0-5bb53889dcd5/REACTMainPage?:iid=4" },
    { section: "REACT", name: "REACT Template", url: "https://chartercom.sharepoint.com/sites/FO_ROC/Northwest/SitePages/ROC_Note/REACT_Jobs.aspx" },
    { section: "Leaks", name: "Law (NW-ROC/Ch@rter1)", url: "http://rfleakagewest.corp.chartercom.com/"},
    { section: "Leaks", name: "Genasis (NW-ROC-CD/Charter1) (NW-ROC-MOSCOW/Charter1) (NW ROC/Charter1)", url: "http://genacis.net/genacis/ManageUser/UserLogin.aspx?lo=1"},
    { section: "Lighthouse", name: "Lighthouse", url: "https://lighthouse.charter.com/#/login"},
    { section: "Lighthouse", name: "Bulk Upload", url: "https://lighthouse.charter.com/#/bulkOrderImport"},
    { section: "Ticket Management", name: "Remedy", url: "https://cars-web-usr.corp.chartercom.com/arsys/shared/login.jsp?/arsys/"},
    { section: "Ticket Management", name: "NOC CM Portal", url: "https://nocportal-prd.corp.chartercom.com/cmportal/login"},
    { section: "Ticket Management", name: "NOC INC Portal", url: "https://vm0pwntoola0001.corp.chartercom.com/incidentportal/"},
    { section: "Misc Tools", name: "Chalk", url: "https://chalk.charter.com/display/NWROC/Northwest+Regional+Operations+Center" },
    { section: "Pathtrack", name: "All Hubs & Nodes", url: "http://vm0pnpthtka0001.corp.chartercom.com/pathtrak/enterprise/index.html#/entsearch"},
    { section: "Pathtrack", name: "For ROC IV's (MTS)", url: "http://vm0pnpthtka0003.corp.chartercom.com"},
    { section: "Pathtrack", name: "For ROC IV's (PNW)", url: "http://vm0pnpthtka0008.corp.chartercom.com"},
    { section: "Pathtrack", name: "For ROC IV's (SNV)", url: "http://vm0pnpthtka0002.corp.chartercom.com"},
    { section: "Misc Tools", name: "Scope", url: "https://scope.charter.com" },
    { section: "Misc Tools", name: "IRIS Search (Use little p to sign in)", url: "http://irisweb-usr.corp.chartercom.com/arsys/shared/login.jsp?/arsys/forms/irisapp-usr/CCTT%3AEVT%3AEvents/Default+Administrator+View/?cacheid=406a60e2" },
    { section: "Misc Tools", name: "Sharepoint Home", url: "https://chartercom.sharepoint.com/sites/FO_ROC/Northwest/SitePages/Home.aspx" },
    { section: "Misc Tools", name: "Everbridge", url: "https://manager.everbridge.net/saml/login/censmanager"},
    { section: "Misc Tools", name: "Tableau", url: "https://tableau.chartercom.com/#/site/FieldEngineeringReporting/explore"},
    { section: "Misc Tools", name: "XMatters", url:"https://vm0pwntoola0001.corp.chartercom.com/employee-search/login/?currurl=https%3a%2f%2fvm0pwntoola0001.corp.chartercom.com%2femployee-search%2fxmatters%2fvertical_on_call"},
    { section: "Misc Tools", name: "GIS", url: "http://gis.corp.chartercom.com/"}
    ];
  
  // Function to display links
  function displayLinks() {
    let list = document.getElementById('linkList');
    let groupedLinks = groupBy(links, 'section');
    for (const section in groupedLinks) {
      let sectionDiv = document.createElement('div');
      sectionDiv.classList.add('section');
      let h2 = document.createElement('h2');
      h2.textContent = section;
      sectionDiv.appendChild(h2);
      let ul = document.createElement('ul');
      sectionDiv.appendChild(ul);
      groupedLinks[section].forEach(function(link) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        let linkText = document.createTextNode(link.name);
        a.appendChild(linkText);
        a.title = link.name;
        a.href = link.url;
        a.target = "_blank"; // Open in new tab
        li.appendChild(a);
        ul.appendChild(li);
      });
      list.appendChild(sectionDiv);
    }
  }
  
  // Call the function to display links
  displayLinks();
  
  
  // Define the groupBy function
  function groupBy(array, key) {
    return array.reduce(function(result, item) {
      (result[item[key]] = result[item[key]] || []).push(item);
      return result;
    }, {});
  }
