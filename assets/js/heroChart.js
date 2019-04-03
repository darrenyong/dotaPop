(function(app) {
  const ATTRIBUTE = {
    "Agility": { "margin": 10, "i": 0 },
    "Intelligence": { "margin": 330, "i": 36 },
    "Strength": { "margin": 650, "i": 76 }
  }
  const HERO_MARGIN = 17;
  const HERO_SIZE = 32;

  function heroTop(data, idx) {
    let attribute = data.mainAttribute;
    let top = HERO_MARGIN + (Math.floor( (idx - ATTRIBUTE[attribute].i) / 6)) * (HERO_MARGIN + HERO_SIZE);
    return top + "px";
  }

  function heroLeft(data, idx) {
    let attribute = data.mainAttribute;
    let left = ATTRIBUTE[attribute].margin + ( (idx - ATTRIBUTE[attribute].i) % 6 ) * (HERO_MARGIN + HERO_SIZE);
    return left + "px";
  }

  function key(d) {
    return d.hereo;
  }

  app.renderChart = function() {
    d3.select("#hero-chart").select("#container-histogram").remove();
    d3.selectAll(".axis-label").remove();

    d3.select("#hero-chart")
      .selectAll("div.heroes-container")
      .data(d3.keys(ATTRIBUTE))
      .enter()
      .append("div")
      .attr("class", (d) => { return app.formatName(d) })
      .classed("heroes-container", true)
      .style("opacity", 1.0)

      let filterData = app.filterByEvent(app.data, app.selectedEvent);

      d3.select("#hero-chart")
        .selectAll("a.hero-icon")
        .data(filterData.values, key)
        .enter()
        .append("a")
        .attr("id", (d) => { return app.formatName(d.heroName) })
        .classed("hero-icon", true)
        .style("top", heroTop)
        .style("left", heroLeft)
  };

}(window.app = window.app || {}));