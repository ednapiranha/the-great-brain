var brain = {};
var node_list = [
  {
    "id": 1,
    "url": "http://localhost",
    "author": "Edna Piranha",
    "personal_url": "http://test.com",
    "time": 600,
    "tags": "image"
  }
];
$(function() {

  module("brain: core", {
    setup: function() {
      brain.neuronator = Neuronator();
    },
  });
  
  test("get list", function() {
    ok(brain.neuronator.getNodeList(), "node list retreived");
  });
});