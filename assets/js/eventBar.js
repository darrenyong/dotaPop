(function(app) {
  app.renderUI = function() {
    let eventName = d3.select(".event-name")
                      .text(app.selectedEvent);
              
    d3.select("#event-selectors")
      .selectAll("span.event-name")
      .data(app.VALVE_EVENTS)
      .enter()
      .append("span")
      .classed("event-name", true)
      .each(function(data, idx) {
        let eventTitle = d3.select(this);

        eventTitle.append("input")
                  .attr("type", "radio")
                  .attr("class", app.formatName(data.event))
                  .attr("checked", () => { if (idx === 0) return "checked"})
                  .on("change", (d) => {
                    eventName.text(d.event)
                    app.selectedEvent = d.event;
                  })
      })
  }
}(window.app = window.app || {}));