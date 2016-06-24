//read the current broswer page, and extract the account name
function getAccoutnName() {
	// var name = document.getElementsByClassName("textUnderline outputLookupLink forceOutputLookup slds-truncate")[0].text || 
	// 	"Salesforce.com"
	// console.log(name);

	var name = "Salesforce.com";
	var count = 0;
	while (document.getElementsByClassName("textUnderline outputLookupLink forceOutputLookup slds-truncate")[0] == null ||
		document.getElementsByClassName("textUnderline outputLookupLink forceOutputLookup slds-truncate")[0] == undefined) {
		sleep(3000);

	}

	name = document.getElementsByClassName("textUnderline outputLookupLink forceOutputLookup slds-truncate")[0].text || "Salesforce.com"
	return name;
}

function hackquote() {
	return 'CRM';
}
// once the page load, send account name back


//window.onload(function(){
    //chrome.runtime.sendMessage({accoutName : getAccoutnName()});
//});
chrome.runtime.sendMessage({accountQuote : hackquote()});