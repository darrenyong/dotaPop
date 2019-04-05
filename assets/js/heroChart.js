(function(app) {
  function sortByPickBan(data) {
    let sortedData = data.sort( (a, b) => {
      if (a.mainAttribute === b.mainAttribute) {
        if (a.pickBanRate === null || b.pickBanRate === null) {
          return a.pickBanRate === null ? 1 : -1;
        } else {
          return a.pickBanRate > b.pickBanRate ? -1 : a.pickBanRate < b.pickBanRate ? 1 : 0;
        }
      } else {
        return a.mainAttribute < b.mainAttribute ? -1 : 1;
      }
    })
    
    return sortedData;
  }

  function sortByHeroName(data) {
    let sortedData = data.sort((a, b) => {
      if (a.mainAttribute === b.mainAttribute) {
        return a.heroName < b.heroName ? -1 : a.heroName > b.heroName ? 1 : 0;
      } else {
        return a.mainAttribute < b.mainAttribute ? -1 : 1;
      }
    })

    return sortedData;
  }

  // Scales the hero according to the pick-ban rate
  const heroSizeScale = d3.scaleLinear()
                          .domain([0.0, 100.0])
                          .range([0.7, 2.0])
  
  function heroSize(rate) {
    return (rate === null) ? 1.0 : (rate === 0) ? 0.6 : heroSizeScale(rate);
  }
  
  const ATTRIBUTE = {
    "Agility": { "margin": 10, "i": 0 },
    "Intelligence": { "margin": 330, "i": 36 },
    "Strength": { "margin": 650, "i": 76 }
  }
  const HERO_MARGIN = 25;
  const HERO_SIZE = 32;
  
  // Puts 5 columns per attribute container
  function heroTop(data, idx) {
    let attribute = data.mainAttribute;
    let top = HERO_MARGIN + (Math.floor( (idx - ATTRIBUTE[attribute].i) / 5)) * (HERO_MARGIN + HERO_SIZE);
    return top + "px";
  }

  function heroLeft(data, idx) {
    let attribute = data.mainAttribute;
    let left = ATTRIBUTE[attribute].margin + ( (idx - ATTRIBUTE[attribute].i) % 5 ) * (HERO_MARGIN + HERO_SIZE);
    return left + "px";
  }

  function key(data) {
    return data.heroName;
  }

  app.renderChart = function() {
    d3.select("#hero-chart").select("#container-histogram").remove();
    d3.selectAll(".axis-label").remove();

    d3.select("#hero-chart")
      .selectAll("div.heroes-container")
      .data(d3.keys(ATTRIBUTE))
      .enter()
      .append("div")
      .attr("class", (data) => { return app.formatName(data) })
      .classed("heroes-container", true)
      .style("opacity", 1.0)

      let filterData = app.filterByEvent(app.data, app.selectedEvent);

      d3.select("#hero-chart")
        .selectAll("a.hero-icon")
        .data(filterData.values, key)
        .enter()
        .append("a")
        .attr("id", (data) => { return app.formatName(data.heroName) })
        .classed("hero-icon", true)
        .style("top", heroTop)
        .style("left", heroLeft)
  };

  app.updateChart = function(data) {
    let sortedData = (app.toggleSort) ? sortByHeroName(data.values) : sortByPickBan(data.values)
    let heroIcons = d3.selectAll("a.hero-icon")
                      .data(sortedData, key);
  
    heroIcons.style("top", heroTop)
             .style("left", heroLeft)
             .style("transform", (d) => { return "scale(" + heroSize(d.pickBanRate) + ")" })
             .classed("darken", (d) => { return d.pickBanRate === 0 })
             .classed("not-applicable", (d) => { return d.pickBanRate === null })
             .on("click", (data) => {
               app.selectedHero = data.heroName
               app.updateHeroInfo(data);
             })
  }
}(window.app = window.app || {}));