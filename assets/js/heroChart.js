(function(app) {
  const HEIGHT = 500;
  const WIDTH = 900;
  const ATTRIBUTE = {
    "Strength": { "margin": 650, "i": 76 },
    "Agility": { "margin": 10, "i": 0 },
    "Intelligence": { "margin": 330, "i": 36 }
  }
  const HERO_MARGIN = 17;
  const HERO_SIZE = 32;

  function heroTop(d, i) {
    let attribute = d.attribute;
    let top = HERO_MARGIN + (Math.floor( (i - ATTRIBUTE[attribute].i) / 6)) * (HERO_MARGIN + HERO_SIZE);
    return top + "px";
  }

  function heroLeft(d, i) {
    let attribute = d.attribute;
    let left = ATTRIBUTE[attribute].margin + ( (i - ATTRIBUTE[attribute].i) % 6 ) * (HERO_MARGIN + HERO_SIZE);
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

      let nData = app.filterByEvent(app.data, app.selectedEvent);

      d3.select("#hero-chart")
        .selectAll("a.hero-icon")
        .data(nData.values, key)
        .enter()
        .append("a")
        .attr("id", (d) => { return app.formatName(d.heroName) })
        .classed("hero-icon", true)
        .style("top", heroTop)
        .style("left", heroLeft)
  };

}(window.app = window.app || {}));