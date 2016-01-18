// Changes the default login tab for Harvard PIN login to the HUID option
$(document).ready(function () {

	console.log("HUIDdefault extension loaded");

	// Get the divs of the tabs of interest
	var harvardKeyTab = $("#HarvardKey");
	var HUIDTab = $("#HUID");

	// Update the classes
	harvardKeyTab.removeClass("activeTab");
	HUIDTab.addClass("activeTab");

	// Toggle the aria-selected attribute
	harvardKeyTab.attr("aria-selected", "false");
	HUIDTab.attr("aria-selected", "true");

	// Change authentication source type in form
	var sourceType = $("#compositeAuthenticationSourceType");
	sourceType.attr("value", "PIN");

	// Change text
	$("#loginIdLabel").text("Harvard University ID (HUID):");

});


