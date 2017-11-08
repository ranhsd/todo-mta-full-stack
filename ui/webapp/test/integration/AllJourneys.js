jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"com/todo/demo/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"com/todo/demo/test/integration/pages/Worklist",
		"com/todo/demo/test/integration/pages/Object",
		"com/todo/demo/test/integration/pages/NotFound",
		"com/todo/demo/test/integration/pages/Browser",
		"com/todo/demo/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.todo.demo.view."
	});

	sap.ui.require([
		"com/todo/demo/test/integration/WorklistJourney",
		"com/todo/demo/test/integration/ObjectJourney",
		"com/todo/demo/test/integration/NavigationJourney",
		"com/todo/demo/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});