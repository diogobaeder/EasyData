window.onload = function(){
  module("Simple values");

  test("Simple set and get test", function(){
	 EasyData.Cookies.set("first", 1);
	 same(EasyData.Cookies.get("first"), 1, "int values are the same");
	 EasyData.Cookies.set("second", "foo");
	 same(EasyData.Cookies.get("second"), "foo", "string values are also the same");
       });

  test("Serialized data test", function(){
	 EasyData.Cookies.set("third", {first: "one", second: "two"}, true);
	 same(EasyData.Cookies.get("third", true).first, "one");
       });

  test("Persistance test", function(){
	 document.getElementById("persistance-form").onsubmit = function(){
	   var name = document.getElementById("name").value;
	   EasyData.Cookies.set("user-data", {name: name, when: new Date()}, true);
	 };
	 var lastSubmit = EasyData.Cookies.get("user-data", true);
	 if (lastSubmit) {
	   ok(true, "got your name, " + lastSubmit.name + ", on " + lastSubmit.when);
	   var span = document.getElementById("last-submit").innerHTML = "Tests updated, see test #3";
	 }
       });
};