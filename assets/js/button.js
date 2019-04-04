(function(app) {
  // Changes the sort button to be selected
  d3.select(".details-sort")
    .on("change", function() {
      let sortButton = d3.select(this);
      let checked = sortButton.property("checked");
      app.toggleSort = checked;
      app.onEventChange();
    })
  
  // Shows and hides the hero details
  d3.select(".details-toggle")
    .on("change", function() {
      let heroDetailsButton = d3.select(this);
      let checked = heroDetailsButton.property("checked");

      if (checked) {
        d3.select("#chart")
          .transition()
          .style("top", "135px");
        d3.select(".detail-stats")
          .transition()
          .delay(250)
          .style("opacity", 1.0);
      } else {
        d3.select("#chart")
          .transition()
          .delay(250)
          .style("top", "0px");
        d3.select(".detail-stats")
          .transition()
          .style("opacity", 0);
      }
    })


}(window.app = window.app || {}));