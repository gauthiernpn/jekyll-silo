/**
*
* import and compile site scripts
  ------------------------------------------------------------
*/

	/**
	* include vendor plugins
	*/



	/**
	* include app modules
	*/

	// @koala-append "modules/module.js";
	

	/**
	* initialize site app
	*/

	(function() {

		"use strict";

		var App = {

			Modules: {},
			Helpers: {},
			Events: $({}),

			init: function () {

				for (var x in App.Modules) {
					App.Modules[x].init();
				}

				console.log("All modules have been loaded. App is being initialized.");
				
			}
		};

		window.App = App;

	})();


	/**
	* wait for document, than execute app
	*/


	$(function() {

		"use strict";

		App.init();

	});