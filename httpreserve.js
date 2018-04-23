//Archivematica visual sitemap generator
//install in /usr/js for httpreserve's needs.
//httpreseve's phantomjsscreenshot is used to make this utility work.
var system = require('system');

if (system.args.length != 3) {
  console.log('URL and output args required');
  phantom.exit(1);
}

address = system.args[1];
output = system.args[2];

var webPage = require('webpage');
var page = webPage.create();

var page = require('webpage').create();

// login to archivematica
page.open("http://127.0.0.1:62080", function(status) {
  if (status === "success") {
    page.evaluate(function() {
	      document.getElementById("id_username").value = "test";
	      document.getElementById("id_password").value = "test";
	      button = document.getElementsByTagName("button");
	      $(button[0]).click();
    });
    window.setTimeout(function() {
	   page.viewportSize = { width: 1366, height: 768 };
	   page.clipRect = { left: 0, top: 0, width: 1366, height: 768 };
	   // once logged in, access the user requested web page
	   page.open(address);
	   window.setTimeout(function() {
	   		console.log('Status: ' + status);
      		page.render(output, {format: 'jpeg', quality: '75'});
       		phantom.exit();
       }, 30000);
    }, 5000);
  }
});