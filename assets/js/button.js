(function(app) {
  d3.select(".details-sort")
    .on("change", function () {
      let sortButton = d3.select(this);
      let checked = sortButton.property("checked");
      app.toggleSort = checked;
      app.onEventChange();
      }
    )

}(window.app = window.app || {}));