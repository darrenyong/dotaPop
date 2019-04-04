(function(app) {
  const barScale = d3.scaleLinear()
                     .domain([0, 100])
                     .range([0, 940]);

  app.renderDetails = function() {
    let data = app.data[0].values[0];
    // Render hero names
    d3.select(".hero-name")
      .text(data.heroName);
    // Render pick ban percentage
    d3.select(".pb-percent")
      .text(data.pickBanRate === null ? "N/A" : data.pickBanRate.toFixed(1) + "%");
    // Render pick percentage
    d3.select(".detail-pick")
      .text(data.pickRate === null ? "N/A" : data.pickRate.toFixed(1) + "%");
    // Render ban percentage
    d3.select(".detail-ban")
      .text(data.banRate === null ? "N/A" : data.banRate.toFixed(1) + "%");
    // Render number of picked games
    d3.select(".detail-games span:first-child")
      .text(data.numPickedBanned)
    d3.select(".detail-games span:nth-child(2)")
      .text(app.data[0].total_games)

    d3.select("div.event-bar")
      .style("width", barScale(((app.data[0].picked_banned_heroes / app.data[0].total_heroes) * 100)) + "px");
    d3.select(".pb-bar span")
      .text(((app.data[0].picked_banned_heroes / app.data[0].total_heroes) * 100).toFixed(1)+"%");
  }

  app.updateHeroInfo = function(data) {
    d3.select(".hero-name")
      .text(data.heroName);
    d3.select(".pb-percent")
      .text(data.pickBanRate === null ? "N/A" : data.pickBanRate.toFixed(1) + "%");
    d3.select(".detail-pick")
      .text(data.pickBanRate === null ? "N/A" : data.pickRate.toFixed(1) + "%");
    d3.select(".detail-ban")
      .text(data.banRate === null ? "N/A" : data.banRate.toFixed(1) + "%");
    d3.select(".detail-games span:first-child")
      .text(data.numPickedBanned);
  }

}(window.app = window.app || {}));