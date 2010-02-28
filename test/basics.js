window.onload = function(){
  module("Simple values");
  test("Simple set and get tests", function(){
	 EasyData.Cookies.set("first", 1);
	 same(EasyData.Cookies.get("first"), 1, "int values are the same");
       });
};