(function(e) {
  app.init = function() {
    d3.csv("data/valveEvents.csv", function(data) {
      console.log(data);
    })
    console.log("This is working");
  }


}(window.app = window.app || {}));