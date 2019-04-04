(function(app) {
  app.renderUI = function() {
    let eventName = d3.select(".event-name")
                      .text(app.selectedEvent);
  }

  
}(window.app = window.app || {}));