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
                  .attr("id", app.formatName(data.event))
                  .attr("name", "event-button")
                  .attr("checked", () => { if (idx === 0) return "checked"})
                  .on("change", (d) => {
                    eventName.text(d.event)
                    app.selectedEvent = d.event;
                    app.onEventChange();
                  })

        eventTitle.append("label")
                  .attr("for", app.formatName(data.event))
                  .append("img")
                  .attr("src", "assets/images/" + data.img + ".png")
                  .attr("alt", data.event)
                  .attr("title", data.event)
                  .style("opacity", 0)
                  .style("left", "-10px");
                  
        eventTitle.select("label img")
                  .transition()
                  .delay(idx * 100)
                  .style("left", "0px")
                  .style("opacity", 1.0);

      })
  }
}(window.app = window.app || {}));